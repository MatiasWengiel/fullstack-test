import { Form, Button } from "react-bootstrap";

export default function AddCommentForm(props) {
  return (
    <Form>
      <Form.Group controlId="commentForm">
        <Form.Label>Want to reply? Add your comment here!</Form.Label>
        <Form.Control type="text" placeholder="What is your name?" />
        <Form.Control type="text" placeholder="What would you like to say?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
