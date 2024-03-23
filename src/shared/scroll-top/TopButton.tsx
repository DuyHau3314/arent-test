import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component for the button
const TopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.7;
  z-index: 1000;
  display: none;
  &.show {
    display: block;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <TopButton onClick={scrollToTop} className={isVisible ? 'show' : ''}>
      Go to Top
    </TopButton>
  );
};

export default ScrollToTopButton;
