import React from 'react';
import {  RotatingSquare } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <h1 className='text-center'>
                
                <RotatingSquare
            className="text-center"
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
            </h1>
        </div>

    )

};

export default Loading;