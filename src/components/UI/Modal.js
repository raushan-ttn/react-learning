import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElements)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </Fragment>
  );
};

export default Modal;
