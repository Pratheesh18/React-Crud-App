import React,{Component} from 'react';
import {Button , Modal , Form } from 'react-bootstrap';

 export default class ModalClass extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <Modal show={this.props.show} {...this.props} backdrop="static" keyboard={false}>
                <Modal.Header  closeButton>
                    <Modal.Title>
                        {this.props.nwUser.id === "" ? "Add User" : "Update User"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Name </Form.Label>
                            <Form.Control type="text" name="name" value={this.props.nwUser.name} onChange={this.props.onchange}>
                            </Form.Control>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Email </Form.Label>
                            <Form.Control type="email" name="email" value={this.props.nwUser.email} onChange={this.props.onchange} disabled={this.props.nwUser.id !== ""}>
                            </Form.Control>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Gender </Form.Label>
                            <Form.Control type="text" name="gender" value={this.props.nwUser.gender} onChange={this.props.onchange}>
                            </Form.Control>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Status </Form.Label>
                            <Form.Control type="text" name="status" value={this.props.nwUser.status} onChange={this.props.onchange}>
                            </Form.Control>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close 
                    </Button>
                    <Button variant = "primary" onClick = {this.props.onSubmit}>
                        {this.props.nwUser.id ==="" ?"Add User":"Update User"}
                    </Button>
                </Modal.Footer>
            </Modal>
              
        )
    }
}


