import { pattaya } from "@/app/layout"
import './Productos.css'

export default function Productos() {
  return (
    <section className="rounded-xl w-3/4 text-white">
        <div className="relative rounded-xl bg_promos w-full h-32">
            <div className={`${pattaya.className} absolute rounded-xl inset-0 text-5xl z-10 flex items-center justify-center text-yellow-400 font-bold`}>
              Promociones
            </div>
            <img
              src="./bg_promos.jpg"
              alt="Promociones"
              className="rounded-xl after w-full h-full object-cover bg-center absolute top-0 left-0"
            />
        </div>
        <ul className="text-black flex justify-between mt-10 mb-16">
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
        </ul>
        <div className="relative rounded-xl bg_promos w-full h-32">
            <div className={`${pattaya.className} absolute rounded-xl inset-0 text-5xl z-10 flex items-center justify-center text-yellow-400 font-bold`}>
              Hamburguesas
            </div>
            <img
              src="./bg_burgers.jpg"
              alt="Promociones"
              className="rounded-xl after w-full h-full object-cover bg-center absolute top-0 left-0"
            />
        </div>
        <ul className="text-black grid grid-cols-5 justify-items-center mt-10">
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            
        </ul>
        <div className="relative rounded-xl bg_promos w-full h-32">
            <div className={`${pattaya.className} absolute rounded-xl inset-0 text-5xl z-10 flex items-center justify-center text-yellow-400 font-bold`}>
              Acompaniamientos
            </div>
            <img
              src="./bg_papas.jpg"
              alt="Promociones"
              className="rounded-xl after w-full h-full object-cover bg-center absolute top-0 left-0"
            />
        </div>
        <ul className="text-black grid grid-cols-5 justify-items-center mt-10">
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
        </ul>
        <div className="relative rounded-xl bg_promos w-full h-32">
            <div className={`${pattaya.className} absolute rounded-xl inset-0 text-5xl z-10 flex items-center justify-center text-yellow-400 font-bold`}>
              Bebidas
            </div>
            <img
              src="./bg_bebidas.jpg"
              alt="Promociones"
              className="rounded-xl after w-full h-full object-cover bg-center absolute top-0 left-0"
            />
        </div>
        <ul className="text-black grid grid-cols-5 justify-items-center mt-10">
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
            <li className="flex flex-col w-56 bg-amber-50 rounded-xl mb-16">
                <img className="mx-auto" src="./logo.png" width="150px" alt="" />
                <div className="flex flex-col gap-2  bg-[#442915] rounded-b-xl text-white py-2 px-2">
                <p className="font-bold">Cheeseburger</p>
                <small>Medallón de carne de 100 g con queso cheddar, acompañado de papas clásicas. (Bebida no incluida)
                </small>
                <span className="font-bold">$10.000</span>
                </div>
            </li>
        </ul>
    </section>
  )
}
