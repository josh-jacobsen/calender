import React, {useState} from 'react';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import 'bootstrap/dist/css/bootstrap.min.css';
import sun_clouds from './sun_clouds.png'
import 'react-calendar/dist/Calendar.css';
import './App.scss';


function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Container className="containerStyle" >
        <Row className="titleRow">
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
          <Col md={4} className="weatherPanel">
            <Row className="weatherPanelRowMargin">
              {/* This is the weather part of the app */}
                          <Col>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src={ sun_clouds}
                  />
            </Figure>
            <p>5 degrees C</p>
            <p>Clouds and Sunshine</p>
                {/* <Image src={ sun_clouds} roundedCircle /> */}
            </Col>
            </Row> 
            <Row>
              <Col>
                17 January
              </Col>
            </Row>
            <Row>
              <Col>
                Saturday
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col md={4} sm={4} xs={4} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={4} xs={4} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={4} xs={4} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={4} xs={4} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={4} xs={4} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
            </Col>
            </Row>
            </Col>
          <Col md={8}>
            <Row className="justify-content-center">
              <Calendar
                className="calendar"
                onChange={onChange}
                value={value}
              />
            </Row>
            <Row className="justify-content-center taskRow">
              <Col ><p>Completed</p><p>48</p></Col>
              <Col ><p>Postponed</p><p>12</p></Col>
              <Col ><p>Undone</p><p>6</p></Col>
              <Col ><p>All Tasks</p><p>66</p></Col>
              <Col >+</Col>
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