import { useEffect, useReducer } from "react";
import axios from "axios";

export default function useAppData() {
  const initialState = {
    comments: [],
    commentData: {
      author: "",
      commentText: "",
    },
  };

  const SET_COMMENTS = "SET_COMMENTS";
  const SET_COMMENT_DATA = "SET_COMMENT_DATA";
  const UPDATE_COMMENTS = "UPDATE_COMMENTS";

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_COMMENTS:
        return { ...state, comments: action.comments };
      case UPDATE_COMMENTS:
        return {
          ...state,
          comments: [...state.comments, action.newComment],
        };
      default:
        throw new Error(`Tried to reduce with wrong action: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setComments = (comments) => dispatch({ type: SET_COMMENTS, comments });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //Adds the latest comment from the user without needing another call to the back end.
  const updateCommentsList = (newComment) => {
    console.log(newComment);
    dispatch({ type: UPDATE_COMMENTS, newComment });
  };

  const checkForComments = state.comments.length > 0;

  return {
    updateCommentsList,
    checkForComments,
    state,
  };
}
