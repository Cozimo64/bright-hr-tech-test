import React, { useState } from 'react';
import { Document } from '../types/documents';
import DocumentItem from './DocumentItem';
import Folder from './Folder';
import { FilterInput } from './StyledComponents';
import SortButtons from './SortButtons';


interface DocumentsProps {
  documents: Document[];
}

const Documents: React.FC<DocumentsProps> = ({ documents }) => {
  const [filter, setFilter] = useState('');
  const [sortCriterion, setSortCriterion] = useState<'name' | 'size' | 'added'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const toggleSort = (criterion: 'name' | 'size' | 'added') => {
    if (sortCriterion === criterion) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCriterion(criterion);
      setSortDirection('asc');
    }
  };

  const sortDocuments = (docs: Document[]): Document[] => {
    return [...docs].sort((a, b) => {
      let comparison = 0;
      if (sortCriterion === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortCriterion === 'size') {
        comparison = (a.size || 0) - (b.size || 0);
      } else if (sortCriterion === 'added') {
        const dateA = new Date(a.added || '1970-01-01').getTime();
        const dateB = new Date(b.added || '1970-01-01').getTime();
        comparison = dateA - dateB;
      }
  
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };
  

  const filteredSortedDocuments = sortDocuments(documents.filter(doc =>
    doc.name.toLowerCase().includes(filter.toLowerCase())
  ));

  return (
    <div>
    <FilterInput
      type="text"
      placeholder="Filter by filename"
      onChange={(e) => setFilter(e.target.value)}
    />
    <SortButtons
      sortCriterion={sortCriterion}
      sortDirection={sortDirection}
      onSortChange={(criterion, direction) => {
        setSortCriterion(criterion);
        setSortDirection(direction);
      }}
    />
      {filteredSortedDocuments.map((doc, index) =>
        doc.type === 'folder' ? (
          <Folder key={index} folder={doc} />
        ) : (
          <DocumentItem key={index} document={doc} />
        )
      )}
    </div>
  );
};

export default Documents;
