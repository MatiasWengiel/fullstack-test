import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import axios from "axios";

export default function useAppData() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  }, [comments]);

  const commentsList = comments.map((comment) => {
    return (
      <Comment
        key={comment._id}
        author={comment.author}
        text={comment.commentText}
        sent={new Date(comment.date).toString()}
      />
    );
  });

  //Adds the latest comment from the user without needing another call to the back end.
  const updateCommentsList = (newComment) => {
    setComments([...comments, newComment]);
  };

  return { commentsList, updateCommentsList };
}