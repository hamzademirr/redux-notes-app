import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addNotes } from '../../redux/notesSlice';
import './style.scss'
function NotesInput() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('red');

  const handleClick = () => {
    dispatch(addNotes({
      title,
      content,
      color,
    }));
    setTitle('');
    setContent('');
  }

  return (
    <div className='notes-input-container'>
      <div className='notes-nav'>
        <div className='left-item'>
          <div className='color-button'>
            <div className='red-radio'>
              <input type="radio" name="color-pick" onClick={() => setColor('red')} id="color1" />
              <label for="color1"></label>
            </div>
            <div className='green-radio'>
              <input type="radio" name="color-pick" onClick={() => setColor('green')} id="color2" />
              <label for="color2"></label>
            </div>
            <div className='blue-radio'>
              <input type="radio" name="color-pick" onClick={() => setColor('blue')} id="color3" />
              <label for="color3"></label>
            </div>
            <div className='yellow-radio'>
              <input type="radio" name="color-pick" onClick={() => setColor('yellow')} id="color4" />
              <label for="color4"></label>
            </div>
            <div className='purple-radio'>
              <input type="radio" name="color-pick" onClick={() => setColor('purple')} id="color5" />
              <label for="color5"></label>
            </div>
          </div>
        </div>
        <div className='right-item'>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>

      <div className='notes-area'>
        <input maxLength={7} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default NotesInput
