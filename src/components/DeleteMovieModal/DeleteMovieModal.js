import React from "react";
import PropTypes from "prop-types";

import Modal from "../Shared/Modal/Modal";

const DeleteMovieModal = (props) => {
    return (
        <Modal {...props}>
            <div className="modal-header">
                <h2 className="modal-title">DELETE MOVIE</h2>
            </div>
            <div className="modal-body">
                <p>Are you sure you want to delete this movie?</p>
            </div>
            <div className="modal-footer">
                <button className="btn btn-filled-red">CONFIRM</button>
            </div>
        </Modal>
    );
}

DeleteMovieModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default DeleteMovieModal;