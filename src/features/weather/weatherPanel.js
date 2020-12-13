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
                <Col>
                    <Figure>
                        <Figure.Image
                            width={50}
                            height={50}
                            alt="171x180"
                            src={sun_clouds}
                        />
                    </Figure>
                    <p className="headingText">25 degrees C</p>
                    <p className="headingText">Clouds and Sunshine</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="headingText">{today.toDateString()}</p>
                </Col>
            </Row>
            <Row>
                <Col className="textAlignRight headingText">
                    Due Date
              </Col>
                <Col className="textAlignLeft headingText">
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