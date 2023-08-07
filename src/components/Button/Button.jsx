import React from 'react';
import PropTypes from 'prop-types';
import styled from './Button.module.css'

export const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <div className={styled.wrapper}>
    <button className={styled.btn} onClick={onClick}>
      Load more...
      </button>
      </div>
  ) : null;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;