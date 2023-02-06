import axios from 'axios';
import { setProducts, setLoading, setError } from '../slices/productSlice';

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed.

export const getProducts = ()=> async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('/api/products/getproducts');
    dispatch(setProducts(data));
  } catch (err) {
    dispatch(
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
          ? err.message
         : 'An unexpected error occurred'
      )
    );
  }
};
