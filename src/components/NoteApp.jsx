import { useState, useEffect } from 'react';
import NoteHeader from './NoteHeader';

import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
import NoteActive from './NoteActive';
import NoteArchived from './NoteArchived';

const NoteApp = () => {
  const [state, setState] = useState({
    notes: getInitialData(),
    search: getInitialData(),
  });
  const onAddHandler = ({ title, body }) => {
    setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  };

  const onArchiveHandler = (id) => {
    setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };
  const onDeleteHandler = (id) => {
    setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };
  const [search, setSearch] = useState('');

  return (
    <>
      <NoteHeader onSearch={(e) => setSearch(e.target.value)} />

      <div className="note-app__body">
        <NoteInput onSubmit={onAddHandler} />
        <h2>Catatan Aktif</h2>
        <NoteActive
          notes={state.notes}
          onArchive={onArchiveHandler}
          onDelete={onDeleteHandler}
          searchTerm={search}
        />
        <h2>Archived</h2>
        <NoteArchived
          notes={state.notes}
          onArchive={onArchiveHandler}
          onDelete={onDeleteHandler}
          searchTerm={search}
        />
      </div>
    </>
  );
};
export default NoteApp;
