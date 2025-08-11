import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateItemQuantity = (productId, quantity) => {
    const safeQuantity = Number.isFinite(quantity) ? Math.max(0, quantity) : 0
    setCartItems((prev) => {
      if (safeQuantity <= 0) {
        return prev.filter((item) => item.id !== productId)
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: safeQuantity } : item
      )
    })
  }

  const clearCart = () => setCartItems([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cartItems]
  )

  const value = useMemo(
    () => ({ cartItems, addItem, removeItem, updateItemQuantity, clearCart, cartCount, cartTotal }),
    [cartItems]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}