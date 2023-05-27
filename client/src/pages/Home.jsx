import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify'




import useFetch from "../hooks/useFetch";
const Home = () => {

const {search} = useLocation()


const {data,loading,error} = useFetch(`/posts${search}`)


  const navigate = useNavigate();





  return (
    <div className="  mt-10 p-4">
      {loading && data?.length===0 || !data && <p className=" flex items-center justify-center text-3xl animate-pulse text-gray-500">Loading...</p>}
      {error&&<p className=" flex items-center justify-center text-3xl  text-red-500">{error.response.data}</p>}
      {data?.length===0 && !loading &&<p>No  blogs available</p>}
      {data?.map((el, i) => (
        <div
          key={el._id}
          className={`flex my-24 first-of-type:mt-12  flex-col md:flex-row ${i % 2 !== 0 && "md:flex-row-reverse"}`}
        >
          <div className="flex-1 relative">
            <div
              className={`absolute hidden md:block bg-teal-200 w-full h-[300px] top-4 z-[-1] ${
                i % 2 !== 0 ? "right-4" : "left-4"
              }`}
            />
            <img
              src={el.img}
              alt=""
              className="w-full object-cover h-[300px]"
            />
          </div>
          <div className="flex-[2] p-4 md:px-14 px-4 flex gap-4 flex-col justify-between">
            <h1 className="capitalize md:text-4xl font-semibold">{el.title}</h1>
            <p className="text-gray-700 text-justify leading-7" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(el?.desc.slice(0,300)+ '...') }} />
            <button
              onClick={() => navigate(`/post/${el._id}`)}
              className="px-4 py-2 w-fit border-teal-500 text-teal-500 border capitalize duration-300 hover:bg-teal-500  hover:text-white "
            >
              read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
