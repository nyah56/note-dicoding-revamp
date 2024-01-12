import React from 'react';
import NoteSearch from './NoteSearch';
const NoteHeader = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>MyNotes</h1>
      <div className="note-search">
        <NoteSearch onSearch={onSearch} />
      </div>
    </div>
  );
};
export default NoteHeader;
