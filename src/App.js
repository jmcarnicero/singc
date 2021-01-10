import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './i18n';
import { Container, Row, Col } from 'react-bootstrap';
import Router from './Router'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Router />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App
