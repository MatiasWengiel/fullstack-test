import { useEffect, useState } from "react";
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
  }, []);

  //Adds the latest comment from the user without needing another call to the back end.
  const updateCommentsList = (newComment) => {
    setComments([...comments, newComment]);
  };
  const checkForComments = comments.length > 0;

  return { comments, updateCommentsList, checkForComments };
}
