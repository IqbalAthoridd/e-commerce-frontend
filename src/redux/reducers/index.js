import {combineReducers} from 'redux'

import newItems from './newItems'
import listCategory from './listCategory'
import popularProduct from './popularProduct'

export default combineReducers({
    newItems,
    listCategory,
    popularProduct
  })