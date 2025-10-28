import { NextResponse } from "next/server";
import { z } from "zod";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { shippingZones } from "@/app/data/shipping-zones";

const Body = z.object({
  place_id: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

async function getCoordsFromPlaceId(placeId: string) {
  const key = process.env.GOOGLE_MAPS_SERVER_KEY;
  if (!key) throw new Error("Falta GOOGLE_MAPS_SERVER_KEY");

  const url = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
  url.searchParams.set("fields", "id,formattedAddress,location");

  const res = await fetch(url.toString(), {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "id,formattedAddress,location",
    },
    // Opcional: cache del lado del server si querés
    // next: { revalidate: 60 }
  });

  if (!res.ok) return null;
  const data = await res.json();
  const lat = data?.location?.latitude;
  const lng = data?.location?.longitude;
  if (lat == null || lng == null) return null;
  return { lat, lng, formattedAddress: data.formattedAddress as string | undefined };
}

function findZone(lat: number, lng: number) {
  const p = point([lng, lat]);
  for (const z of shippingZones) {
    if (booleanPointInPolygon(p, z.polygon as any)) {
      return { id: z.id, name: z.name, price: z.price };
    }
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = Body.safeParse(json);
    if (!parsed.success) return NextResponse.json({ ok: false, error: "Body inválido" }, { status: 400 });

    let { lat, lng } = parsed.data;

    if ((lat == null || lng == null) && parsed.data.place_id) {
      const coords = await getCoordsFromPlaceId(parsed.data.place_id);
      if (!coords) return NextResponse.json({ ok: false, error: "place_id inválido" }, { status: 422 });
      lat = coords.lat; lng = coords.lng;
    }

    if (lat == null || lng == null) {
      return NextResponse.json({ ok: false, error: "Enviá place_id o lat/lng" }, { status: 400 });
    }

    const zone = findZone(lat, lng);
    if (!zone) {
      return NextResponse.json({ ok: true, serviceable: false, reason: "Fuera de zona", location: { lat, lng } });
    }
    return NextResponse.json({ ok: true, serviceable: true, zone, location: { lat, lng } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
