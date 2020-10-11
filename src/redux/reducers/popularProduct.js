const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_POPULAR_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_POPULAR_REJECTED': {
        return {
          ...state,
          isLoading: true,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_POPULAR_FULFILLED': {
        console.log(state)
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data
        }
      }
      default : {
        return state
      }
    }
  }