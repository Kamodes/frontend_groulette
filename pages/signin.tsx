import { auth } from "../firebase";
import Router from "next/router";

const Login = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const isLogin = await auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    if (isLogin) {
      Router.push("/choice");
    } else {
      alert("ログインができません");
    }
    console.log("ログイン");
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
          <button className="mx-5 my-3 flex justify-center bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-1 px-3 border border-red-700 rounded">ログイン</button>
        </div>
        {/* <div>
          ユーザ登録は<Link to={"/signup"}>こちら</Link>から
        </div> */}
      </form>
    </div>
  );
};

export default Login;
