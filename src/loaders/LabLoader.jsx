import React from 'react';
import { ReactComponent as LabImage } from './lab.svg'; 

const LabLoader = () => {
    return (
        <div style={{width:'100vw', height: "100vh"}} className="d-flex justify-content-center align-items-center">
            <div>
                <LabImage />
                <p>Please wait... ;)</p>
            </div>
        </div>
    )
}

export default LabLoader
