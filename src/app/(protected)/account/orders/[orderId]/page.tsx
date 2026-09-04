import FrontendLayout from "@/components/layouts/FrontendLayout"
import BreadCrumb from "@/components/ui/BreadCrumb"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { FiArrowLeft, FiPackage } from "react-icons/fi"

const order = {
  id: "ORD-8FK2P9",
  createdAt: "July 27, 2026",
  status: "PENDING",
  paymentMethod: "Cash on Delivery",
  paymentStatus: "Pending",

  subtotal: 199.97,
  shipping: 0,
  tax: 10,
  total: 209.97,

  address: {
    firstName: "John",
    lastName: "Doe",
    phone: "+234 801 234 5678",
    street: "15 Admiralty Way",
    City: "Lekki",
    state: "Lagos",
    country: "Nigeria"
  },

  items: [
    {
      id: "1",
      name: "Classic Denim Jacket",
      image: "/images/product1.png",
      price: 79.99,
      quantity: 1,
      size: "M",
      color: "Black"
    },
    {
      id: "2",
      name: "Premium Hoodie",
      image: "/images/product2.png",
      price: 59.99,
      quantity: 2,
      size: "L",
      color: "Brown"
    }
  ]
}

export default function OrderDetailPage() {
  return (
    <FrontendLayout>
      <section className="mx-auto max-w-7xl py-12">
        <BreadCrumb
          items={[
            {
              label: "Home",
              href: "/"
            },
            {
              label: "Account",
              href: "/account"
            },
            {
              label: "Orders",
              href: "/account/orders"
            },
            {
              label: order.id
            }
          ]}
        />

        {/* header */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-border p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Button
              variant="outline"
              className="mb-5"
              leftIcon={<FiArrowLeft />}
            >
              Back to Orders
            </Button>

            <h2 className="text-3xl font-bold">{order.id}</h2>

            <p className="mt-2 text-muted-foreground">
              Placed on {order.createdAt}
            </p>
          </div>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            Pending
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* left */}
          <div className="space-y-6">
            {/* order Items */}
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3">
                <FiPackage className="text-primary" />

                <h2 className="text-xl font-bold">Ordered Items</h2>
              </div>

              <div className="mt-8 space-y-6">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-5 rounded-xl border border-border p-5 sm:flex-row"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={130}
                      height={160}
                      className="rounded-xl object-cover"
                    />

                    <div className="flex flex-1 justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>

                        <div className="mt-3 flex flex-wrap gap-2 text-sm">
                          <span className="rounded-full bg-surface px-3 py-1">
                            Size: {item.size}
                          </span>
                          <span className="rounded-full bg-surface px-3 py-1">
                            Color: {item.color}
                          </span>
                          <span className="rounded-full bg-surface px-3 py-1">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right */}
        </div>
      </section>
    </FrontendLayout>
  )
}
