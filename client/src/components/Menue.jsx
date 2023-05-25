import { useNavigate } from "react-router-dom";
const Menue = () => {
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
    <div className="hidden md:block flex-[2] pb-8">
      <h1 className="text-gray-500 text-2xl font-bold">
        Other posts you may like
      </h1>
      <div className="mt-5 space-y-12">
        {posts.slice(0, 3).map((el, i) => (
          <div key={el.id} className="flex flex-col gap-2">
            <img src={el.image} className="h-[200px] object-cover w-full" />
            <h1 className="font-bold text-2xl text-gray-600">{el.title}</h1>
            <button
              onClick={() => navigate(`/post/${el.id}`)}
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
