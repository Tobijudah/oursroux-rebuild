import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
     
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  return windowWidth;
}

export default useWindowWidth;