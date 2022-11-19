import { React, useEffect } from 'react';

export default function CardSettings({ display, setAddPostDisplay, setPostDisplay }) {

  useEffect(() => {

    const backBtn = document.getElementById('backBtn');

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
                    Name
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
          </form>
        </div>
      </div>
    </>
  );
}
