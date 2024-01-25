import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import QUESTIONS from '../../data/questions.json';


const Questions: React.FC = () => {

  const { feedbackForm, currentIndex } = useSelector((store:RootState) => store.feedback);
  const isEndPage =  currentIndex === QUESTIONS.length;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000); // Duration of the animation
    return () => clearTimeout(timer);
  }, [currentIndex]);

  
  

  return (
    <div className='flex h-full items-center justify-center' data-testid='form-component'>
      {/* render Title */}
      <div className={`w-1/2 bg-indigo-500 flex items-center justify-center`}>
        <div className={`text-white font-semibold text-6xl text-left transition-transform duration-500 ${animate && !isEndPage ? 'slide-in' : ''} ${isEndPage ? 'reveal-right' : ''}`}>
          {!isEndPage ? feedbackForm[currentIndex].title : 'Please Review Your Answer Before Submission'}
        </div>
      </div>
   
    </div>
  );
};

export default Questions;

