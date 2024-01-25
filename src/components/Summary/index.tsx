import React from 'react';
import SummaryDetail from './View/SummaryDetail';
import { useSelector } from 'react-redux';
const SummaryPage: React.FC = () => {
    const { formData, feedbackForm } = useSelector((store: any) => store.feedback);

    const handleSubmit = async (formData: any) => {
        try {
            const API_URL = process.env.REACT_APP_API_URL || " ";
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (window.confirm('Response submitted successfully')) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
            alert('Please try again');
            window.location.reload();
        }
    }
    return (
        <div className='mt-12 ml-12 reveal-left'  data-testid='summary-component'>
            <div className='mt-2 max-h-[60vh] overflow-y-auto'>
                {
                    formData?.length !== 0 && (
                        formData.map((item: any, index: any) => (
                            <React.Fragment key={item.id || index}>
                                <SummaryDetail item={item} title={feedbackForm[index]?.title} isLast={index === formData.length - 1} />
                            </React.Fragment>
                        ))
                    )
                }
            </div>
            {/* button to submit data */}
            <button className='bg-indigo-500 text-md rounded-full text-white px-4 py-1 mt-4 sticky bottom-0 transition-opacity duration-500 delay-500' onClick={() => handleSubmit(formData)}>Submit</button>
        </div>
    );
}

export default SummaryPage;
