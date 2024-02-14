import React from 'react';
import { render } from '@testing-library/react';
import DocumentItem from './DocumentItem';

describe('DocumentItem', () => {
  it('renders document information', () => {
    const mockDoc = {
      name: 'Test Document',
      type: 'pdf',
      added: '2022-01-01',
      size: 1024,
    };

    const { getByText } = render(<DocumentItem document={mockDoc} />);
    expect(getByText('Test Document')).toBeInTheDocument();
    expect(getByText('PDF')).toBeInTheDocument();
    expect(getByText('2022-01-01')).toBeInTheDocument();
    expect(getByText('1MB')).toBeInTheDocument();
  });
});
