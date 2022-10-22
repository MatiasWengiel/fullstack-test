import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import AddCommentForm from './components/AddCommentForm';
import NoComment from './components/NoComment';
import useAppData from './hooks/useAppData';


function App() {
  const { commentsList } = useAppData()

  return (
    <Container>
      <Row>
        <Col>
          {commentsList.length ? commentsList : <NoComment />}
        </Col>
      </Row>
      <Row>
        <Col>
          <AddCommentForm />
        </Col>
      </Row>
    </Container>


  );
}

export default App;
