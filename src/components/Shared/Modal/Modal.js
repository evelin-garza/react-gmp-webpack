import React from "react";

import "./Modal.scss";

const Modal = (props) => {

    const onCloseModal = () => {
        props.onClose(false);
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <button className="close-modal" onClick={onCloseModal}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;