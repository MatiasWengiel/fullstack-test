import Comment from "./Comment";
import { Image } from "react-bootstrap";
import useAppData from "../hooks/useAppData";

export default function CommentsThread() {
  const { comments } = useAppData();
  const commentsList = comments.map((comment) => {
    return (
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
    );
  });
  return commentsList;
}
