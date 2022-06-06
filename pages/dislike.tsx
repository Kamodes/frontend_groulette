import { useEffect, useState } from "react";
import { useAuthContext } from "../authContext";
import { db } from "../firebase";

const Dislike = () => {
  const { user } = useAuthContext();
  const { dislike, setDislike } = useAuthContext();
  useEffect(() => {
    let copyList: string[] = [];
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().email == user.email) {
            copyList.push(doc.data().resname);
            console.log(doc.data().resname);
          }
        });
        setDislike(copyList);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);
  return (
    <ul className="flex-row basis-2/3">
      {Array.from(new Set(dislike)).map((name: string) => (
        <li key={name} className="text-center ">
          <>{name}</>
        </li>
      ))}
    </ul>
  );
};
export default Dislike;
