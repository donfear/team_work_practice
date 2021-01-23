import react, { useEffect, useState } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth as any,
          height: window.innerHeight as any,
        });
      }
      
      window.addEventListener("resize", handleResize);
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }