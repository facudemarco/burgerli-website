export default function OrderCard() {
  return (
    <div className="flex flex-col px-4 h-24 py-2 bg-primary rounded-xl shadow-lg shadow-black/60 text-white gap-2 w-full xl:w-[380px]">
            <small className="font-medium">29/03/2025</small>
            <p className="text-yellow-200 text-sm font-bold">Estado: En camino a tu casa</p>
            <div className="flex justify-between items-center">
                <small className="font-medium">$25.000</small>
                <small className="font-medium">3 Productos</small>
            </div>
        </div>
  )
}
