import { useState } from "react";
import axios from "axios";

export default function useFormData(updateCommentsList) {
  const [commentData, setCommentData] = useState({
    author: "",
    commentText: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCommentData({
      ...commentData,
      [event.target.name]: event.target.value,
    });
  };

  const updateDB = () => {
    return axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/comments`,
      {
        author: commentData.author || "Anonymous User",
        commentText: commentData.commentText,
      },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date().toString();
    const form = event.currentTarget;
    if (form.checkValidity === false) {
      event.stopPropagation();
      return;
    }
    updateDB()
      .then(() => {
        updateCommentsList({
          //Use time as temporary ID, as it will be unique between comments
          _id: currentTime,
          author: commentData.author || "Anonymous User",
          commentText: commentData.commentText,
          date: currentTime,
        });
        setCommentData({ author: "", commentText: "" });
      })
      .catch((error) => console.log(error));
  };

  return { commentData, handleChange, handleSubmit };
}
