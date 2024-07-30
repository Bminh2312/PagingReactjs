import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    status: 'start',
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload.id)
            if(index === -1){
                action.payload = {...action.payload, quantity:1}
                state.items.push(action.payload)
            }else{ 
                state.items[index].quantity ++
                
            }

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        minusItem: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload)
            state.items[index].quantity--
            
            
        },

        addMoreItem: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload)
            state.items[index].quantity++
            
        },

        clearCart: (state) => {
            state.items = []
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state,action) => {
            state.status = 'failed';
            action.error = action.payload
        },
        setLoaded: (state) => {
            state.status = 'succeeded';
        }
    }

})

export const {addItem,removeItem,clearCart,setLoading,setError,setLoaded,minusItem,addMoreItem} = cartSlice.actions

export default cartSlice.reducer




