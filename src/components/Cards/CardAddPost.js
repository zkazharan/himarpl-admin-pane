import { React, useEffect, useState } from 'react';

export default function CardSettings({ display, setAddPostDisplay, setPostDisplay }) {

  const [imgDisplay, setImgDisplay] = useState('hidden');
  const [ftTrueDisplay, setFtTrueDisplay] = useState('border-2 border-gray-800');
  const [ftFalseDisplay, setFtFalseDisplay] = useState('bg-darkPrimary text-white');

  useEffect(() => {
    const imgInp = document.getElementById('imgInp');
    const img = document.getElementById('img');

    const ftTrue = document.getElementById('ftTrue');
    const ftFalse = document.getElementById('ftFalse');

    const backBtn = document.getElementById('backBtn');

    imgInp.onchange = () => {
      const [file] = imgInp.files;
      if (file) {
        img.src = URL.createObjectURL(file);
        setImgDisplay('');
      }
    }

    ftTrue.onclick = () => {
      setFtTrueDisplay('bg-darkPrimary text-white');
      setFtFalseDisplay('border-2 border-gray-800');
    }

    ftFalse.onclick = () => {
      setFtTrueDisplay('border-2 border-gray-800');
      setFtFalseDisplay('bg-darkPrimary text-white');
    }

    backBtn.onclick = () => {
      setAddPostDisplay('hidden');
      setPostDisplay('');
    }

  }, []);

  return (
    <>
      <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 ' + display}>
        <div className='flex-auto px-4 lg:px-10 py-10'>
          <div id='backBtn' className='flex items-center mb-6 hover:cursor-pointer'>
            <i className="fa-solid fa-arrow-left mr-2"></i>
            <h6>Back</h6>
          </div>
          <form>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Slug
                  </label>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Body
                  </label>
                  <textarea
                    type='text'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    rows='8'></textarea>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-5/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Thumbnail
                  </label>
                  <div className={'w-full bg-white border-2 flex justify-center ' + imgDisplay}>
                    <img id='img' src='#' alt='Thumbnail Preview' />
                  </div>
                  <input
                    type='file'
                    id='imgInp'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
              <div className='w-full lg:w-3/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Featured
                  </label>
                  <div className='flex align-items justify-around border-0 px-2 py-1.5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                    <div id='ftTrue' className={'w-5/12 py-1.5 text-center hover:cursor-pointer rounded ' + ftTrueDisplay}>
                      True
                    </div> 
                    <div id='ftFalse' className={'w-5/12 py-1.5 text-center hover:cursor-pointer rounded ' + ftFalseDisplay}>
                      False
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'>
                    Category
                  </label>
                  <select className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                    <option value="proker">Proker</option>
                    <option value="blog">Blog</option>
                    <option value="headline">Headline</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
