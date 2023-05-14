import { configureStore } from '@reduxjs/toolkit'

import uiSlice from './ui'
import cartReducer from './cartSlice'

export function makeStore() {
  return configureStore({
    devTools: true,
    reducer: {
      ui: uiSlice,
      cart: cartReducer,
    },
  })
}

const store = makeStore()

export default store
