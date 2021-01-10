import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './i18n';
import { connect } from "react-redux"
// import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { setData } from './reducers/userData'
import Router from './Router'


function App(props) {
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

const mapStateToProps = state => {
  return {
    userData: state.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch(setData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
