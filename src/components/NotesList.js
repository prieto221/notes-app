import React from 'react';
import NewNote from './NewNote';
import Note from './Note';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <NewNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
