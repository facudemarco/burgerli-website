declare module "*.geojson" {
    import type { FeatureCollection } from "@/geo_json";
    const value: FeatureCollection;
    export default value;
  }