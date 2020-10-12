import {combineReducers} from 'redux'

import newItems from './newItems'
import listCategory from './listCategory'
import popularProduct from './popularProduct'
import auth from './auth'
import register from './register'
import details from './details'
import listProduct from './listProduct'

export default combineReducers({
    newItems,
    listCategory,
    popularProduct,
    auth,
    register,
    details,
    listProduct
  })