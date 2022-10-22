import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Comment from './components/Comment';
import AddCommentForm from './components/AddCommentForm';


function App() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/comments`)
      .then((res) => {
        setComments(res.data)
      }).catch(error => console.log(error))
  }, [])

  const commentsList = comments.map(comment => {
    return <Comment key={comment.id} author={comment.author} text={comment.commentText} sent={comment.date} />
  })
  return (
    <Container>
      <Row>
        <Col>
          {commentsList}
        </Col>
      </Row>
      <Row>
        <Col><AddCommentForm /></Col>
      </Row>
    </Container>


  );
}

export default App;
