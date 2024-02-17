import React from 'react'
import { selectNotes, destroy , selectSearchTerm} from "../../redux/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'
function Notes() {
  const notes = useSelector(selectNotes);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='notes-container'>
      {filteredNotes.map((note) => (
        <div key={note.id} className={`notes-card ${note.color}`}>
          <div className='header'>
            <h2>{note.title}</h2>
            <button onClick={() => dispatch(destroy(note.id))} className='remove-btn'>X</button>
          </div>
          <hr />
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Notes
