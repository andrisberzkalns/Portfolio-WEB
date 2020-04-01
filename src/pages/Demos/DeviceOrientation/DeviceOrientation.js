import React, { useState, useEffect } from 'react';

const DeviceOrientationDemo = () => {

    const [absolute, setAbsolute] = useState(false);
    const [alpha, setAlpha] = useState(0);
    const [beta, setBeta] = useState(0);
    const [gamma, setGamma] = useState(0);


    useEffect(() => {

        window.addEventListener('deviceorientation', handleDeviceOrientation, true);
        
        return () => {
            window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
        }
    }, []);

    const handleDeviceOrientation = (event) => {
        console.log(event);
        setAbsolute(event.absolute);
        setAlpha(event.alpha);
        setBeta(event.beta);
        setGamma(event.gamma);
    }


    return (
            <div className="device-orientation-container">
                <div className="device-orientation-object" style={{ 'marginLeft': (alpha + 180) + 'px', 'marginTop': (beta + 180) + 'px'}}>
                </div>
            </div>
    )
}

export default DeviceOrientationDemo;
