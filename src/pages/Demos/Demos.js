import React from 'react';
import { Link } from "react-router-dom";

const Demos = () => {

    return (
        <div style={{backgroundColor: 'lightgray', height: '100vh'}}>
            <Link to="/demos/device-orientation">Device orientation</Link>
        </div>
    )
}

export default Demos;