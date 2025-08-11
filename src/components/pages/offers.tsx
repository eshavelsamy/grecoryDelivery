'use client'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/ui/product-card'
import { featuredProducts } from '@/data/products'

export function Offers() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Special Offers</h1>
          <p className="text-gray-600">Don't miss out on these amazing deals and discounts</p>
        </div>

        {/* Featured Banner Offer */}
        <Card className="mb-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <Badge className="bg-white text-orange-500 mb-2">
                  <Tag className="w-3 h-3 mr-1" />
                  Limited Time
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Get 30% OFF on your first order!
                </h2>
                <p className="text-orange-100 mb-4">
                  Use code WELCOME30 at checkout. Valid for new customers only.
                </p>
                <div className="flex items-center text-orange-100">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Offer expires in 5 days</span>
                </div>
              </div>
              <div className="text-center">
                <Link href="/products">
                  <Button size="lg" variant="secondary">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Offers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-primary" />
                Fresh Produce
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">20% OFF</p>
                <p className="text-gray-600">On all fruits and vegetables</p>
                <p className="text-sm text-gray-500">Valid until end of month</p>
                <Link href="/products">
                  <Button variant="outline" size="sm" className="mt-2">
                    Shop Produce
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-primary" />
                Dairy Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">Buy 2 Get 1</p>
                <p className="text-gray-600">On selected dairy items</p>
                <p className="text-sm text-gray-500">This week only</p>
                <Link href="/products">
                  <Button variant="outline" size="sm" className="mt-2">
                    Shop Dairy
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-primary" />
                Bulk Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">15% OFF</p>
                <p className="text-gray-600">On orders over $100</p>
                <p className="text-sm text-gray-500">Free delivery included</p>
                <Link href="/products">
                  <Button variant="outline" size="sm" className="mt-2">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discounted Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products on Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter and be the first to know about exclusive offers and discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
