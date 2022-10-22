import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddCommentForm from './components/AddCommentForm';
import NoComment from './components/NoComment';
import axios from 'axios'
import Comment from './components/Comment';


function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const commentsList = comments.map((comment) => {
    return (
      <Comment
        key={comment._id}
        author={comment.author}
        text={comment.commentText}
        sent={new Date(comment.date).toString()}
      />
    );
  });

  //Adds the latest comment from the user without needing another call to the back end.
  const updateCommentsList = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <Container>

      <Row>
        <Col>
          {commentsList.length ? commentsList : <NoComment />}
        </Col>
      </Row>
      <Row>
        <Col>
          <AddCommentForm updateCommentsList={updateCommentsList} />
        </Col>
      </Row>
    </Container>


  );
}

export default App;
