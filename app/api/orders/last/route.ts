import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { order_id } = await req.json();
  if (!order_id)
    return NextResponse.json({ error: "order_id required" }, { status: 400 });

  const c = await cookies();
  c.set({
    name: "last_order_id",
    value: order_id,
    httpOnly: true, // server-only
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 10, // 10 minutos
  });

  return new NextResponse(null, { status: 204 });
}

export async function GET() {
  const c = await cookies();
  const id = c.get("last_order_id")?.value;
  return NextResponse.json({ order_id: id ?? null });
}

export async function DELETE() {
  const c = await cookies();
  c.set("last_order_id", "", { path: "/", maxAge: 0 });
  return new NextResponse(null, { status: 204 });
}
