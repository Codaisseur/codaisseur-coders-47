import axios from "axios";

export const postsFetched = posts => {
  return {
    type: "POSTS_FETCHED",
    payload: posts,
  };
};

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const fetchNextPosts = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading());

    const posts = getState().posts.all;

    console.log("state in thunk", posts);
    const response = await axios.get(
      `${API_URL}/posts?offset=${posts.length}&limit=2`
    );

    // console.log("im in the thunk!", response.data);
    const morePosts = response.data.rows;

    dispatch(postsFetched(morePosts));
  } catch (e) {
    console.log(e.message);
  }
};

// action => { type, payload };
// thunkAction => functions.
