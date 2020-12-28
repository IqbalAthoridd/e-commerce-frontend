const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        alertMsg:action.payload.response.data.message
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        alertMsg: 'Successfully',
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
