import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {setLoading, setError, setProducts} = productSlice.actions;
export default productSlice.reducer
