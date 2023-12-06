import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AIvideo from '../../assets/video/creation.mp4'
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VideoSpinner } from '../loader/VideoSpinner';

export default function ModalAI() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <div>
    <style type="text/css">
    {`

    :root .modal {
      z-index:100000;
    }

    :root .btn-info, .modal-title {

    line-height: 1.5;
    font-weight: 600;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgba(255, 255, 255, 0.87);

    }

    :root .modal-content {
      background:linear-gradient(#000000, #151f2e);
    }

    :root .btn-info {

        background: transparent;
        border : 3px solid rgb(37, 207, 242);
    }

    :root .btn-info:hover {
        background-color:rgba(37, 207, 242, 0.3)
    }



`}
    </style>
        <Button variant="info" onClick={handleShow}>
          <FontAwesomeIcon icon={faBrain} style={{color: "#ffffff",}} />
        </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Nous travaillons également avec l'Intelligence Artificielle !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VideoSpinner path={AIvideo} />
        </Modal.Body>
      </Modal>
    </div>
  );
}