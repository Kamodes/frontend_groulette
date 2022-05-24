import { auth } from "../firebase";

const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.signInWithEmailAndPassword(email.value, password.value);
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
