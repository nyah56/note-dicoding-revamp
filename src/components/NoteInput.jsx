import { useState } from 'react';

const NoteInput = (props) => {
  const onTitleEventHandler = (e) => {
    // setKarakter(() => e.target.value.length);
    if (e.target.value.length <= 15) {
      setState((prevState) => ({
        titleLimit: {
          ...prevState.titleLimit,
          char: state.titleLimit.limit - e.target.value.length, // Replace with the new value you want to set
        },
        note: {
          ...prevState.note,
          title: e.target.value,
        },
      }));
    }
  };
  const onBodyEventHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      note: {
        ...prevState.note,
        body: e.target.value,
      },
    }));
  };
  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    props.addNote(state.note);
    setState((prevState) => ({
      note: {
        title: '',
        body: '',
      },
      ...prevState.titleLimit,
      titleLimit: { input: '', limit: 15, char: 15 },
    }));
  };
  const [state, setState] = useState({
    note: { title: '', body: '' },
    titleLimit: { input: '', limit: 15, char: 15 },
  });
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmitEventHandler}>
        <p className="note-input__title__char-limit zero">
          Sisa karakter:{state.titleLimit.char}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Tulis Judul Catatanmu"
          required
          onChange={onTitleEventHandler}
          maxLength={state.titleLimit.limit}
          value={state.note.title}
        />
        <textarea
          placeholder="Tulis Catatanmu.."
          className="note-input__body"
          type="text"
          value={state.note.body}
          onChange={onBodyEventHandler}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};
export default NoteInput;
