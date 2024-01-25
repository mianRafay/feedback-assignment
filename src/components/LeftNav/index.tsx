import Stepper from '../Stepper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function LeftNav() {
    const { feedbackForm, currentIndex } = useSelector((store: RootState) => store.feedback);

    return (
        <>
              <div className='p-3'>
                {/* <img src={Logo} alt="Logo" className="h-6 w-auto" />  */}
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <Stepper steps={feedbackForm.length + 1} activeStep={currentIndex} />
            </div>
        </>
    );
}

export default LeftNav;
