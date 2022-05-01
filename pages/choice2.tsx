import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GroupOrientation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons1}
          </ButtonGroup>
        </Grid>
        <Grid item xs={8}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons2}
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}
