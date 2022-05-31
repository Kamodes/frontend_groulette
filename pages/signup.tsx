import { useRef } from "react";
import { auth } from "../firebase";

const SignUp = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log("サインin");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-8 ml-5 text-xl">
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div className="mt-3 ml-5 text-xl">
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button className="mx-5 my-3 flex justify-center bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-1 px-3 border border-green-700 rounded">登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
