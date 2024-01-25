import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryDetail from './index';

describe('SummaryDetail Component', () => {
  const mockItem = {
    src: 'notSure',
    alt: 'Not Sure',
    label: 'Not Sure',
  };

  it('renders without crashing', () => {
    render(<SummaryDetail item={mockItem} isLast={false} />);
    expect(screen.getByTestId('summary-detail-component')).toBeInTheDocument();
  });

  it('renders the title when provided', () => {
    const title = 'Test Title';
    render(<SummaryDetail item={mockItem} isLast={false} title={title} />);
    expect(screen.getByTestId('main-title').textContent).toBe(title);
  });

  it('does not render a bottom border if isLast is true', () => {
    render(<SummaryDetail item={mockItem} isLast={true} />);
    const component = screen.getByTestId('summary-detail-component');
    expect(component).not.toHaveClass('border-b-2');
  });

  it('renders the label of the item', () => {
    render(<SummaryDetail item={mockItem} isLast={false} />);
    expect(screen.getByTestId('small-title').textContent).toBe(mockItem.label);
  });

});
