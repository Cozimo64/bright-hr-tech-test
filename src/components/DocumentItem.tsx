import React from 'react';
import { Document } from '../types/documents';
import { DocumentItemStyle } from './StyledComponents';
import { formatFileSize } from '../utils/formatFileSize'; // Make sure this path is correct

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
            {formatFileSize(document.size)} | {document.type.toUpperCase()}
          </span>
        )}
      </div>
    </DocumentItemStyle>
  );
};

export default DocumentItem;

