import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import Menue from "../components/Menue";

const Single = () => {
  return (
    <div className="flex-1 flex gap-6">
      <div className="flex-[5] flex flex-col gap-3 p-2 pb-8">
        <div>
          <img
            src="https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          <h1 className="text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            error!
          </h1>
          <p className="text-gray-700 text-justify leading-7">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Facilis excepturi saepe voluptatibus reiciendis quae ipsum dolorem maiores, dolore fuga quisquam sunt error necessitatibus repellendus cupiditate veniam voluptas dolor, atque similique rerum. Assumenda fuga, dolorem, necessitatibus nemo enim et repellat maxime, nesciunt facilis eos magnam inventore. Numquam ipsa quos provident minima, cupiditate fuga, blanditiis impedit sequi rem perspiciatis ad dolore repudiandae aspernatur! Expedita, beatae! Id consectetur cum aut fuga dolore minus reprehenderit nam iure! Vitae, ipsa quam pariatur quis aperiam amet voluptatum, 
          numquam non sapiente atque necessitatibus? Aspernatur, obcaecati. Vel cupiditate possimus quam, aut animi earum maiores unde dolores voluptatum libero voluptatem, quas ad illo voluptates dignissimos molestias provident reprehenderit nemo voluptate sunt, fuga accusamus! Praesentium rerum mollitia ea. Culpa, sint!
          </p>
        </div>
      </div>

<Menue />
    </div>
  );
};

export default Single;
