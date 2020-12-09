const initialState = {
  loading: true,
  all: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS_FETCHED": {
      const newPosts = action.payload;
      return { ...state, all: [...state.all, ...newPosts], loading: false };
    }
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
}
