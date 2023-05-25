import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import Menue from "../components/Menue";
import {useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const Single = () => {
  const params = useParams();

  const id = params.id;

  const { data, loading, error } = useFetch(`/posts/${id}`);


  if(loading) return <p>Loading...</p>
  if(error) return <p>{error.response.data}</p>
  return (
    <div className="flex-1 flex gap-6">
      <div className="flex-[5] flex flex-col gap-3 p-2 pb-8">
        <div>
          <img
            src={data?.img}
            className="w-full h-[400px] object-cover"
            alt=""
          />
        </div>

        <div className="py-4 flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div>
            <p className="text-gray-700 font-semibold ">John</p>
            <p className="text-gray-500 text-xs">Posted 2 days ago</p>
          </div>
          <div className="flex items-center gap-1">
            <PencilSquareIcon className="bg-teal-400 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-teal-600 duration-300" />
            <TrashIcon className="bg-red-400 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-red-600 duration-300" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl">{data?.title}</h1>
          <p className="text-gray-700 text-justify leading-7">
           {data?.desc}
          </p>
        </div>
      </div>

      <Menue />
    </div>
  );
};

export default Single;
