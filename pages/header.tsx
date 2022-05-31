import { useAuthContext } from "../authContext";
import { HeaderButton } from "../components/hearderButton";
import Router from "next/router";

export const Header = () => {
  //ページ遷移
  const handler = (path: string) => {
    Router.push({
      pathname: path,
    });
  };
  const { user } = useAuthContext();
  const isSignUp = (user: any) => {
    if (!user) {
      return <HeaderButton label="新規登録" />;
    }
    return (
      <p className="mt-5 font-sans font-medium text-white">
        {user.email}さん こんにちは！
      </p>
    );
  };
  return (
    <div className="flex bg-blue-500 border-b-4 border-blue-100">
      <div id="topPage" className="basis-1/2">
        <button
          onClick={() => handler("/choice")}
          className="basis-1/2 mt-2 mb-1 ml-2 bg-blue-500 text-5xl font-sans font-medium text-white"
        >
          Groulette
        </button>
      </div>
      <div id="signUp" className="flex-end basis-1/3">
        {isSignUp(user)}
      </div>
      <div id="headerButton" className="basis-1/3">
        <HeaderButton label={user ? "ログアウト" : "ログイン"} />
        <HeaderButton label="このサイトについて" />
        <HeaderButton label="嫌いな店リスト" />
      </div>
    </div>
  );
};
