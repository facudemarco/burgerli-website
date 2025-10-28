import type { FeatureCollection, Feature, Polygon, MultiPolygon } from "geojson";

// Importa desde la carpeta raíz /geo
import wilde from "@/geo/wilde.geojson";
import lanus from "@/geo/lanus.geojson";
import gerli from "@/geo/gerli.geojson";

type Poly = Feature<Polygon | MultiPolygon>;

function firstPoly(fc: FeatureCollection): Poly {
  const f = fc.features.find(
    (x) => x.geometry && (x.geometry.type === "Polygon" || x.geometry.type === "MultiPolygon")
  ) as Poly | undefined;
  if (!f) throw new Error("GeoJSON sin polígonos");
  return f;
}

export const shippingZones = [
  { id: "zona-wilde", name: "WILDE", price: 3500, polygon: firstPoly(wilde as FeatureCollection) },
  { id: "zona-lanus", name: "LANÚS", price: 4500, polygon: firstPoly(lanus as FeatureCollection) },
  { id: "zona-gerli", name: "GERLI", price: 4000, polygon: firstPoly(gerli as FeatureCollection) },
] as const;
