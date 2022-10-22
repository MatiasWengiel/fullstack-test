import { Card } from "react-bootstrap";
export default function Comment(props) {
  const { author, text, sent } = props;
  return (
    <Card bg="Light" className="mx-auto my-3 w-80">
      <Card.Header>Message by: {author}</Card.Header>
      <Card.Body style={{ width: "80%", margin: "auto" }}>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>Sent at: {sent}</Card.Footer>
    </Card>
  );
}
