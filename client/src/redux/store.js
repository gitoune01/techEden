import {combineReducers, configureStore} from '@reduxjs/toolkit'
import products from './slices/productSlice'
const reducer  = combineReducers({
     products

})

export default configureStore({
  reducer,
})