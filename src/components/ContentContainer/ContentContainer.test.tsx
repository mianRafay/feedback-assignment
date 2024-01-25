import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentContainer from './index';

describe('ContentContainer', () => {
  it('renders without crashing', () => {
    render(<ContentContainer isLeft={true}><div>Test Content</div></ContentContainer>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with correct background when isLeft is true', () => {
    render(<ContentContainer isLeft={true}><div>Test Content</div></ContentContainer>);
    const container = screen.getByText('Test Content').parentNode;
    expect(container).toHaveClass('text-white font-semibold text-center');
  });

  it('does not render with indigo background when isLeft is false', () => {
    render(<ContentContainer isLeft={false}><div>Test Content</div></ContentContainer>);
    const container = screen.getByText('Test Content').parentNode;
    expect(container).not.toHaveClass('bg-indigo-500');
  });

  it('renders children content correctly', () => {
    const childContent = 'Child Content';
    render(<ContentContainer isLeft={true}>{childContent}</ContentContainer>);
    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  it('component has correct structure', () => {
    render(<ContentContainer isLeft={true}><div>Structure Test</div></ContentContainer>);
    const container = screen.getByText('Structure Test').parentNode?.parentNode;
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('items-center');
    expect(container).toHaveClass('justify-center');
  });
});
