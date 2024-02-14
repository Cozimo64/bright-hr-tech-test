import styled from 'styled-components';

export const DocumentItemStyle = styled.div`
  position: relative;
  padding: 15px;
  margin: 10px auto;
  max-width: 540px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #d9e3fa;
  }

  .document-type {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 0.8em;
    color: #666;
  }

  .document-date {
    position: absolute;
    top: 6px;
    left: 10px;
    font-size: 0.8em;
    color: #666;
  }

  .document-details {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 0.8em;
    color: #666;
  }
`;

export const FolderStyle = styled.div<{ isOpen: boolean }>`
  padding: 20px 10px;
  margin: 5px 0;
  
  border: ${({ isOpen }) => (isOpen ? '2px solid #2c234a' : '2px solid #a89cf7')};
  border-radius: 8px;
  background-color: ${({ isOpen }) => (isOpen ? '#a89cf7' : '#a89cf7')};
  color: #24286e;
  cursor: pointer;
  font-weight: bold;
  text-align: left;
  transition: ease-in-out 0.2s;


  &:hover {
    background-color: #514ac2;
    color: #fff;
    border: 2px solid #a89cf7;

  }

  .folder-icon {
    position: absolute;
    bottom: 5px;
    left: 10px;
    color: white;
    font-size: 1.2em; // Adjust size as needed
  }
`;

export const NestedDocumentsStyle = styled.div`
  padding: 5px 10px;
  background: #f5f2ff;
  border-radius: 8px;
  background-color: #f0f3fa;
`;

export const FilterInput = styled.input`
  padding: 12px 20px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: calc(100% - 120px);
`;

export const SortButton = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;

