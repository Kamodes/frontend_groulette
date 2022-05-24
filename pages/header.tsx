import { useAuthContext } from "../authContext";
import { HeaderButton } from "../components/hearderButton";

export const Header = () => {
  const { user } = useAuthContext();
  const isSignUp = (user: any) => {
    if (!user) {
      return <HeaderButton label="新規登録" />;
    } else {
      return <HeaderButton label="" />;
    }
  };
  return (
    <div className="flex bg-blue-300">
      <div className="basis-1/2"></div>
      <div className="flex-row">
        {isSignUp(user)}
        <HeaderButton label="このサイトについて" />
        <HeaderButton label={user ? "ログアウト" : "ログイン"} />
      </div>
    </div>
  );
};
