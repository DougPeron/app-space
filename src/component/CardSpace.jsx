import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
function CardSpace({
country  = 'Cidade',
name='Nome',  
flickr_images=[], 
description = 'Descrição',
height = [],
diameter = [],
mass = [],
}) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    console.log(flickr_images)
    setItens(flickr_images)
    setShow(true);
  }
  const [itens, setItens] = useState([]);
  let i = -1
  let h = []
  let d = []
  let m = []
  for (const [key, value] of Object.entries(height)) {
    h.push(value);
  }
  for (const [key, value] of Object.entries(diameter)) {
    d.push(value);
  }
  for (const [key, value] of Object.entries(mass)) {
    m.push(value);
  }

  return (
    
    <Card className="text-white">
      <Card.Img
        src={flickr_images[0]}
        alt={name}
      />
      <Card.ImgOverlay className="img-overlay">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {country}
        </Card.Text>
        <div>
      
          <Button className="bg-black me-2 mb-2" onClick={() => handleShow()}>
            Saiba Mais 
          </Button>
      
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{name} - {country}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='carousel-container'>
                <Carousel>
                  {itens.map(()=>{
                    i +=1
                    return(
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={flickr_images[i]}
                      />
                    </Carousel.Item>)
                    
                  })}
                  
                </Carousel>
              </div>
              <h5>Descrição: </h5>
              <p>{description}</p>
              <h5>Altura: </h5>
              <p>{h[0]} metros</p>
              <h5>Diametro: </h5>
              <p>{d[0]} metros</p>
              <h5>Massa: </h5>
              <p>{m[0]} kilogramas</p>
            </Modal.Body>
          </Modal>
        </div>
      </Card.ImgOverlay>
      
    </Card>
  );
}

export default CardSpace;