import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortButtons from './SortButtons';

describe('SortButtons', () => {
  it('triggers sort change on click', () => {
    const handleSortChange = jest.fn();
    const { getByText } = render(
      <SortButtons
        sortCriterion="name"
        sortDirection="asc"
        onSortChange={handleSortChange}
      />
    );

    fireEvent.click(getByText('Sort by Name ↑'));
    expect(handleSortChange).toHaveBeenCalledWith('name', 'desc');
  });
});
