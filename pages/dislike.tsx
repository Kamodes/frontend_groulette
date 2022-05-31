import { useAuthContext } from "../authContext";
import { db } from "../firebase";
const Dislike = () => {
  const { user } = useAuthContext();
  var usersCollectionRef = db.collection("users");
  console.log(usersCollectionRef);
  return <h1>{user.email}さんの嫌いな店の一覧です。</h1>;
};
export default Dislike;
