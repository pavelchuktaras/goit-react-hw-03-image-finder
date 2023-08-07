import React from 'react';
import PropTypes from 'prop-types';
import styled from './Modal.module.css'
import { Component } from 'react';

export class Modal extends Component{
    componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === "Escape") this.props.onClose();
    }

handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
}

render() {
    return (
        <div className={styled.overlay}>
            <div className={styled.modal}>
                <img src={this.props.largeImageURL} alt="" />
            </div>
        </div>
    );
}
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};