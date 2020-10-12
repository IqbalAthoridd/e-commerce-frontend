const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_LIST_CATEGORY_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_LIST_CATEGORY_REJECTED': {
        return {
          ...state,
          isLoading: true,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_LIST_CATEGORY_FULFILLED': {
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