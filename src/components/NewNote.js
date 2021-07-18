import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const NewNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote({
      id: nanoid(),
      text: noteText,
      date: new Intl.DateTimeFormat('en-US').format().toString(),
    });
    setNoteText('');
  };

  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
        maxLength={characterLimit}
      ></textarea>
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button
          className='save'
          onClick={handleSaveClick}
          disabled={/\w/.test(noteText) ? false : true}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
