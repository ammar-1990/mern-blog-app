import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import Menue from "../components/Menue";
import {useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { newAxios } from "../lib/newAXios";
import DOMPurify from 'dompurify';
import { useAuth } from "../hooks/useAuth";




const Single = () => {
  const params = useParams();
const {user} = useAuth()
  const id = params.id;

  const { data, loading, error } = useFetch(`/posts/${id}`);
const navigate = useNavigate()
  const handleDelete=async()=>{
    try {
      const res = await newAxios.delete(`/posts/${id}`)
      console.log(res.data)
      navigate('/',{replace:true})

    } catch (error) {
      console.log(error)
    }

  }


  if(loading &&!data) return <p>Loading...</p>
  if(error) return <p>{error.response.data}</p>
  return (
    <div className="flex-1 flex gap-6 p-2">
      <div className="flex-[5] flex flex-col gap-3 p-2 pb-8">
        <div>
          <img
            src={data?.img}
            className="w-full h-[400px] object-cover"
            alt=""
          />
        </div>

        <div className="py-4 flex items-center gap-3">
        
          <div>
            <p className="text-gray-700 font-semibold capitalize">{data?.username}</p>
            <p className="text-gray-500 text-xs">{new Date(data?.createdAt).toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-1">
         {user._id === data?.uid &&<><Link to={`/write?edit=${data?._id}`} state={data}>  <PencilSquareIcon className="bg-teal-400 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-teal-600 duration-300"  /></Link> 
            <TrashIcon onClick={handleDelete} className="bg-red-400 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-red-600 duration-300" /></>}
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl">{data?.title}</h1>
          <p className="text-gray-700 text-justify leading-7" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.desc) }} />
         
          
        </div>
      </div>

      <Menue cat={data?.cat} theId={data?._id}/>
    </div>
  );
};

export default Single;
