import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddCommentForm(props) {
  const { updateCommentsList } = props;

  const [commentData, setCommentData] = useState({
    author: "",
    commentText: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date().toString();

    return axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/comments`,
        {
          author: commentData.author || "Anonymous User",
          commentText: commentData.commentText,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
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

  return (
    <Form>
      <Form.Group controlId="commentForm">
        <Form.Label>Want to reply? Add your comment here!</Form.Label>
        <Form.Control
          type="text"
          name="author"
          placeholder="What is your name?"
          value={commentData.author}
          onChange={handleChange}
        />
        <Form.Control
          type="text"
          name="commentText"
          value={commentData.commentText}
          placeholder="What would you like to say?"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
