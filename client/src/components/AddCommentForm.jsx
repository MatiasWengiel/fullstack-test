import { Form, Button } from "react-bootstrap";
import useFormFunctions from "../hooks/useFormFunctions";

export default function AddCommentForm(props) {
  const { handleSubmit, handleChange, commentData } = useFormFunctions(
    props.updateCommentsList
  );

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
