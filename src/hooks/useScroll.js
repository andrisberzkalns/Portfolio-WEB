import { useState, useEffect, useCallback } from 'react';

function useScroll(initial = false) {
  
    const [scroll, setScroll] = useState(initial);

    const handleScroll = useCallback((event) => {
        setScroll(event);
    }, [])

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.addEventListener('wheel', handleScroll);
        }
    }, [handleScroll]);

  
    return [scroll];
  }
  
  export default useScroll;