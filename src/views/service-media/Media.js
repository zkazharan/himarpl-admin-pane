import { React, useState, useEffect, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dashboard() {

  const [assetCounter, setAssetCounter] = useState(0);
  const [addDisplay, setAddDisplay] = useState('hidden');
  const [editDisplay, setEditDisplay] = useState('hidden');
  const [paths, setPaths] = useState([]);
  
  const onDrop = useCallback(acceptedFiles => {
    setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
  }, [setPaths]);
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    const addNewBtn = document.getElementById('addNewBtn');
    const addBtn = document.getElementById('addBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const replaceBtn = document.getElementById('replacelBtn');
    const addEditBtn = document.getElementById('addEditBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');

    addNewBtn.onclick = () => {
      setAddDisplay('');
    }

    addBtn.onclick = () => {
      setAddDisplay('hidden');
    }

    cancelBtn.onclick = () => {
      setAddDisplay('hidden');
    }

    replaceBtn.onclick = () => {
      setEditDisplay('hidden');
    }

    addEditBtn.onclick = () => {
      setEditDisplay('hidden');
    }

    cancelEditBtn.onclick = () => {
      setEditDisplay('hidden');
    }

  }, []);

  return (
    <>
      <div className='flex items-center justify-between text-white mb-8'>
        <div>
          <h1 className='text-2xl'>Media Library</h1>
          <p>{assetCounter} Assets</p>
        </div>
        <button id='addNewBtn' className={'flex bg-darkPrimary px-5 items-center rounded-md h-10'} >
          <i className='fa-solid fa-plus'></i>
          <h1 className='text-xl ml-3'>Add new Asset</h1>
        </button>
      </div>

      <div className='flex flex-wrap justify-start'>
        <div onClick={() => setEditDisplay('')} className='bg-darkPrimary w-full lg:w-56 relative rounded-md pt-2 px-2 m-3 hover:cursor-pointer'>
          <i className='fa-regular fa-box absolute right-4 top-4'></i>
          <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
          <div className='flex justify-between py-2 px-4 text-white'>
            <p>Image.jpg</p>
            <p>image</p>
          </div>
        </div>
        <div onClick={() => setEditDisplay('')} className='bg-darkPrimary w-full lg:w-56 relative rounded-md pt-2 px-2 m-3 hover:cursor-pointer'>
          <i className='fa-regular fa-box absolute right-4 top-4'></i>
          <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
          <div className='flex justify-between py-2 px-4 text-white'>
            <p>Image.jpg</p>
            <p>image</p>
          </div>
        </div>
        <div onClick={() => setEditDisplay('')} className='bg-darkPrimary w-full lg:w-56 relative rounded-md pt-2 px-2 m-3 hover:cursor-pointer'>
          <i className='fa-regular fa-box absolute right-4 top-4'></i>
          <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
          <div className='flex justify-between py-2 px-4 text-white'>
            <p>Image.jpg</p>
            <p>image</p>
          </div>
        </div>
        <div onClick={() => setEditDisplay('')} className='bg-darkPrimary w-full lg:w-56 relative rounded-md pt-2 px-2 m-3 hover:cursor-pointer'>
          <i className='fa-regular fa-box absolute right-4 top-4'></i>
          <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
          <div className='flex justify-between py-2 px-4 text-white'>
            <p>Image.jpg</p>
            <p>image</p>
          </div>
        </div>
        <div onClick={() => setEditDisplay('')} className='bg-darkPrimary w-full lg:w-56 relative rounded-md pt-2 px-2 m-3 hover:cursor-pointer'>
          <i className='fa-regular fa-box absolute right-4 top-4'></i>
          <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
          <div className='flex justify-between py-2 px-4 text-white'>
            <p>Image.jpg</p>
            <p>image</p>
          </div>
        </div>
      </div>

      <div className={'absolute top-0 left-0 bg-gray-800 w-full h-full ' + addDisplay}>
        <div className='bg-white w-9/12 opacity-100 mx-auto mt-20 rounded-md'>
          <div className='bg-darkPrimary w-full flex justify-between items-center py-4 px-6 text-md text-white rounded-t-md'>
            <h1>Add new asset</h1>
            <i className='fa-regular fa-box'></i>
          </div>
          <div className='w-full p-10'>
            <div {...getRootProps({ className: "dropzone" })} className='w-full flex flex-col items-center border-dashed border-2 border-sky-500 py-8'>
              <h1 className='text-2xl mb-4'>Drag or drop here</h1>
              <input {...getInputProps()} className='input-zone' />
              {paths.map(path => 
                <img className='border-2 max-h-40' key={path} src={path} alt='img' />
              )}
              <button type="button" className="bg-darkPrimary rounded py-2 px-4 text-white mt-4">
                Click to select files
              </button>
            </div>
          </div>
          <div className='w-full flex justify-between items-center pb-4 px-6 text-md text-white rounded-b-md'>
            <button id='cancelBtn' className='flex bg-darkPrimary px-5 items-center rounded-md h-10'>
              <h1 className='text-xl'>Cancel</h1>
            </button>
            <button id='addBtn' className='flex bg-darkPrimary px-5 items-center rounded-md h-10'>
              <i className="fa-solid fa-plus"></i>
              <h1 className='text-xl ml-3'>Add</h1>
            </button>
          </div>
        </div>
      </div>

      <div className={'absolute top-0 left-0 bg-gray-800 w-full h-full ' + editDisplay}>
        <div className='bg-white w-9/12 opacity-100 mx-auto mt-20 rounded-md'>
          <div className='bg-darkPrimary w-full flex justify-between items-center py-4 px-6 text-md text-white rounded-t-md'>
            <h1>Detail</h1>
            <i className='fa-regular fa-box'></i>
          </div>
          <div className='flex justify-around w-full py-8 px-4'>
            <div className='w-5/12'>
              <img src={require('assets/img/documentation.png')} alt='img' className='w-full rounded-t-sm border-2 border-gray-800' />
            </div>
            <div className='w-5/12'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black'
                htmlFor='grid-password'>
                Title
              </label>
              <input
                type='text'
                className='border-2 border-darkPrimary px-3 py-3 mb-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              />
              <button id='replacelBtn' className='w-full flex bg-darkPrimary px-5 items-center rounded-md h-10 text-white'>
                <h1 className='text-xl mx-auto'>Replace</h1>
              </button>
            </div>
          </div>
          <div className='w-full flex justify-between items-center pb-4 px-6 text-md text-white rounded-b-md'>
            <button id='cancelEditBtn' className='flex bg-darkPrimary px-5 items-center rounded-md h-10'>
              <h1 className='text-xl'>Cancel</h1>
            </button>
            <button id='addEditBtn' className='flex bg-darkPrimary px-5 items-center rounded-md h-10'>
              <i className="fa-solid fa-plus"></i>
              <h1 className='text-xl ml-3'>Add</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}