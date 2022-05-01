import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const buttons1 = [
  <Button key="one">牛丼</Button>,
  <Button key="two">ラーメン</Button>,
  <Button key="three">パスタ</Button>,
  <Button key="three">定食</Button>,
];
const buttons2 = [
  <Button key="one">カレー</Button>,
  <Button key="two">ハンバーガー</Button>,
  <Button key="three">中華</Button>,
  <Button key="three">その他</Button>,
];

export default function GroupOrientation() {
  return (
    <div>
      <ButtonGroup
        style={{
          maxWidth: "150px",
          maxHeight: "30px",
          minWidth: "150px",
          minHeight: "30px",
        }}
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons1}
      </ButtonGroup>
      <ButtonGroup
        style={{
          maxWidth: "150px",
          maxHeight: "30px",
          minWidth: "150px",
          minHeight: "30px",
        }}
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons2}
      </ButtonGroup>
    </div>
  );
}
