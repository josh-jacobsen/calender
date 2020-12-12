import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import 'bootstrap/dist/css/bootstrap.min.css';
import sun_clouds from './sun_clouds.png'
import {addTodo} from './features/todo/todoSlice'
import 'react-calendar/dist/Calendar.css';
import './App.scss';


function App() {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  let numberTodosCompleted = todos.filter(t => t.state === "Completed").length;
  let numberTodosPostponed = todos.filter(t => t.state === "Postponed").length;
  let numberTodosInProgress = todos.filter(t => t.state === "InProgress").length;
  let numberTodosTotal = numberTodosCompleted + numberTodosInProgress + numberTodosPostponed
  return (
    <div className="App">
      <Container className="containerStyle" >
        <Row className="titleRow">
          <Col>
            <Row>
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
                  <Col md={4} sm={5} xs={5} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={5} xs={5} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={5} xs={5} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={5} xs={5} className="textAlignRight">
                    Img
                  </Col>
                  <Col className="textAlignLeft">
                    Thing to do
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={5} xs={5} className="textAlignRight">
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
              <Col xs="auto"><p>Completed</p><p>{numberTodosCompleted }</p></Col>
              <Col xs="auto"><p>Postponed</p><p>{numberTodosPostponed}</p></Col>
              <Col xs="auto" ><p>In Progress</p><p>{numberTodosInProgress}</p></Col>
              <Col xs="auto"><p>All Tasks</p><p>{numberTodosTotal}</p></Col>
              <Col xs="auto">
                <button onClick={() => dispatch(addTodo())}>
                  +
                </button>
              </Col>
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