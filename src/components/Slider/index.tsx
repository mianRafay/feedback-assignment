import Summary from '../Summary';
import LeftNav from '../LeftNav';
import QUESTIONS from '../../data/questions.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ContentContainer from '../ContentContainer';
import Questions from '../Questions';
import AnswerSection from '../AnswerSection';

import Logo from '../../assets/logo/Logo.svg'

function Slider() {
    const { currentIndex } = useSelector((store: RootState) => store.feedback);
    const isEndPage = currentIndex === QUESTIONS.length;

    return (
        <div className='flex w-full h-screen overflow-hidden' data-testid='slider-component'>
            <img src={Logo} alt="Logo" className="absolute top-0 left-0 h-8 m-3" />
                <ContentContainer isLeft={true}>
                    <div className='bg-indigo-500 h-full flex flex-row'>
                        <LeftNav />
                        <Questions />
                    </div>
                </ContentContainer>
                <ContentContainer isLeft={false} >
                    <div className='h-full flex'>
                    {!isEndPage? <AnswerSection />:  <Summary /> }
                    </div>
                </ContentContainer>
        </div>
    );
}

export default Slider;
