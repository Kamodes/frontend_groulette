import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const [restaurantList, setRestaurantList] = useState([]);

  const [restaurantIDList, setRestaurantIDList] = useState([]);

  const [dislike, setDislike] = useState([]);

  const value = {
    user,
    restaurantList,
    setRestaurantList,

    restaurantIDList,
    setRestaurantIDList,

    dislike,
    setDislike,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
