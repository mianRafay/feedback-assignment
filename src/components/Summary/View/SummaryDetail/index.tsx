import React from 'react';

interface SummaryDetailProps {
    item: {
        src: string;
        alt: string;
        label: string;
    };
    title?:string
    isLast: boolean;
}

const SummaryDetail: React.FC<SummaryDetailProps> = ({ item, isLast, title }) => {
    return (
        <div
            className={`py-6 border-slate-300 ${!isLast ? 'border-b-2' : ''} flex items-center justify-between transition-opacity duration-500 ease-in-out transform translate-x-0`}
            style={{ animationDelay: '0.7s' }} 
            data-testid='summary-detail-component'
        >
            <div className='w-4/5'>
                <div className='font-medium text-left text-xl text-gray-600' data-testid='main-title'>{title}</div>
                { <div className='text-xs text-left text-gray-400' data-testid='small-title'>{item.label}</div>}
            </div>
            <img src={require(`../../../../assets/${item.src}.png`)} alt={item.alt} className='h-10 w-10' />
        </div>
    )
}

export default SummaryDetail;
