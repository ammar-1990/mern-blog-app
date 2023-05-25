import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const initial_state = {
    user: null,
    loading: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOG_IN":
        return { user: action.payload, loading: false };
      case "LOG_OUT":
        return { user: null, loading: false };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  useEffect(() => {
    const theUser = localStorage.getItem("user");
    if (theUser) {
      dispatch({ type: "LOG_IN", payload: JSON.parse(theUser) });
    } else {
      dispatch({ type: "LOG_OUT" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
