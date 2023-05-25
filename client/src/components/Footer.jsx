import Logo from "./Logo"


const Footer = () => {
  return (
    <div className="bg-teal-200 px-20 py-2 flex items-center justify-between">
<Logo />

<div className="text-gray-700 font-semibold  flex flex-col items-center">
  <p>Made By</p>
  <p>Ammar</p>
</div>
    </div>
  )
}

export default Footer