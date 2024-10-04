import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down 300 pixels from the top of the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 z-50 right-10 bg-gradient-to-tr from-green-800 to-blue-900 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑ Go to Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
