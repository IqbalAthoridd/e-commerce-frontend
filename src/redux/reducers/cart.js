const initialState = {
    isError: false,
    alertMsg: '',
    isLoading:false,
    isSuccess:false,
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'ADD_CART_PENDING':{
        return {
          ...state,
          isLoading: true,
          isSuccess:false
        }
      }
      case 'ADD_CART_REJECTED': {
        console.log(action)
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess:false,
          alertMsg: "Failed added "
        }
      }
      case 'ADD_CART_FULFILLED':{
        
        return {
          ...state,
          isLoading: false,
          alertMsg: 'Added to cart',
          isSuccess:true,
        }
      }
      case 'CLEAR_MESSAGE':{
        
        return {
          ...state,
          isError:false,
          isSuccess:false,
        }
      }
      default : {
        return state
      }
    }
  }