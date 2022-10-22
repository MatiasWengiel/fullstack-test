import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import useFormData from "../hooks/useFormData";

export default function AddCommentForm(props) {
  const { handleChange, commentData, handleSubmit } = useFormData(
    props.updateCommentsList
  );

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
