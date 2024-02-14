import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { documentsData } from './data/documentsData';

jest.mock('./components/Documents', () => ({
  __esModule: true,
  default: () => <div>Mocked Documents Component</div>,
}));

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Browse Documents')).toBeInTheDocument();
    expect(screen.getByText('Mocked Documents Component')).toBeInTheDocument();
  });

});
