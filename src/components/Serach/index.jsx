import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { serachTerm } from "../../redux/notesSlice";
import './style.scss'

function Serach() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(serachTerm(searchTerm));
  }, [searchTerm]);

  return (
    <div className='serach'>
      <input className='input-serach' onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
    </div>
  )
}

export default Serach
