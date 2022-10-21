import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Comment from './components/Comment';
import AddCommentForm from './components/AddCommentForm';


function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/comments`)
      .then((data) => {
        console.log(data)
        setMessage(data.data.text)
      }).catch(error => console.log(error))
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          <Comment user="John" text="This is my text" sent="10/21/22 at 3 30PM" />
        </Col>
      </Row>
      <Row>
        <Col><AddCommentForm /></Col>
      </Row>
    </Container>


  );
}

export default App;
