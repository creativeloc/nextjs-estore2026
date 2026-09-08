"use client"

import { useState } from "react"

const availableSizes = ["S", "M", "L", "XL", "XXL"]

const availableColors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Gray", value: "#6B7280" },
  { name: "Navy", value: "#1E3A8A" },
  { name: "Blue", value: "#2563EB" },
  { name: "Brown", value: "#8B5E3C" },
  { name: "Red", value: "#DC2626" }
]

export default function AddProductPage() {
  const [images, setImages] = useState<File[]>([])
  const [sises, setSizes] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [bestSeller, setBestSeller] = useState(false)

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h2 className="text-3xl font-semibold">Add Product</h2>

        <p className="mt-2 text-muted-foreground">
          Create a New Product for your store
        </p>
      </div>
    </div>
  )
}
