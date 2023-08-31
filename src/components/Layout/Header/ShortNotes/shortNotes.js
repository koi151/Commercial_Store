import { memo, useEffect, useState } from 'react';
import './shortNotes.scss'

function ShortNotes() {

  // FOR TESTING PURPOSE
  const shortNotes = [
    {
      id: 1,
      content: 'free shipping for orders over 49$'
    },
    {
      id: 2,
      content: 'discount available'
    },
    {
      id: 3,
      content: 'web under development!'
    }
]

  const [intervalIndex, setIntervalIndex] = useState(0); 
  const notesLength = shortNotes.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalIndex(prevIndex => (prevIndex + 1) % notesLength);
    }, [3000])

    return () => clearInterval(interval);
  }, [])  

  return (
    <>
      <div className='short-notes-wrapper'>
        <div className='note'>
          {shortNotes[intervalIndex].content}
        </div>
      </div>
    </>
  )
}

export default memo(ShortNotes)
