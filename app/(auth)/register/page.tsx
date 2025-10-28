"use client";
import { Inter, Pattaya } from "next/font/google";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "@/app/context/SessionContext";
// import { useRouter } from "next/navigation";
import { UsersClient } from "@/types";

const pattaya = Pattaya({
  weight: ["400"],
  variable: "--font-pattaya",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RegisterPage() {
  const { registerUser, loading } = useSession();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [data, setData] = useState<UsersClient>({
    id_user_client: "a",
    name: "",
    email: "",
    password: "",
    phone: "",
    addresses: "",
    locality: "Lanús",
    notes: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const newData = {
      ...data,
      id_user_client: "hola",
      notes: "hola",
    };
    e.preventDefault();

    // setIsSubmitting(true);
    // setError(null);
    console.log(newData);

    try {
      const res = await registerUser(data);
      console.log(res);

      // router.push(`/`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mostrar loading si está verificando la sesión
  if (loading) {
    return (
      <main
        className={`w-full bg-[#fdecc9] flex items-center justify-center min-h-screen ${inter.className}`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b36912] mx-auto"></div>
          <p className="mt-4 text-[#4b2f1e]">Verificando sesión...</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`w-full bg-[#fdecc9] flex items-center my-30 justify-center p-6" ${inter.className}`}
    >
      <div className="w-full relative max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        {/* Left: image + copy */}
        <div className="relative hidden lg:block">
          <img
            src="/login.png"
            alt="Burger background"
            className="w-full object-cover blur-[5px]"
          />
          <div className="absolute inset-0 bg-[#262626] opacity-80" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2
              className={`text-4xl font-extrabold leading-tight ${pattaya.className}`}
            >
              Volvé a disfrutar de tus
              <br />
              <span className={pattaya.className}>hamburguesas favoritas</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-90">
              Iniciá sesión y descubrí promos especiales, tus hamburguesas
              favoritas y novedades deliciosas. ¡Tu próxima comida está a un
              clic!
            </p>
          </div>
        </div>

        {/* Right: form panel */}
        <form
          onSubmit={handleSubmit}
          className={`bg-[#4b2f1e] flex flex-col justify-between h-full z-0 text-white px-8 sm:px-10 py-10`}
        >
          {/* Logo circle */}
          <div className="absolute -top-2 right-5 md:right-54 z-20 flex items-center justify-center">
            <img src="/logo.png" alt="Burgerli Logo" className="w-36 z-20" />
          </div>

          <div className="pt-16 max-w-md mx-auto w-full">
            <label className="block text-sm font-semibold mt-6 mb-2">
              Nombre
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Ingrese su nombre completo"
                className="w-full bg-transparent outline-none py-3 placeholder:text-white/70"
              />
            </div>
            {/* Email */}
            <label className="block text-sm font-semibold mt-6 mb-2">
              Correo electrónico
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="Ingrese su correo electrónico"
                className="w-full bg-transparent outline-none py-3 placeholder:text-white/70"
              />
            </div>

            {/* Password */}
            <label className="block text-sm font-semibold mt-6 mb-2">
              Contraseña
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type={showPass ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                className="w-full bg-transparent outline-none py-3 placeholder:text-white/70"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="p-1 -mr-1 opacity-80 hover:opacity-100"
                aria-label={
                  showPass ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {showPass ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <label className="block text-sm font-semibold mt-6 mb-2">
              Telefono
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <input
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="Ingrese su telefono"
                className="w-full bg-transparent outline-none py-3 placeholder:text-white/70"
              />
            </div>

            <label className="block text-sm font-semibold mt-6 mb-2">
              Dirección
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <input
                value={data.addresses[0]}
                onChange={(e) =>
                  setData({ ...data, addresses: [e.target.value] })
                }
                type="text"
                placeholder="Ingrese su dirección"
                className="w-full bg-transparent outline-none py-3 placeholder:text-white/70"
              />
            </div>
            <label className="block text-sm font-semibold mt-6 mb-2">
              Localidad
            </label>
            <div className="flex items-center gap-2 bg-transparent border-b border-white/50 focus-within:border-white transition">
              <select
                onChange={(e) => setData({ ...data, locality: e.target.value })}
                className="w-full py-1"
                name="locality"
                id="locality"
              >
                <option className="text-black" value="Lanus">
                  Lanús
                </option>
                <option className="text-black" value="Gerli">
                  Gerli
                </option>
                <option className="text-black" value="Avellaneda">
                  Avellaneda
                </option>
              </select>
            </div>
            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-xl py-3 font-semibold bg-[#b36912] text-black hover:bg-[#a35f0f] active:scale-[.99] transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#b36912]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  Registrando...
                </div>
              ) : (
                "Registrarse"
              )}
            </button>

            {/* Divider */}
            {/* <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-1 bg-white/30" />
              <span className="text-sm">O ingresa con:</span>
              <div className="h-px flex-1 bg-white/30" />
            </div> */}

            {/* Social buttons */}
            {/* <div className="flex items-center justify-center gap-6">
              <SocialBtn type="google" />
              <SocialBtn type="facebook" />
              <SocialBtn type="instagram" />
            </div> */}

            {/* Login */}
            <div className="flex mt-10 gap-2 items-center justify-center">
              <p className="text-center text-sm">¿Ya tenes cuenta?</p>
              <Link
                href="/login"
                className="text-[#ffd21f] hover:underline font-semibold"
              >
                Inicia sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
