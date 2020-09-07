import React from "react";
import PropTypes from "prop-types";

import './Popup.scss';

const Popup = (props) => {
    return (
        <>
            {props.isPopupOpened &&
                <div className="popup-container">
                    <div className="popup-options-list">
                        <div className="popup-option-item" onClick={props.openEditMovieModal}>Edit</div>
                        <div className="popup-option-item" onClick={props.openDeleteMovieModal}>Delete</div>
                    </div>
                </div>
            }

        </>
    )
};

Popup.propTypes = {
    showOrHideMovieOptions: PropTypes.func.isRequired,
    isPopupOpened: PropTypes.bool.isRequired,
    openEditMovieModal: PropTypes.func.isRequired,
    openDeleteMovieModal: PropTypes.func.isRequired
}

export default Popup;