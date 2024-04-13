import React, { useState, useEffect } from 'react';

function ScrollComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const twitter = document.getElementById('twitter');

      if (scrollY > 1000) {
        setScrolled(true);
        twitter.classList.add('color');
      } else {
        setScrolled(false);
        twitter.classList.remove('color');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={scrolled ? 'scrolled' : ''}>

    </div>
  );
}

export default ScrollComponent;
