import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Documents from './Documents';
import { documentsData } from '../data/documentsData';

describe('Documents', () => {
  it('filters documents based on input', () => {
    const { getByPlaceholderText, queryByText } = render(<Documents documents={documentsData} />);

    fireEvent.change(getByPlaceholderText('Filter by filename'), { target: { value: 'Employee' } });
    expect(queryByText('Employee Handbook')).toBeInTheDocument();
    expect(queryByText('Public Holiday Policy')).not.toBeInTheDocument();
  });
});
