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
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        {/* <div>
          ユーザ登録は<Link to={"/signup"}>こちら</Link>から
        </div> */}
      </form>
    </div>
  );
};

export default Login;
