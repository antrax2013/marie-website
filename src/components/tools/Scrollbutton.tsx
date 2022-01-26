import React, { useState } from 'react';
import { Button } from 'primereact/button';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const pivotPixel = 150;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > pivotPixel) {
      setVisible(true);
    } else if (scrolled <= pivotPixel) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      onClick={scrollToTop}
      className='bottom-right-fixed p-button-rounded p-button-text p-button-secondary'
      icon='pi pi-arrow-up'
      style={{ display: visible ? 'inline' : 'none' }}
    />
  );
};

export default ScrollButton;
