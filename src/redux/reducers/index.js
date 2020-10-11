import {combineReducers} from 'redux'

import newItems from './newItems'
import listCategory from './listCategory'

export default combineReducers({
    newItems,
    listCategory
  })