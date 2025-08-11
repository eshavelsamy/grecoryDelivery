export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  rating: number
  inStock: boolean
  originalPrice?: number
  discount?: number
}

export const categories = [
  "All",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Meat & Seafood",
  "Bakery",
  "Beverages",
  "Snacks",
  "Frozen Foods",
]

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Bananas",
    price: 45,
    originalPrice: 3.99,
    discount: 25,
    image: "/10.jpg",
    category: "Fruits & Vegetables",
    description: "Fresh, ripe bananas perfect for snacking or baking.",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "2",
    name: "Organic Milk",
    price: 75,
    image: "/images/1.webp",
    category: "Dairy & Eggs",
    description: "Fresh organic whole milk from grass-fed cows.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "3",
    name: "Salmon Fillet",
    price: 200,
    originalPrice: 15.99,
    discount: 19,
    image: "/images/2.png",
    category: "Meat & Seafood",
    description: "Fresh Atlantic salmon fillet, perfect for grilling.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "4",
    name: "Whole Wheat Bread",
    price: 59,
    image: "/images/3.png",
    category: "Bakery",
    description: "Freshly baked whole wheat bread, soft and nutritious.",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "5",
    name: "Orange Juice",
    price: 79,
    image: "/images/4.png",
    category: "Beverages",
    description: "100% pure orange juice, no added sugar.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "6",
    name: "Mixed Nuts",
    price: 499,
    originalPrice: 11.99,
    discount: 25,
    image: "/images/5.png",
    category: "Snacks",
    description: "Premium mixed nuts with almonds, cashews, and walnuts.",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "7",
    name: "Frozen Pizza",
    price: 119,
    image: "/images/6.png",
    category: "Frozen Foods",
    description: "Delicious frozen margherita pizza, ready in 15 minutes.",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "8",
    name: "Fresh Apples",
    price: 249,
    image: "/images/7.png",
    category: "Fruits & Vegetables",
    description: "Crisp and sweet red apples, perfect for snacking.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "9",
    name: "Greek Yogurt",
    price: 81,
    originalPrice: 2.49,
    discount: 20,
    image: "/images/8.png",
    category: "Dairy & Eggs",
    description: "Creamy Greek yogurt with live cultures.",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "10",
    name: "Chicken Breast",
    price: 159,
    image: "/images/9.png",
    category: "Meat & Seafood",
    description: "Fresh boneless chicken breast, perfect for any meal.",
    rating: 4.6,
    inStock: true,
  },
]

export const featuredProducts = products.filter((p) => p.discount && p.discount > 0)
export const newArrivals = products.slice(0, 4)
