import React from 'react';
import { Document } from '../types/documents';
import { DocumentItemStyle } from './StyledComponents';

interface DocumentItemProps {
  document: Document;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ document }) => {
  return (
    <DocumentItemStyle>
        <span className="document-date">{document.added}</span>
      <div className="document-name">{document.name}</div>
      <div className="document-details">
        {document.size && (
          <span className="document-size">
            {document.size}MB | {document.type.toUpperCase()}
          </span>
        )}
      </div>
    </DocumentItemStyle>
  );
};

export default DocumentItem;
