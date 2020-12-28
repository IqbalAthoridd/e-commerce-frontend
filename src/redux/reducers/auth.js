const initialState = {
    isLogin: false,
    isError: false,
    isSuccess:false,
    token: '',
    alertMsg: ''
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'AUTH_USER_PENDING':{
        return {
          ...state,
          isLoading: true,
          isSuccess:false
        }
      }
      case 'AUTH_USER_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess:false,
          alertMsg:action.payload.response.data.message
        }
      }
      case 'AUTH_USER_FULFILLED':{
        localStorage.setItem('token',action.payload.data.token)
        return {
          ...state,
          token: action.payload.data.token,
          isLoading: false,
          isLogin: true,
          isSuccess:true,
          alertMsg: 'Successfully login'
        }
      }
      case 'LOGOUT_USER': {
        return {
          isLogin: false,
          token: '',
          isError: false,
          alertMsg: 'Logout Successfully'
        }
      }
      case 'CLEAR_MESSAGE': {
        return {
          ...state,
          alertMsg: '',
         isError:false

        }
      }
      default : {
        return state
      }
    }
  }