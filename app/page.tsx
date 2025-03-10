import Carrusel from './components/home/Carrusel';
import Productos from './components/home/Productos'
import Cart from './components/home/Cart'
import Sucursales from './components/home/Sucursales'
import Zonas from './components/home/Zonas';



export default function Home() {
  return (
    <main className='w-full'>
      <section id="carrusel">
          <Carrusel />
      </section>
      <section 
      className='flex justify-between my-10 mx-5 gap-10 rounded-xl' 
      id="tienda"
      >
          <Productos />

          <Cart />
      </section>
      <section id="sucursales">
          <Sucursales />
      </section>
      <section id="zonas">
          <Zonas/>
      </section>
    </main>
  );
}
