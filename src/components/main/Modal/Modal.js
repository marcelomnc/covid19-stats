import React from "react";
import Backdrop from "./Backdrop/Backdrop";

const Modal = (props) => {
	const classToUse = props.show ? "ModalShow" : "ModalHide";

	return (
		<>
			<div className={classToUse}>{props.children}</div>
			<Backdrop show={props.show} onClickHandler={props.onClickHandler} />
		</>
	);
};

export default Modal;
