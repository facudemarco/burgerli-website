export interface Product {
    quantity: number;
    name: string;
    price: number;
    size: string;
    sin: string[];
    fries: string;
  }
  


function parseJsonMaybeDouble(s: string): any | null {
  try {
    const once = JSON.parse(s);
    if (typeof once === "string") return JSON.parse(once); // doble dump
    return once;
  } catch {
    return null;
  }
}

function looksLikeFullJson(s: string) {
  const t = s.trim();
  return (
    (t.startsWith("{") && t.endsWith("}")) ||
    (t.startsWith('"') && t.endsWith('"')) // string JSON escapado
  );
}

/**
 * Front-only: recibe lo que venga (strings JSON por producto o fragmentos)
 * y devuelve Product[] normalizado.
 */
export function parseLineItemsFront(input: unknown): Product[] {
  if (!Array.isArray(input)) return [];

  const arr = input
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!arr.length) return [];

  // ✅ Caso 1: lista de productos ya serializados (DB)
  const parsedDirect: Product[] = arr
    .map((s) => {
      if (!looksLikeFullJson(s)) return null;
      const obj = parseJsonMaybeDouble(s);
      if (obj && typeof obj === "object") return obj as Product;
      return null;
    })
    .filter((x): x is Product => x !== null);

  const seemsDirect = parsedDirect.some(
    (p) => p && typeof p === "object" && ("name" in p || "price" in p || "quantity" in p)
  );

  if (seemsDirect) return parsedDirect;

  // ✅ Caso 2: fragmentos rotos => reconstruir productos
  return parseBrokenFragments(arr);
}

/* ------------------ Reconstrucción de fragmentos (front) ------------------ */

function parseBrokenFragments(fragments: string[]): Product[] {
  const products: Product[] = [];

  let parts: string[] = [];
  let hasName = false;
  let braceBalance = 0;

  let pendingSin: string[] = [];
  let inSin = false;
  let sinJustClosed = false;

  const isKeyFragment = (t: string) => /^"[^"]+"\s*:/.test(t);
  const isObjectStart = (t: string) => t.trim().startsWith("{");
  const isLooseString = (t: string) => /^"[^"]+"\s*[\],]?$/.test(t);

  const extractSinStrings = (s: string): string[] => {
    const out: string[] = [];
    const re = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
    let m: RegExpExecArray | null;

    while ((m = re.exec(s))) {
      const val = m[1];
      if (["sin", "name", "price", "quantity", "size", "fries"].includes(val)) continue;
      out.push(val);
    }
    return out;
  };

  const appendSmart = (chunk: string) => {
    chunk = chunk.trim();
    if (!chunk) return;

    if (!parts.length) {
      parts.push(chunk);
      return;
    }

    const prevLast = parts[parts.length - 1].trim().slice(-1);
    const nextFirst = chunk.trim()[0];

    if (
      prevLast === "," ||
      nextFirst === "}" ||
      nextFirst === "]" ||
      prevLast === "{" ||
      prevLast === "["
    ) {
      parts.push(chunk);
      return;
    }

    parts.push("," + chunk);
  };

  const finalize = () => {
    if (!parts.length) return;

    let json = parts.join("");
    if (!json.trim().startsWith("{")) json = "{" + json;
    if (!json.trim().endsWith("}")) json = json + "}";
    json = json.replace(/,\s*([}\]])/g, "$1");

    const obj = parseJsonMaybeDouble(json);
    if (obj && typeof obj === "object") {
      if (pendingSin.length) {
        const existing = Array.isArray(obj.sin) ? obj.sin : [];
        obj.sin = existing.length ? [...existing, ...pendingSin] : pendingSin;
      }
      products.push(obj as Product);
    }

    parts = [];
    hasName = false;
    braceBalance = 0;
    pendingSin = [];
    inSin = false;
    sinJustClosed = false;
  };

  for (const raw of fragments) {
    const t = raw.trim();
    if (!t) continue;

    // sin start
    if (t.includes('"sin"') && t.includes("[")) {
      inSin = true;
      sinJustClosed = false;

      if (!t.includes("[]")) pendingSin.push(...extractSinStrings(t));

      if (t.includes("]")) {
        inSin = false;
        sinJustClosed = true;
      }
      continue;
    }

    if (inSin) {
      pendingSin.push(...extractSinStrings(t));
      if (t.includes("]")) {
        inSin = false;
        sinJustClosed = true;
      }
      continue;
    }

    // string suelto justo después del sin: "Cheddar"]
    if (sinJustClosed && isLooseString(t)) {
      pendingSin.push(...extractSinStrings(t));
      continue;
    } else {
      sinJustClosed = false;
    }

    // no arrancar con basura
    if (!parts.length && !(isKeyFragment(t) || isObjectStart(t))) continue;

    // nuevo { "name": ... } si ya teníamos name => producto nuevo
    const startsNewNamedObject = t.includes('"name"') && isObjectStart(t);
    if (startsNewNamedObject && parts.length && hasName) finalize();

    appendSmart(t);

    if (t.includes('"name"')) hasName = true;

    braceBalance += (t.match(/{/g)?.length ?? 0) - (t.match(/}/g)?.length ?? 0);

    // producto completo
    if (hasName && braceBalance === 0) finalize();
  }

  finalize();
  return products;
}
