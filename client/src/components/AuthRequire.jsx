import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";




// eslint-disable-next-line react/prop-types
const AuthRequire = ({children}) => {


    const {user,loading} = useAuth()

    if(loading) return <p className="w-screen h-screen flex items-center justify-center text-gray-600 text-4xl animate-pulse">Loading...</p>
    if(!loading && !user) return <Navigate to={'/register'} />
    return children
}

export default AuthRequire