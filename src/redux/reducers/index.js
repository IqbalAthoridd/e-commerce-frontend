import {combineReducers} from 'redux'

import newItems from './newItems'
import listCategory from './listCategory'
import popularProduct from './popularProduct'
import auth from './auth'
import register from './register'
import details from './details'
import listProduct from './listProduct'
import cart from './cart'
import getCart from './getCart'
import adress from './adress'

export default combineReducers({
    newItems,
    listCategory,
    popularProduct,
    auth,
    register,
    details,
    listProduct,
    cart,
    getCart,
    adress
  })