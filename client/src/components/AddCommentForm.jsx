import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddCommentForm(props) {
  const [commentData, setCommentData] = useState({
    author: "",
    commentText: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
    console.log(commentData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/comments`,
        {
          ...commentData,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then(() => {
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
