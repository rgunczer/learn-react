import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalTest extends Component {

    state = {
        show: false
    };

    handleShow = () => {
        console.log('handleSHow');
        this.setState({
            show: true
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleShow}>
                    Launch demo modalZ { this.state.show}
                </button>
                <Modal style={{opacity:1}} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}