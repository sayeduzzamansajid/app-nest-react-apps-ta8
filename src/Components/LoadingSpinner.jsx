import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default LoadingSpinner;