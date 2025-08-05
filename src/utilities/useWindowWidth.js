import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    // Stable function reference
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Attach listener
    window.addEventListener('resize', handleResize);

    // Run once to ensure width is correct after mount
    handleResize();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array → effect runs once per mount in production

  return width;
}

export default useWindowWidth;
