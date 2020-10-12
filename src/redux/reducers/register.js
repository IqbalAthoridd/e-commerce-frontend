const initialState = {
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'REGISTER_PENDING':{
        return {
          ...state,
          isLoading: true
        }
      }
      case 'REGISTER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: "email already exist"
        }
      }
      case 'REGISTER_FULFILLED':{
        return {
          ...state,
          isLoading: false,
          alertMsg: 'Successfully'
        }
      }
      default : {
        return state
      }
    }
  }