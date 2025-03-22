import { configureStore } from '@reduxjs/toolkit'
// import Cart from './Cart'
// import counterSlice from './Cartslice'
import cartslice from './Cartslice'

export default configureStore({
  reducer: {
    cart:cartslice
  }
})