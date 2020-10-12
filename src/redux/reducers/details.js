const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_DETAILS_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_DETAILS_REJECTED': {
        return {
          ...state,
          isLoading: true,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_DETAILS_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data[0]
        }
      }
      default : {
        return state
      }
    }
  }