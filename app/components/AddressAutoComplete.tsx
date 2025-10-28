"use client";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function AddressAutocomplete({ onSelect }: { onSelect: (p: { place_id: string; formatted?: string; lat: number; lng: number }) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
      libraries: ["places"],
      language: "es",
      region: "AR",
    });

    loader.load().then(() => {
      setLoading(false);
      if (!inputRef.current) return;

      const ac = new google.maps.places.Autocomplete(inputRef.current, {
        fields: ["place_id", "geometry", "formatted_address"],
        componentRestrictions: { country: "ar" },
      });

      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (!place?.place_id || !place.geometry?.location) return;
        onSelect({
          place_id: place.place_id,
          formatted: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      });
    });
  }, [onSelect]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Dirección</label>
      <input ref={inputRef} disabled={loading} className="w-full border rounded p-2" placeholder="Calle 123, Ciudad" />
      <p className="text-xs text-neutral-500">Elegí una sugerencia (obliga a desambiguar).</p>
    </div>
  );
}
