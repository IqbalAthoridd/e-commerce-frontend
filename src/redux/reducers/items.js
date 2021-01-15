const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ITEMS_REJECTED': {
      return {
        ...state,
        isLoading: true,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_ITEMS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'COUNT_PLUS': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
