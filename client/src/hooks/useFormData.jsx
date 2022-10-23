import axios from "axios";
import useAppData from "./useAppData";

export default function useFormData() {
  const { updateCommentsList, setCommentData, state } = useAppData();

  const updateDB = () => {
    return axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/comments`,
      {
        author: state.commentData.author || "Anonymous User",
        commentText: state.commentData.commentText,
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
          author: state.commentData.author || "Anonymous User",
          commentText: state.commentData.commentText,
          date: currentTime,
        });
        setCommentData({ author: "", commentText: "" });
      })
      .catch((error) => console.log(error));
  };

  return { handleSubmit };
}
