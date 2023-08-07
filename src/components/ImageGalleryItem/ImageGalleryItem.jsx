import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from './ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li key={image.id} image={image} className={styled.imageGalleryItem}>
        <img className={styled['imageGalleryItem-image']} src={image.webformatURL} alt="" onClick={handleOpenModal} />
      </li>
      {isModalOpen && (
        <Modal largeImageURL={image.largeImageURL} onClose={handleCloseModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};