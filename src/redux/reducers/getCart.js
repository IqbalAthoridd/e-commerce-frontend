const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_CART_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_CART_REJECTED': {
        return {
          ...state,
          isLoading: true,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_CART_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data
        }
      }
      case 'COUNT_PLUS': {
        return {
          ...state,
        }
      }
      default : {
        return state
      }
    }
  }