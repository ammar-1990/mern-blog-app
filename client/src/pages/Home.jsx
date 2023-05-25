import { useNavigate } from "react-router-dom";
const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ad.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste recusandae corporis ratione tempora accusamus beatae assumenda qui! Itaque ipsa facilis voluptates optio suscipit perspiciatis nobis provident in at, alias eos magni molestias illo dicta cumque veritatis, sequi expedita! Officiis ullam dignissimos esse distinctio porro labore officia odio praesentium itaque?officia odio praesentium itaque? dio praesentium itaque?officia odio praesentium itaque?dio praesentium itaque?officia odio praesentium itaque?dio praesentium itaque?officia odio praesentium itaque?",
      image:
        "https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex-1 mt-20 p-4">
      {posts.map((el, i) => (
        <div
          key={el.id}
          className={`flex my-24  flex-col md:flex-row ${i % 2 !== 0 && "md:flex-row-reverse"}`}
        >
          <div className="flex-1 relative">
            <div
              className={`absolute hidden md:block bg-teal-200 w-full h-[400px] top-4 z-[-1] ${
                i % 2 !== 0 ? "right-4" : "left-4"
              }`}
            />
            <img
              src={el.image}
              alt=""
              className="w-full object-cover h-[400px]"
            />
          </div>
          <div className="flex-[2] p-4 md:px-14 px-4 flex gap-2 flex-col justify-between">
            <h1 className="capitalize md:text-4xl font-semibold">{el.title}</h1>
            <p className="text-gray-600 line-clamp-5 text-justify">{el.desc}</p>
            <button
              onClick={() => navigate(`/post/${el.id}`)}
              className="px-4 py-2 w-fit border-teal-500 text-teal-500 border capitalize duration-300 hover:bg-teal-500 hover:text-gray-700 hover:text-white "
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
