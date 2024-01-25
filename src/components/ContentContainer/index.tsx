import React from 'react';

interface ContentContainerProps {
    isLeft: boolean
    children: React.ReactNode
}

const ContentContainer: React.FC<ContentContainerProps> = ({ isLeft, children }) => {
    return (
        <>
            <div className={`w-1/2 h-full flex items-center justify-center ${isLeft ? 'bg-indigo-500' : ''}`}  data-testid='content-container-component'>
                <div className='text-white font-semibold text-center'>
                    {children}
                </div>
            </div>
        </>

    );
}

export default ContentContainer;
