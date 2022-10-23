import { Card } from "react-bootstrap";
import axios from "axios";

export default function Comment(props) {
  const { author, text, sent, image } = props;

  const date = sent.toLocaleDateString();
  const time = sent.toLocaleTimeString();
  const timeStamp = `Submitted on ${date} at ${time}`;

  return (
    <Card bg="Light" className="mx-auto my-3 w-80">
      <Card.Header>{author} said:</Card.Header>
      <Card.Body style={{ display: "flex", flexFlow: "row" }}>
        <Card.Text>{image}</Card.Text>
        <Card.Text
          style={{
            width: "80%",
            margin: "auto",
            paddingLeft: "1rem",
            borderLeft: "1px solid lightgrey",
          }}
        >
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="py-1" style={{ fontSize: "0.75rem" }}>
        {timeStamp}
      </Card.Footer>
    </Card>
  );
}
