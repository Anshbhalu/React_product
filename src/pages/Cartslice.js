import { createSlice} from '@reduxjs/toolkit'

export const Cartslice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    cartdata:[],
    cnt:0,
  },
  reducers: {
    addcart:(state , action)=>{
      
        var d=[...state.cartdata , action.payload];
        state.cartdata=d;
        console.log(action.payload);
        state.cnt += 1;
    }
  }
})

export const { addcart} = Cartslice.actions

export default Cartslice.reducer