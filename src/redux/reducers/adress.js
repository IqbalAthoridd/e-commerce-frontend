const initialState = {
    adress: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_ADRESS_PENDING' : {
        return {
          ...state,
          isLoading: true,
          isError:false,
          alertMsg: ''
        }
      }
      case 'GET_ADRESS_REJECTED': {
        return {
          ...state,
          isLoading: true,
          isError: true,
          alertMsg:action.payload.response.data.message
        }
      }
      case 'GET_ADRESS_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          adress: action.payload.data.data
        }
      }
      default : {
        return state
      }
    }
  }