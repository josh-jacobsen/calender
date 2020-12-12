import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addTodo} from './todoSlice'

export const AddTodoModal = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [todoDescription, settodoDescription] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (todoDescription, startDate) => {
        dispatch(addTodo({ todoDescription, startDate }));
        settodoDescription('');
        setStartDate(new Date())
    };

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add Todo
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Enter a description for the todo"
                            value={todoDescription}
                            onChange={e => settodoDescription(e.target.value)}
                        
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="formDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </Form.Group>
                </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
            <Button onClick={() => onSubmit(todoDescription, startDate)}>Save</Button>
        </Modal.Footer>
        </Modal>
    );
}