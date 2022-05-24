import { Button } from "@mui/material";
import Router from "next/router";
import { auth } from "../firebase";

export const HeaderButton = (props: { label: string }) => {
  const getPath = () => {
    if (props.label == "ログイン") {
      return "/signin";
    } else if (props.label == "ログアウト") {
      auth.signOut();
      return "/choice";
    } else {
      return "/signup";
    }
  };
  return (
    <Button
      onClick={() => Router.push(getPath())}
      className="font-bold text-gray-800 mx-1 mt-5 mb-4"
    >
      {props.label}
    </Button>
  );
};
