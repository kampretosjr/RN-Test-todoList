const initialState = {
  ListKategori: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const buku = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_KATEGORI_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_KATEGORI_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_KATEGORI_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListKategori: action.payload.data,
      };
///////////POST////////////////////////////////////////////
    case "POST_KATEGORI_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
  case "POST_KATEGORI_REJECTED":
    return {
      ...state,
      isLoading: false,
      isRejected: true
    };
  case "POST_KATEGORI_FULFILLED":
    return {
      ...state,
      isLoading: false,
      isFulfilled: true,
      ListKategori: action.payload.data
    };
//////////////////////////////////////////////////////

    case 'GET_COLOR_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_COLOR_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_COLOR_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListKategori: action.payload.data,
      };      
    default:
      return state;
  }
};

export default buku;
