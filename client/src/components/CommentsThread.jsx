import Comment from "./Comment";
import { Container, Image } from "react-bootstrap";

export default function CommentsThread(props) {
  const { comments } = props;
  console.log(comments);
  return (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          author={comment.author}
          text={comment.commentText}
          sent={new Date(comment.date)}
          // Adds a random image to act as a temporary "avatar". Must be fetched at this stage, or the browser cache leads to all pictures being the same
          image={
            <Image
              roundedCircle
              src={`https://loremflickr.com/100/100/cat?random=${comment._id}`}
            />
          }
        />
      ))}
    </Container>
  );
}
