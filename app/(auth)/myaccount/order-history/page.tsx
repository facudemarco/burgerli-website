import {inter} from "@/app/layout"
import OrderCard from "@/app/components/OrderCard"

export default function OrderHistoryPage() {
  return (
    <section className={`w-full px-10 py-5 ${inter.className}`}>
        <div className="flex gap-5 flex-wrap justify-start">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        </div>
    </section>

  )
}
