const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    size: "L",
    quantity: 2,
    price: 79.99,
    image: "/images/product1.png"
  },
  {
    id: 2,
    name: "Premium Hoodie",
    size: "M",
    quantity: 1,
    price: 59.99,
    image: "/images/product2.png"
  }
]

export default function OrderPage() {
  return (
    <section>
      {/* heder */}
      <div>
        <h2 className="text-3xl font-semibold">Order #515151</h2>
        <p className="mt-2 text-muted-foreground">Placed on July 17, 2026</p>
      </div>
    </section>
  )
}
