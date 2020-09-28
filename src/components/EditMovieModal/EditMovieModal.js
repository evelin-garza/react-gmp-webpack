import React from "react";

import Modal from "../Shared/Modal/Modal";
import MovieForm from "../Shared/MovieForm/MovieForm";
import { EDIT_MOVIE_VALIDATION_SCHEMA } from "../Shared/common";

const EditMovieModal = (props) => {
    return (
        <Modal {...props}>
            <div className="modal-header">
                <h2 className="modal-title">EDIT MOVIE</h2>
            </div>
            <div className="modal-body">
                <MovieForm movie={props.currentMovie} mode="edit" validationSchema={EDIT_MOVIE_VALIDATION_SCHEMA} onClose={props.onClose}></MovieForm>
            </div>
        </Modal>
    );
}

export default EditMovieModal;