import React, {useState} from 'react';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'react-calendar/dist/Calendar.css';
import './App.scss';

const styles = {
    paddingTop: {
        paddingTop: "10vh"
  },
    borderSolid: {
    border:'2px solid #000000',
  }
}


function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Container className="containerStyle" >
        <Row className="textAlignLeft">
          <Col>
            <Row>
              <p>
                x
              </p>
              <p>
                x
              </p>
              <p>
                x
              </p>
              <p className="headingOne">
                Calendar
              </p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={ 4} className="textAlignLeft">
            This is the weather part of the app
            </Col>
          <Col md={8}>
            <Row className="justify-content-center">
              <Calendar
                onChange={onChange}
                value={value}
              />
            </Row>
            <Row className="justify-content-center">
              This is where the completed tasks go
              </Row>
          </Col>
      </Row>
      </Container>
      </div>

  );
}

export default App;

//  <Row className="justify-content-md-center"></Row>
// row justify-content-center