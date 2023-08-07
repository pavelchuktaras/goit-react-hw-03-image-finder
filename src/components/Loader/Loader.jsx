import React from 'react';
import styled from './Loader.module.css'
import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass={styled.wrapper}
/>
    </div>
  );
};

export default Loader;