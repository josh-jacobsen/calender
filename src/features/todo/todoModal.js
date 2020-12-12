import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export function AddTodoModal(props) {
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
                    <Form.Control placeholder="Enter a description for the todo" />
                </Form.Group>

                <Form.Group controlId="formDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control placeholder="Select a due date" />
                </Form.Group>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}