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

  return (
    <>
      <h4>Want to join the discussion? Comment below!</h4>
      <Form
        onSubmit={handleSubmit}
        className="p-3 mt-4"
        style={{ border: "2px solid lightgrey", borderRadius: "1rem" }}
      >
        <Form.Group
          controlId="commentForm"
          className="mb-3 "
          style={{
            display: "flex",
            flexFlow: "row",
            alignItems: "center",
          }}
        >
          <Form.Label className="py-1">Name:</Form.Label>
          <Form.Control
            type="text"
            className="w-50 ms-3"
            name="author"
            placeholder="What is your name?"
            value={commentData.author}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>What would you like to say?</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            className="mb-3"
            name="commentText"
            value={commentData.commentText}
            placeholder="Write your message here"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
