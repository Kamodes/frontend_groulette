import { Button } from "@mui/material";
import Router from "next/router";
import { auth } from "../firebase";
import { useAuthContext } from "../authContext";

export const HeaderButton = (props: { label: string }) => {
  const { user } = useAuthContext();
  const getPath = () => {
    if (props.label == "ログイン") {
      return "/signin";
    } else if (props.label == "ログアウト") {
      auth.signOut();
      return "/choice";

    } else if (props.label == "嫌いな店リスト") {
      return user ? "/dislike" : "/signin";

    } else {
      return "/signup";
    }
  };
  return (
    <Button
      onClick={() => Router.push(getPath())}
      className="hover:bg-blue-700 font-sans font-medium text-xl text-white mx-1 mt-3 mb-1"
    >
      {props.label}
    </Button>
  );
};
