import { React, useState, useEffect } from 'react';
import CardPost from 'components/Cards/CardPost';
import CardAddPost from 'components/Cards/CardAddPost';

export default function Dashboard() {

  const [postDisplay, setPostDisplay] = useState('');
  const [addPostDisplay, setAddPostDisplay] = useState('hidden');

  useEffect(() => {
    const addBtn = document.getElementById('addBtn');
    const saveBtn = document.getElementById('saveBtn');
    const publishBtn = document.getElementById('publishBtn');

    addBtn.onclick = () => {
      setPostDisplay('hidden');
      setAddPostDisplay('');
    }

    saveBtn.onclick = () => {
      setPostDisplay('');
      setAddPostDisplay('hidden');
    }

    publishBtn.onclick = () => {
      setPostDisplay('');
      setAddPostDisplay('hidden');
    }

  }, []);

  return (
    <>
      <div className='flex items-center justify-between text-white mb-8'>
        <h1 className='text-2xl'>Post</h1>
        <div className='flex'>
          <button id='addBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10 ' + postDisplay} >
            <i className="fa-solid fa-plus"></i>
            <h1 className='text-xl ml-3'>Add</h1>
          </button>
          <button id='publishBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10 ' + addPostDisplay}>
            <h1 className='text-xl'>Publish</h1>
          </button>
          <button id='saveBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10 ml-6 ' + addPostDisplay}>
            <h1 className='text-xl'>Save</h1>
          </button>
        </div>
      </div>
      <CardPost display={postDisplay} />
      <CardAddPost display={addPostDisplay} setAddPostDisplay={setAddPostDisplay} setPostDisplay={setPostDisplay} />
    </>
  );
}
