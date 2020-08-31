import React, { Component } from "react";

import "./Modal.scss";

export default class Modal extends Component {

    onCloseModal = () => {
        this.props.onClose(false);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal-container">
                <div className="modal">
                    <button className="close-modal" onClick={this.onCloseModal}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    {this.props.children}
                </div>
            </div>
        );
    }
}