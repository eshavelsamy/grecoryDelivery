import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  date: string
  status: 'pending' | 'processing' | 'delivered'
}

interface CartStore {
  items: CartItem[]
  orders: Order[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  placeOrder: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orders: [],
      
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === item.id)
        
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          })
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] })
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) })
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      
      placeOrder: () => {
        const items = get().items
        const total = get().getTotalPrice()
        const newOrder: Order = {
          id: Date.now().toString(),
          items: [...items],
          total,
          date: new Date().toISOString(),
          status: 'pending'
        }
        
        set({
          orders: [newOrder, ...get().orders],
          items: []
        })
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
