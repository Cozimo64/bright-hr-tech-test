import React, { useState } from 'react';
import { Document } from '../types/documents';
import DocumentItem from './DocumentItem';
import { FolderStyle, NestedDocumentsStyle } from './StyledComponents';

interface FolderProps {
  folder: Document;
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FolderStyle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {folder.name}
      </FolderStyle>
      {isOpen && folder.files && (
        <NestedDocumentsStyle>
          {folder.files.map((file, index) => (
            <DocumentItem key={index} document={file} />
          ))}
        </NestedDocumentsStyle>
      )}
    </div>
  );
};

export default Folder;
