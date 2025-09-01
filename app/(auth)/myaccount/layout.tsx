import Aside from "@/app/components/Aside";

export default function MyAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="flex">
          <Aside />
          {children}
      </section>
  );
}

