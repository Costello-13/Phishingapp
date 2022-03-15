function Modal(props) {
    function confirmHandler(){
        props.onConfirm();

    }

    function cancelHandler(){
        props.onCancel();

    }
  return (
    <div className="modal">
      <p>Do you want to proceed?</p>
      <button className="button" onClick={cancelHandler}>Cancel</button>
      <button className="button" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
