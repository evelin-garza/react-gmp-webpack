import React from "react";

import Modal from "../Shared/Modal/Modal";
import MovieForm from "../Shared/MovieForm/MovieForm";

const AddMovieModal = (props) => {
    return (
        <Modal {...props}>
            <div className="modal-header">
                <h2 className="modal-title">ADD MOVIE</h2>
            </div>
            <div className="modal-body">
                <MovieForm />
            </div>
            <div className="modal-footer">
                <button className="btn btn-red-outline">RESET</button>
                <button className="btn btn-filled-red">SUBMIT</button>
            </div>
        </Modal>
    );
}

export default AddMovieModal;