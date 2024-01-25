import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleNextIndex } from '../../store/feedback';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


interface Option {
  src: string;
  alt: string;
  label: string;
}

const AnswerSection: React.FC = () => {
  const { options,currentIndex } = useSelector((store:RootState) => store.feedback);
  
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 50000); // Duration of the animation
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (item: Option) => {
    dispatch(handleNextIndex({ ...item, id: Math.floor(Math.random() * 10000 + Math.random())}));
  };
  

  return (
    <div className='flex h-full items-center justify-center' data-testid='answer-component'>
    
        <div className='flex items-center justify-center gap-10 transition-transform duration-500'>
          {options.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center cursor-pointer duration-50 
                          ${hoverIndex !== null && hoverIndex !== index ? 'opacity-40' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleClick(item)}
            >
              <img src={require(`../../assets/${item.src}.png`)} alt={item.alt} className={`h-14 w-14 object-fit ${animate ? 'slide-in' : ''}`} />
              {hoverIndex === index && (
                <span className={`transition-transform text-indigo-500 font-medium`}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default AnswerSection;

