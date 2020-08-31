import React from "react";
import PropTypes from "prop-types";

import Modal from "../Shared/Modal/Modal";
import MovieForm from "../Shared/MovieForm/MovieForm";

const AddMovieModal = (props) => {
    return (
        <Modal {...props}>
            <div className="modal-header">
                <h2 className="modal-title">EDIT MOVIE</h2>
            </div>
            <div className="modal-body">
                <MovieForm movie={props.currentMovie}></MovieForm>
            </div>
            <div className="modal-footer">
                <button className="btn btn-red-outline">RESET</button>
                <button className="btn btn-filled-red">SAVE</button>
            </div>
        </Modal>
    );
}

AddMovieModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    currentMovie: PropTypes.object.isRequired
}

export default AddMovieModal;