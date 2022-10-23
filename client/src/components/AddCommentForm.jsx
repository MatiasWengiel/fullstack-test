import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useAppData from "../hooks/useAppData";
import useFormData from "../hooks/useFormData";
import axios from "axios";

export default function AddCommentForm(props) {
  const { updateCommentsList } = props;

  const [tempComment, setTempComment] = useState({
    author: "",
    commentText: "",
  });

  const handleAuthorChange = async (event) => {
    event.preventDefault();
    setTempComment({ ...tempComment, author: event.target.value });
  };
  const handleTextChange = (event) => {
    event.preventDefault();
    setTempComment({ ...tempComment, commentText: event.target.value });
  };

  const updateDB = () => {
    return axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/comments`,
      {
        author: tempComment.author || "Anonymous User",
        commentText: tempComment.commentText,
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
          author: tempComment.author || "Anonymous User",
          commentText: tempComment.commentText,
          date: currentTime,
        });
        setTempComment({ author: "", commentText: "" });
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
            value={tempComment.author}
            onChange={handleAuthorChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>What would you like to say?</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            className="mb-3"
            name="commentText"
            value={tempComment.commentText}
            placeholder="Write your message here"
            onChange={handleTextChange}
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
