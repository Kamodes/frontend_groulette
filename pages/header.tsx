import { useAuthContext } from "../authContext";
import { HeaderButton } from "../components/hearderButton";

export const Header = () => {
  const { user } = useAuthContext();
  const isSignUp = (user: any) => {
    if (!user) {
      return <HeaderButton label="新規登録" />;
    }
    return <p className="mt-6">{user.email}様こんにちは！</p>;
  };
  return (
    <div className="flex bg-blue-300">
      <div className="basis-1/3"></div>
      <div className="flex flex-row">
        {isSignUp(user)}
        <HeaderButton label={user ? "ログアウト" : "ログイン"} />
        <HeaderButton label="このサイトについて" />
        <HeaderButton label="嫌いな店リスト" />
      </div>
    </div>
  );
};
