import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './List.css';

function List() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <h1>Juego insano</h1>
            <ListGroup>
                <ListGroup.Item>
                    <Button onClick={handleShowModal} className="custom-button" >Reciclar</Button>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reciclar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            En este juego deberas de elegir si el objeto que se te muestra es reciclable o no.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cerrar
                            </Button>
                            <Button variant="primary" onClick={handleCloseModal}>
                                <Link to="/Reciclar" className="custom-link">Jugar</Link>
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </ListGroup.Item>
                <ListGroup.Item><Link to={"/ProblemasAmbientales"}>Problemas ambientales</Link></ListGroup.Item>
                <ListGroup.Item><Link to={"/CalentamientoGlobal"}>Calentamiento global</Link></ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default List;
