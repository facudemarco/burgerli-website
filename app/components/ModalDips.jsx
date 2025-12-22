"use client";
import { useCart } from "../context/CartContext";
import {  useState } from "react";
import Card from "./Card";


const ModalDips = ({ product }) => {
    
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    addToCart({
      name: selectedProduct.name,
      quantity: 1,
      price: selectedProduct.price,
    });

    closeModal();
  };

  return (
    <section>
      <Card
        product={product}
        onClick={(e) => {
          e.stopPropagation();
          openModal(product);
        }}
      />

      {/* Modal */}
      {selectedProduct && (
        <section className="fixed rounded-4xl inset-0 h-screen z-50 flex items-center justify-center p-4 modal-overlay">
          <div
            className="rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-primary">
              <div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 cursor-pointer right-4 rounded-full text-black font-extrabold text-3xl transition-colors"
                >
                  X
                </button>

                <div className="bg-gradient-to-t from-[#ffefdb] via-[#ffefdb] to-[#e4cb93] py-5 overflow">
                  <img
                    // src="/bg_burgers.jpg"
                    src={selectedProduct.main_image}
                    alt={selectedProduct.name}
                    className="h-96 mx-auto rounded-xl object-cover"
                  />
                </div>

                <div className="px-6 py-2 bg-[#ffefdb]">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-black mb-6">
                    {selectedProduct.id_burger && selectedProduct.description}
                    {selectedProduct.id_fries &&
                      selectedProduct.description_list[0]}
                  </p>
                </div>
                {/* Botón de agregar y total */}
                <div
                  onClick={handleAddToCart}
                  className="bg-[#FCEDCC] px-5 py-3"
                >
                  <div
                    onClick={handleAddToCart()}
                    className="bg-tertiary text-xl cursor-pointer flex text-black font-bold p-3 rounded-2xl justify-between items-center"
                  >
                    <p className="">Agregar al pedido</p>
                    <p className="rounded-lg font-bold">
                      Total: ${selectedProduct.price.toLocaleString("es-AR")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};
export default ModalDips;
