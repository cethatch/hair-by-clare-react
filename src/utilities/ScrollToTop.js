import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if this navigation was triggered internally
    if (window.__internalNavigation) {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
    
    // Reset the flag
    window.__internalNavigation = false;
  }, [pathname]);

  // Mark all navigations as internal from this point forward
  useEffect(() => {
    const markInternalNavigation = () => {
      window.__internalNavigation = true;
    };

    // Listen for clicks on internal links
    document.addEventListener('click', markInternalNavigation);
    
    return () => {
      document.removeEventListener('click', markInternalNavigation);
    };
  }, []);

  return null;
};

export default ScrollToTop;