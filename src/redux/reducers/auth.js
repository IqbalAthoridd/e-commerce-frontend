const initialState = {
  isLogin: false,
  isError: false,
  isSuccess: false,
  token: '',
  alertMsg: '',
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'AUTH_USER_FULFILLED': {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        isLoading: false,
        isLogin: true,
        isSuccess: true,
        alertMsg: 'Successfully login',
      };
    }
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: action.payload.data.data,
        alertMsg: 'Successfully login',
      };
    }

    case 'UPDATE_DATA_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case 'UPDATE_DATA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_DATA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }

    case 'UPLOAD_IMAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case 'UPLOAD_IMAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPLOAD_IMAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        alertMsg: '',
      };
    }

    case 'LOGOUT_USER': {
      return {
        isLogin: false,
        token: '',
        isError: false,
        alertMsg: 'Logout Successfully',
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        alertMsg: '',
        isSuccess:false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
