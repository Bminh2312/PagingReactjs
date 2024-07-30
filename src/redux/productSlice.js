import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    items: [],
    status: 'start',
    total:0,
    error: null,
}
const url = 'https://66a06e1c7053166bcabb6a09.mockapi.io/api/v1/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const respone = await axios.get(url);
    return respone.data;
})

export const pageProducts = createAsyncThunk('products/pageProducts', async ({page,limit}) => {
    const respone = await axios.get(url+'/'+'?page='+page+'&'+'limit='+limit);
    return respone.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(pageProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(pageProducts.fulfilled, (state,action)=>{
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(pageProducts.rejected, (state,action)=>{
                state.status = 'failed'
                state.items = action.error.message
            })
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state,action)=>{
                state.status = 'succeeded'
                state.total = action.payload.length
            })
            .addCase(fetchProducts.rejected, (state,action)=>{
                state.status = 'failed'
                state.total = action.payload.length
            })
    }
})

export default productSlice.reducer