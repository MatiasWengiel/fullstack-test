import { Container } from "react-bootstrap";

export default function NoComment() {
  return (
    <Container className="mx-auto my-2" style={{ textAlign: "center" }}>
      It would appear there are no comments yet. Want to be the first? Comment
      below!
    </Container>
  );
}
