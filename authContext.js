import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [restaurantList, setRestaurantList] = useState([
    "あくた川",
    "ハイライト",
    "キラメキ",
    "中央食堂",
    "マハカレー",
    "伝丸",
    "たくみ",
    "鳥貴族",
    "さわやか",
    "カフェテリアルネ",
  ]);
  const value = {
    user,
    restaurantList,
    setRestaurantList,
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
