import Aside from "@/app/components/Aside";

export default function MyAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#FCEDCC] antialiased">   
      <section className="flex">
          <Aside />
          {children}
      </section>
        </body>
    </html>
  );
}

