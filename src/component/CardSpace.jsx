import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
function CardSpace({
country  = 'Cidade',
name='Nome',  
flickr_images='imagens' }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    
    setShow(true);
  }

  return (
    <Card className="text-white">
      <Card.Img
        src={flickr_images}
        alt={name}
      />
      <Card.ImgOverlay className="img-overlay">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {country}
        </Card.Text>
        <div>
      
          <Button className="me-2 mb-2" onClick={() => handleShow()}>
            Saiba Mais 
          </Button>
      
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </div>
      </Card.ImgOverlay>
      
    </Card>
  );
}

export default CardSpace;