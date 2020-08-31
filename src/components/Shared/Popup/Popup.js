import React, { Component } from "react";
import PropTypes from "prop-types";

import './Popup.scss';

class Popup extends Component {
    render() {
        return (
            <>
                {this.props.isPopupOpened &&
                    <div className="popup-container">
                        <div className="popup-options-list">
                            <div className="popup-option-item" onClick={this.props.openEditMovieModal}>Edit</div>
                            <div className="popup-option-item" onClick={this.props.openDeleteMovieModal}>Delete</div>
                        </div>
                    </div>
                }

            </>
        )
    }
}

Popup.propTypes = {
    showOrHideMovieOptions: PropTypes.func.isRequired,
    isPopupOpened: PropTypes.bool.isRequired,
    openEditMovieModal: PropTypes.func.isRequired,
    openDeleteMovieModal: PropTypes.func.isRequired
}

export default Popup;