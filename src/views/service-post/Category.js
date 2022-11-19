import { React, useEffect, useState } from 'react';
import CardCategory from 'components/Cards/CardCategory'
import CardAddCategory from 'components/Cards/CardAddCategory'

export default function Dashboard() {

  const [ctgDisplay, setCtgDisplay] = useState('');
  const [addCtgDisplay, setAddCtgDisplay] = useState('hidden');

  useEffect(() => {
    const addBtn = document.getElementById('addBtn');
    const saveBtn = document.getElementById('saveBtn');

    addBtn.onclick = () => {
      setCtgDisplay('hidden');
      setAddCtgDisplay('');
    }

    saveBtn.onclick = () => {
      setCtgDisplay('');
      setAddCtgDisplay('hidden');
    }

  }, []);

  return (
    <>
      <div className='flex items-center justify-between text-white mb-8'>
        <h1 className='text-2xl'>Category</h1>
        <div className='flex'>
          <button id='addBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10 ' + ctgDisplay} >
            <i className="fa-solid fa-plus"></i>
            <h1 className='text-xl ml-3'>Add</h1>
          </button>
          <button id='saveBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10 ml-6 ' + addCtgDisplay}>
            <h1 className='text-xl'>Save</h1>
          </button>
        </div>
      </div>
      <CardCategory display={ctgDisplay} />
      <CardAddCategory display={addCtgDisplay} setAddPostDisplay={setAddCtgDisplay} setPostDisplay={setCtgDisplay} />
    </>
  );
}
