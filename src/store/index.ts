import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from './feedback';

export const store = configureStore({
    reducer: {
        feedback: feedbackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
