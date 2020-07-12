import { useState, useEffect, useCallback } from 'react';

function useOrientation(initial = false) {
  
    const [orientation, setOrientation] = useState(initial);
    const [initialOrientation, setInitialOrientation] = useState(initial)

    const handleDeviceOrientation = useCallback((event) => {
        if(!initialOrientation && Object.keys(initialOrientation)) {
            setInitialOrientation(event);
        }
        setOrientation(event);
    }, [initialOrientation])

    useEffect(() => {
        window.addEventListener('deviceorientation', handleDeviceOrientation, true);
        window.addEventListener("MozOrientation", handleDeviceOrientation, true);

        return () => {
            window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
            window.removeEventListener('MozOrientation', handleDeviceOrientation, true);
        }
    }, [handleDeviceOrientation]);

  
    return [orientation, initialOrientation];
  }
  
  export default useOrientation;