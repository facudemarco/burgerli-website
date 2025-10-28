import fs from "node:fs";
import path from "node:path";
import { DOMParser } from "@xmldom/xmldom";          // ✅ correcto para ESM
import { kml as kmlToGeo } from "@tmcw/togeojson";   // podés usar default también
import simplify from "@turf/simplify";

const INPUTS = [
  { in: "geo/gerli.kml", out: "geo/gerli.geojson", tag: "GERLI" },
];

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readKmlAsDom(kmlPath) {
  const abs = path.resolve(kmlPath);
  if (!fs.existsSync(abs)) throw new Error(`No se encuentra KML: ${abs}`);
  const xmlStr = fs.readFileSync(abs, "utf8");
  return new DOMParser().parseFromString(xmlStr, "text/xml");
}

function keepPolygonsOnly(fc) {
  fc.features = fc.features.filter(
    (f) => f.geometry && (f.geometry.type === "Polygon" || f.geometry.type === "MultiPolygon")
  );
  return fc;
}

const up = (s) => (s || "").toUpperCase();

function main() {
  console.log("▶️  KML → GeoJSON\n");

  for (const f of INPUTS) {
    try {
      console.log("— Procesando:", f.in);
      const dom = readKmlAsDom(f.in);

      // togeojson devuelve un FeatureCollection
      let fc = kmlToGeo(dom);

      if (!fc?.features?.length) {
        console.warn("   ⚠️ KML sin features (¿exportaste la capa correcta en My Maps?).");
      }

      fc = keepPolygonsOnly(fc);

      // Si tu KML tiene varias capas/placemarks y querés filtrar por nombre
      if (f.tag) {
        const filtered = fc.features.filter(
          (ft) => up(ft.properties?.name).includes(f.tag) || up(ft.properties?.description).includes(f.tag)
        );
        if (filtered.length) fc.features = filtered;
      }

      // Simplificá si querés bajar peso (~50–100 m aprox con 0.0005–0.001)
      const simplified = simplify(fc, { tolerance: 0.0005, highQuality: false, mutate: false });

      ensureDirExists(f.out);
      fs.writeFileSync(path.resolve(f.out), JSON.stringify(simplified, null, 2), "utf8");
      console.log(`   ✔ OK → ${f.out} (${simplified.features.length} feature(s))\n`);
    } catch (e) {
      console.error(`   ✖ Error con ${f.in}:`, e.message || e);
      process.exitCode = 1;
    }
  }

  console.log("✅ Listo.");
}

main();
