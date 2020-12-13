import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import sun_clouds from '../../sun_clouds.png'

export const WeatherPanel = (props) => {
    const [today, setToday] = useState(new Date())

    return (
        <Col md={4} className="weatherPanel">
            <Row className="weatherPanelRowMargin">
                {/* This is the weather part of the app */}
                <Col>
                    <Figure>
                        <Figure.Image
                            width={50}
                            height={50}
                            alt="171x180"
                            src={sun_clouds}
                        />
                    </Figure>
                    <p>25 degrees C</p>
                    <p>Clouds and Sunshine</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {today.toDateString()}
                </Col>
            </Row>
            <Row>
                <Col>
                    Due Date
              </Col>
                <Col>
                    Description
              </Col>
            </Row>
            <Row>
                <Col>
                    {props.todos.map(t =>
                        <Row key={t.id}>
                            <Col className="textAlignRight">
                                {t.dueDate}
                            </Col>
                            <Col className="textAlignLeft">
                                {t.description}
                            </Col>
                        </Row>)}
                </Col>
            </Row>
        </Col>
    )
}