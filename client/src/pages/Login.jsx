import { useState } from "react";
import { Link } from "react-router-dom";
import { newAxios } from "../lib/newAXios.js";
import { useAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {  dispatch } = useAuth();


const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setError("");
      const res = await newAxios.post("/auth/login", { email, password });
      console.log(res.data);
      dispatch({ type: "LOG_IN", payload: res.data });
      localStorage.setItem('user',JSON.stringify(res.data))
      navigate('/',{replace:true})
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="h-screen bg-teal-400 flex justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-12 max-w-[450px] w-full mt-20 bg-white p-5 rounded-2xl self-start"
      >
        <h1 className="text-5xl text-teal-800 font-bold">Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input"
          required
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input"
          required
          min={6}
          type="password"
          placeholder="Enter your password"
        />
        <button
          disabled={!email || !password || loading}
          className="btn disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p>
          Don{"'"}t have an account?{" "}
          <Link className="hover:underline" to={"/register"}>
            Register.
          </Link>
        </p>
        {error && (
          <p className="bg-red-100 text-red-500 border-red-500 p-2 border rounded-lg">
            {error.response.data}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
