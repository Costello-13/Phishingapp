import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Card(props) {

    const [showModal, setShowModal] = useState(false);

    function openHandler() {
        setShowModal(true);
    }

    function closeHandler(){
        setShowModal(false);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="button" onClick={openHandler}>Start</button>{" "}
      </div>
      {showModal && <Modal onCancel={closeHandler} onConfirm={closeHandler}/>}
      {showModal && <Backdrop onClick={closeHandler}/>}

    </div>
  );
}

export default Card;
