import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";


const Menue = ({cat}) => {
 const {data,loading,error} = useFetch(`/posts?cat=${cat}`)

  const navigate = useNavigate();

  return (
    <div className="hidden md:block flex-[2] pb-8">
      <h1 className="text-gray-500 text-2xl font-bold">
        Other posts you may like
      </h1>
      {loading &&<p>Loading...</p>}
      <div className="mt-5 space-y-12">
        {data?.slice(0, 3).map((el, i) => (
          <div key={el._id} className="flex flex-col gap-2">
            <img src={el.img} className="h-[200px] object-cover w-full" />
            <h1 className="font-bold text-2xl text-gray-600">{el.title}</h1>
            <button
              onClick={() => navigate(`/post/${el._id}`)}
              className="px-4 py-2 w-fit border-teal-500 text-teal-500 border capitalize duration-300 hover:bg-teal-500 hover:text-white "
            >
              read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menue;
