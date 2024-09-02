import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice"

const store=configureStore({
    reducer:{
        cartState :cartSlice.reducer
    }
})

export default store