import './App.css';

import { Container, Row, Col, Image } from 'react-bootstrap';
import AddCommentForm from './components/AddCommentForm';
import NoComment from './components/NoComment';
import CommentsThread from './components/CommentsThread';
import useAppData from './hooks/useAppData';


function App() {

  const { checkForComments } = useAppData()


  return (
    <Container>
      <Row>
        <Col>
          {/* Only renders CommentsThread if it has contents */}
          {checkForComments ? <CommentsThread /> : <NoComment />}
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
