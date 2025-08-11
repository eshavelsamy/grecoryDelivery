"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/navbar"
import { Home } from "@/components/pages/home"
import { Products } from "@/components/pages/products"
import { Cart } from "@/components/pages/cart"
import { Orders } from "@/components/pages/orders"
import { Offers } from "@/components/pages/offers"
import { ProductDetail } from "@/components/pages/product-detail"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail productId={""} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  )
}

export function HomePage() {
  return <Home />
}
