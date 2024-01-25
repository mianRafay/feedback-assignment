import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'; // Adjust the import path as necessary
import SummaryPage from './index';
import '@testing-library/jest-dom';

import QUESTIONS from '../../data/questions.json';

describe('SummaryPage Component', () => {
  // Mock global window methods
  global.confirm = jest.fn(() => true);
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;

  // Test 1: Renders without crashing
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <SummaryPage />
      </Provider>
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  // Test 2: Renders the correct number of summary details
  it('renders the correct number of summary details', async () => {
    render(
      <Provider store={store}>
        <SummaryPage />
      </Provider>
    );
    const items = await screen.findAllByTestId('summary-component');
    expect(items).toHaveLength(1);
  });

  it('calls handleSubmit when submit button is clicked', async () => {
    render(
      <Provider store={store}>
        <SummaryPage />
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
  });

  it('renders a "last" summary detail without a bottom border', async () => {
    render(
      <Provider store={store}>
        <SummaryPage />
      </Provider>
    );
    const lastItem = (await screen.findAllByTestId('summary-component')).pop();
    expect(lastItem).not.toHaveClass('border-b-2');
  });

  it('renders a non-last summary detail with a bottom border', async () => {
    render(
      <Provider store={store}>
        <SummaryPage />
      </Provider>
    );
    const firstItem = (await screen.findAllByTestId('summary-component'))[0];
    expect(firstItem).toHaveClass('mt-12 ml-12 reveal-left');
  });

});