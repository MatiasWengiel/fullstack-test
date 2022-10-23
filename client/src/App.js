import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import AddCommentForm from './components/AddCommentForm';
import NoComment from './components/NoComment';
import CommentsThread from './components/CommentsThread';
import useAppData from './hooks/useAppData';


function App() {

  const { checkForComments, state, updateCommentsList } = useAppData()

  return (
    <Container>
      <Row>
        <Col>
          {/* Only renders CommentsThread if it has contents */}
          {checkForComments ? <CommentsThread comments={state.comments} /> : <NoComment />}
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
