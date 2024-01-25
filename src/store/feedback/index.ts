import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import QUESTIONS from '../../data/questions.json';
import OPTIONS from '../../data/options.json';

// Define the type for the state
interface FeedbackState {
    currentIndex: number;
    formData: any[]; 
    feedbackForm: typeof QUESTIONS; 
    options: typeof OPTIONS; 
}

// Define the initial state using the FeedbackState type
const initialState: FeedbackState = {
    currentIndex: 0,
    formData: [],
    feedbackForm: QUESTIONS,
    options: OPTIONS
};

const FeedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        handleNextIndex: (state, action: PayloadAction<any>) => { 
            return {
                ...state,
                currentIndex: state.currentIndex + 1 ,
                formData: [...state.formData, action.payload]
            }
        },
    }
});

export const { handleNextIndex } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
