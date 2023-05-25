import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Write = () => {

  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className="flex-1  pb-20 w-full">
      <div className='flex gap-5 w-full'>
      <div className="flex-[5] space-y-2 flex flex-col">
        <input type="text" className='p-2 border outline-none w-full border-zinc-300' placeholder='Title' />
        <div className='flex-1 w-full border-zinc-300 border overflow-y-scroll myScroll'>  <ReactQuill className='h-full w-full resize-none ' theme="snow" value={value} onChange={setValue} /></div>
      

      </div>
      <div className="flex-[2] space-y-4 flex flex-col justify-between">
        <div className='p-3 flex flex-col gap-4 border border-zinc-300'>
          <h1 className='text-gray-600 text-3xl font-bold'>Publish</h1>
          <span className='text-gray-600 block'><b>Status:</b> draft</span>
          <span className='text-gray-600 block'><b>Visibility:</b> public</span>
          <input hidden type='file' id='theFile'/>
          <label className='text-gray-600 underline cursor-pointer block capitalize' htmlFor='theFile'>upload image</label>
          <div className='flex w-full justify-between '>
            <button className="px-4 py-2 w-fit border-teal-500 text-teal-500 border capitalize duration-300 hover:bg-teal-500 hover:text-gray-700 hover:text-white">Save as draft</button>
         <button className='text-white bg-teal-700 px-3 py-1'>Update</button>
          </div>
        </div>
        <div className='p-3 flex flex-col gap-4 border border-zinc-300'>
        <h1 className='text-gray-600 text-3xl font-bold'>Category</h1>
        <div>
          <div className='flex items-center gap-2'>
            <input id='art' type="radio" name='cat' value={'art'} />
            <label htmlFor='art' className='text-gray-500 cursor-pointer capitalize'>Art</label>
          </div>
          <div className='flex items-center gap-2'>
            <input id='science' type="radio" name='cat' value={'science'} />
            <label htmlFor='science' className='text-gray-500 cursor-pointer capitalize'>science</label>
          </div>
          <div className='flex items-center gap-2'>
            <input id='technology' type="radio" name='cat' value={'technology'} />
            <label htmlFor='technology' className='text-gray-500 cursor-pointer capitalize'>technology</label>
          </div>
          <div className='flex items-center gap-2'>
            <input id='cinema' type="radio" name='cat' value={'cinema'} />
            <label htmlFor='cinema' className='text-gray-500 cursor-pointer capitalize'>cinema</label>
          </div>
          <div className='flex items-center gap-2'>
            <input id='design' type="radio" name='cat' value={'design'} />
            <label htmlFor='design' className='text-gray-500 cursor-pointer'>design</label>
          </div>
          <div className='flex items-center gap-2'>
            <input id='food' type="radio" name='cat' value={'food'} />
            <label htmlFor='food' className='text-gray-500 cursor-pointer'>food</label>
          </div>
        </div>
        </div>
      

      </div>
      </div>
    </div>
  )
}

export default Write