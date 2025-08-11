"use client";

import { Navbar } from "@/components/layout/navbar";
import { Home } from "@/components/pages/home";
import { Products } from "@/components/pages/products";
import { Cart } from "@/components/pages/cart";
import { Orders } from "@/components/pages/orders";
import { Offers } from "@/components/pages/offers";
import { ProductDetail } from "@/components/pages/product-detail";
import { Toaster } from "@/components/ui/toaster";
import { useParams } from "next/navigation";

export default function App() {
  const params = useParams();
  const productId = params?.id as string;

  // Render the appropriate component based on the route
  const renderPage = () => {
    if (typeof window === 'undefined') return null; // Server-side guard

    const path = window.location.pathname;

    switch (path) {
      case "/":
        return <Home />;
      case "/products":
        return <Products />;
      case path.match(/^\/products\/.+$/)?.input:
        return <ProductDetail productId={productId} />;
      case "/cart":
        return <Cart />;
      case "/orders":
        return <Orders />;
      case "/offers":
        return <Offers />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Toaster />
    </div>
  );
}