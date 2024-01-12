import { useState } from 'react';

const NoteSearch = ({ onSearch }) => {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan..." onChange={onSearch} />
    </div>
  );
};

export default NoteSearch;
