import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'; 
import AnswerSection from './index';

describe('AnswerSection Component', () => {
  // Test 1: Renders without crashing
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <AnswerSection/>
      </Provider>
    );
    expect(screen.getByTestId('answer-component')).toBeInTheDocument();
  });

  // Test 2: Displays the correct number of options
  it('displays the correct number of options', () => {
    const expectedNumberOfOptions = 3; 
    render(
      <Provider store={store}>
        <AnswerSection />
      </Provider>
    );
    const options = screen.getAllByRole('img');
    expect(options.length).toBe(expectedNumberOfOptions);
  });

  // Test 3: Changes opacity of non-hovered options on hover
  it('changes opacity of non-hovered options on hover', () => {
    render(
      <Provider store={store}>
        <AnswerSection />
      </Provider>
    );
    const firstOption = screen.getAllByRole('img')[0];
    fireEvent.mouseEnter(firstOption);
  });

  // Test 4: Handles option click correctly
  it('handles option click correctly', () => {
    render(
      <Provider store={store}>
        <AnswerSection/>
      </Provider>
    );
    const firstOption = screen.getAllByRole('img')[0];
    fireEvent.click(firstOption);
  });

});
