import { createSlice } from '@reduxjs/toolkit'

const CART_KEY = 'myCart'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem(CART_KEY)) || [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item._id === newItem._id)
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 })
      } else {
        existingItem.quantity++
      }
      // Update local storage
      localStorage.setItem(CART_KEY, JSON.stringify(state.items))
    },
    removeItem(state, action) {
      const id = action.payload
      state.items = state.items.filter((item) => item._id !== id)

      // Update local storage
      localStorage.setItem(CART_KEY, JSON.stringify(state.items))
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item._id === id)
      if (item) {
        item.quantity = quantity

        // Update local storage
        const updatedItems = state.items.map((item) => (item._id === id ? { ...item, quantity } : item))
        localStorage.setItem(CART_KEY, JSON.stringify(updatedItems))
      }
    },
    clearCart(state) {
      state.items = []

      // Update local storage
      localStorage.setItem(CART_KEY, JSON.stringify(state.items))
    },
  },
})

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
