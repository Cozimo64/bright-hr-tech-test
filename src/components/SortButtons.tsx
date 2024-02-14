import React from 'react';
import { SortButton } from './StyledComponents';

interface SortButtonsProps {
  sortCriterion: 'name' | 'size' | 'added';
  sortDirection: 'asc' | 'desc';
  onSortChange: (criterion: 'name' | 'size' | 'added', direction: 'asc' | 'desc') => void;
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortCriterion, sortDirection, onSortChange }) => {
  const handleSortChange = (criterion: 'name' | 'size' | 'added') => {
    const newDirection = sortCriterion === criterion && sortDirection === 'asc' ? 'desc' : 'asc';
    onSortChange(criterion, newDirection);
  };

  return (
    <div>
      <SortButton onClick={() => handleSortChange('name')}>
        Sort by Name {sortCriterion === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
      </SortButton>
      <SortButton onClick={() => handleSortChange('size')}>
        Sort by Size {sortCriterion === 'size' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
      </SortButton>
      <SortButton onClick={() => handleSortChange('added')}>
        Sort by Date {sortCriterion === 'added' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
      </SortButton>
    </div>
  );
};

export default SortButtons;
