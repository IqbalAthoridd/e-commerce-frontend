const initialState = {
    isError: false,
    alertMsg: '',
    isLoading:false
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'ADD_CART_PENDING':{
        return {
          ...state,
          isLoading: true
        }
      }
      case 'ADD_CART_REJECTED': {
        console.log(action)
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: "Failed added "
        }
      }
      case 'ADD_CART_FULFILLED':{
        
        return {
          ...state,
          isLoading: false,
          alertMsg: 'Added to cart'
        }
      }
      default : {
        return state
      }
    }
  }