export default function Header() {
  return (
        <header className="flex justify-between text-md font-semibold bg-orange-400 py-2 px-5">
            <img src="/logo.png" className="size-18 rounded-full" alt="Logo Burgerli" />
            <section className="flex gap-10 items-center">
                <ul className="flex gap-10">
                    <li>Hamburguesas</li>
                    <li>Acompaniamientos</li>
                    <li>Bebidas</li>
                    <li>Sucursales</li>
                </ul>

                <section>
                    <div className="flex gap-5 items-center">
                        <img src="logo.png"  className="size-14 rounded-full" alt="Logo perfil" />
                        <span>Perfil</span>
                        <span> - </span>
                    </div>
                </section>
            </section>
        </header>
    )
}
