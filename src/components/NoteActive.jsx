import NoteItem from './NoteItem';

function NoteActive({ notes, onDelete, onArchive, searchTerm }) {
  const active = notes.filter((note) => note.archived !== true);
  if (active.length === 0) {
    return <p className="notes-list__empty-message">Catatan Tidak ada</p>;
  } else {
    return (
      <>
        <div className="notes-list">
          {active
            .filter((item) => {
              return searchTerm.toLowerCase() === ''
                ? item
                : item.title.toLowerCase().includes(searchTerm);
            })
            .map((note) => (
              <NoteItem
                key={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                note={note}
              />
            ))}
        </div>
      </>
    );
  }
}
export default NoteActive;
