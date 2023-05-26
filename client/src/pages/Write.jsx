import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import {newAxios} from '../lib/newAXios'
import { useLocation, useNavigate } from "react-router-dom";
import {useAuth} from '../hooks/useAuth'

const Write = () => {

  const{user} = useAuth()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const {state} = useLocation()
  const [value, setValue] = useState( state?.desc || "");
  const [title, setTitle] = useState( state?.title || "");
  const [cat, setCat] = useState( state?.cat || "art");
  const [image, setImage] = useState(null);
  const [imageUrl,setImageUrl] = useState(state?.img || '')
const location = useLocation()
const navigate = useNavigate()
console.log(imageUrl)
useEffect(()=>{
if(!location.search)
{  setValue('')
  setTitle('')
  setCat('art')}


  else{
    setValue(state?.desc || "")
    setTitle( state?.title || "")
    setCat(state?.cat || "art")
    setImageUrl(state?.img || '')

  }

  console.log(title,value,cat,imageUrl)
},[location])


useEffect(()=>{


const setPhoto = async()=>{
await  upload()
console.log(imageUrl)
}
if(image)
{setPhoto()}
 
},[image])


  console.log(state)


  const upload = async ()=>{

    try {
      const formdata = new FormData()
      formdata.append('file',image)
  
      const res =await  newAxios.post('/upload',formdata)
     setImageUrl(`http://localhost:8800/api/uploads/${res.data}`)
    } catch (error) {
      console.log(error)
    }
 
  }


  const handleSubmit = async()=>{


try {
setLoading(true)



  if(state){

    const res = await newAxios.put(`/posts/${state._id}`,{title,desc:value,cat,img:imageUrl,username:user.username})
    console.log(res.data)
    navigate(`/post/${state._id}`)
  }

  else{
   
    const res = await newAxios.post('/posts',{title,value,cat,imageUrl,username:user.username})
    console.log(res.data)
    navigate(`/post/${res.data._id}`)
  }
} catch (error) {
  console.log(error)
  setError(error.response.data)
}finally{
  setLoading(false)
}




  
  }

  return (
    <div className="flex-1  pb-20 w-full">
      <div className="flex gap-5 w-full flex-col md:flex-row p-4">
        <div className="flex-[5] space-y-2 flex flex-col ">
          <input
            type="text"
            className="p-2 border outline-none w-full border-zinc-300"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="flex-1 w-full h-[400px] border-zinc-300 border overflow-y-scroll myScroll">
            {" "}
            <ReactQuill
              className="h-[400px] md:h-wuto w-full resize-none "
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="flex-[2] space-y-4 flex flex-col justify-between">
          <div className="p-3 flex flex-col gap-4 border border-zinc-300">
            <h1 className="text-gray-600 text-3xl font-bold">Publish</h1>
            <span className="text-gray-600 block">
              <b>Status:</b> for publishment
            </span>
            <span className="text-gray-600 block">
              <b>Visibility:</b> public
            </span>
            <input
              hidden
              type="file"
              id="theFile"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label
              className="text-gray-600 underline cursor-pointer block capitalize"
              htmlFor="theFile"
            >
              upload image
            </label>
          
            
              <button className="text-white bg-teal-700 px-3 py-1 py-2 disabled:bg-gray-400" onClick={handleSubmit} disabled={!title || !value ||!cat ||!imageUrl}>
        {loading? 'Loading...' : state ? 'Update' : 'Publish'}
              </button>
        
            {error&&<p className="text-red-400 py-3 text-xs">{error}</p>}
          </div>
          <div className="p-3 flex flex-col gap-4 border border-zinc-300">
            <h1 className="text-gray-600 text-3xl font-bold">Category</h1>
            <div>
              <div className="flex items-center gap-2">
                <input id="art" type="radio" name="cat" value={"art"} onChange={e=>setCat(e.target.value)} checked={cat==='art'}/>
                <label
                  htmlFor="art"
                  className="text-gray-500 cursor-pointer capitalize"
                >
                  Art
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input id="science" type="radio" name="cat" value={"science"} onChange={e=>setCat(e.target.value)} checked={cat==='science'} />
                <label
                  htmlFor="science"
                  className="text-gray-500 cursor-pointer capitalize"
                >
                  science
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="technology"
                  type="radio"
                  name="cat"
                  value={"technology"}
onChange={e=>setCat(e.target.value)}
checked={cat==='technology'}
                />
                <label
                  htmlFor="technology"
                  className="text-gray-500 cursor-pointer capitalize"
                >
                  technology
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input id="cinema" type="radio" name="cat" value={"cinema"} 
                onChange={e=>setCat(e.target.value)}
                checked={cat==='cinema'}
                />
                <label
                  htmlFor="cinema"
                  className="text-gray-500 cursor-pointer capitalize"
                >
                  cinema
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input id="design" type="radio" name="cat" value={"design"} 
                onChange={e=>setCat(e.target.value)}
                checked={cat==='design'}
                />
                <label
                  htmlFor="design"
                  className="text-gray-500 cursor-pointer"
                >
                  design
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input id="food" type="radio" name="cat" value={"food"} 
                onChange={e=>setCat(e.target.value)}
                checked={cat==='food'}
                />
                <label htmlFor="food" className="text-gray-500 cursor-pointer">
                  food
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
