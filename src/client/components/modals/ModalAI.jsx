import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AIvideo from '../../assets/video/creation.mp4'
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VideoSpinner } from '../loader/VideoSpinner';
import { Gallery } from '../../assets/bg/Gallery';
import { useTheme } from '../../hooks/useTheme';



/**
 * 
 * @param {string} c for className
 * @returns 
 */

export default function ModalAI({className}) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
  <div className={className}>
        <div onClick={handleShow} >
          <FontAwesomeIcon icon={faBrain}  />{' '}
        </div>

      <Modal
        show={show} 
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <div className="modal-header">
            <VideoSpinner path={AIvideo} />
            <h5 className={`modal-title`} style={{color:'white'}} >Nos Créations</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          
          <ul className="modal-ai-gallery list-unstyled">
            {Gallery.map((img, i) => <li className="modal-ai-img my-2" key={i}>{img}</li> )}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}