import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

// 画像の配置
// %で幅の割合を指定
{
  /*
const rest_img = [
  {
    url: "/img/food_gyudon.png",
    title: "Gyudon",
    width: "80%",
  },
  {
    url: "/img/food_hamburger_cheese.png",
    title: "Hamburger",
    width: "80%",
  },
  {
    url: "/img/food_ramen_iekei.png",
    title: "Ramen",
    width: "80%",
  },
  {
    url: "/img/food_spaghetti_vongole_bianco.png",
    title: "Pasta",
    width: "80%",
  },
  {
    url: "img/food_subuta.png",
    title: "Chinese",
    width: "80%",
  },
  {
    url: "img/teisyoku_haizen.png",
    title: "Japanese",
    width: "80%",
  },
  {
    url: "img/vegetable_curry.png",
    title: "Curry",
    width: "80%",
  },
  {
    url: "img/nomikai_happy.png",
    title: "Others",
    width: "80%",
  },
];
*/
}

// 暫定リスト
// ルーレット候補に応じて
// const rest_cand = rest_img.concat(rest_img).concat(rest_img.slice(0, 4));

const imageAssign = (n: string, j: string) => {
  if (j == "Gyudon") {
    var img = {
      url: "/img/food_gyudon.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Hamburger") {
    var img = {
      url: "/img/food_hamburger_cheese.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Ramen") {
    var img = {
      url: "/img/food_ramen_iekei.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Pasta") {
    var img = {
      url: "/img/food_spaghetti_vongole_bianco.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Chinese") {
    var img = {
      url: "img/food_subuta.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Japanese") {
    var img = {
      url: "img/teisyoku_haizen.png",
      title: n,
      width: "40%",
    };
  } else if (j == "Curry") {
    var img = {
      url: "img/vegetable_curry.png",
      title: n,
      width: "40%",
    };
  } else {
    var img = {
      url: "img/nomikai_salaryman.png",
      title: n,
      width: "40%",
    };
  }
  return img;
};

const buttonImg = [
  { url: "img/rouletteStart.png", title: "Start", width: "20%" },
];

// BackEndからお店のリストとジャンルを受け取る
const candList = [
  ["すき家", "Gyudon"],
  ["マクドナルド", "Hamburger"],
  ["吉野家", "Gyudon"],
  ["あくた川", "Ramen"],
  ["キラメキ☆JAPAN", "Ramen"],
  ["ジェームズキッチン", "others"],
  ["チャンピオンカレー", "Curry"],
  ["凛屋", "Pasta"],
  ["火楓源", "Chinese"],
  ["ケンタッキー", "Hamburger"],
];

const subcandList = [
  ["ラジュ", "Curry"],
  ["サコブーン", "Japanese"],
  ["鳥貴族", "Others"],
  ["ハイライト", "Japanese"],
  ["松之助", "Japanese"],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
  /*
  ["カフェコレクション", "Pasta"],
  ["あくた川流", "Ramen"],
  ["マハ", "Curry"],
  ["吉田チキン", "Others"],
  ["かふう", "Japanese"],
*/
];

var rest_cand = [];
candList.map((cand, index) => rest_cand.push(imageAssign(cand[0], cand[1])));

var sub_rest_cand = [];
subcandList.map((cand, index) =>
  sub_rest_cand.push(imageAssign(cand[0], cand[1]))
);

// イメージつきボタンの設定
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  disabled: "false",
  position: "relative",
  height: 80,
  // あんまりよくわかってない設定
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageSrc-root": {
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat", // 表示サイズに合わせて拡大
  backgroundPosition: "left 40%", // 写真の位置(0:上合わせ/100:下合わせ)
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#000000", //theme.palette.common.black,
  opacity: 0.4, //マウス非ホバー時の明度 //0.4
  transition: theme.transitions.create("opacity"),
}));

// 多分下のバーの設定
const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  const router = useRouter();
  const [clickedIndList, setClickedIndList] = useState<number[]>([]);
  const [clickedSNIndList, setClickedSNIndList] = useState<number[]>([]);
  //クリックハンドラー
  const onClickHandler = (ind: number) => {
    if (clickedIndList.length + 10 < maxind) {
      if (!clickedIndList.includes(ind)) {
        setClickedIndList([...clickedIndList, ind]);
      }
      //console.log(clickedIndList.length);
    } else {
      window.alert("No more candidates can be deleted.");
    }
  };
  const onSNClickHandler = (ind: number) => {
    if (clickedIndList.length + 10 < maxind) {
      if (!clickedIndList.includes(ind)) {
        setClickedIndList([...clickedIndList, ind]);
      }
      if (!clickedSNIndList.includes(ind)) {
        setClickedSNIndList([...clickedSNIndList, ind]);
      }
    } else {
      window.alert("No more candidates can be deleted.");
    }
  };
  // 最大候補数を渡す
  const maxind = 15; ///暫定
  return (
    <>
      {rest_cand.map((image, index) => (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
          key={index}
        >
          {/* 最初の候補10個 */}
          <ImageButton
            disableRipple
            key={image.title}
            style={{
              width: 500,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop
              className="MuiImageBackdrop-root"
              style={{
                opacity: clickedIndList.includes(index) ? 0.5 : 0.05,
                backgroundColor: clickedIndList.includes(index)
                  ? "#000000"
                  : "#ffffff",
              }}
            />
            <Image>
              <Typography
                component="span"
                variant="h5"
                color="black"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
              </Typography>
            </Image>
          </ImageButton>
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              backgroundColor:
                clickedIndList.includes(index) &&
                !clickedSNIndList.includes(index)
                  ? "#A88000"
                  : "#ffcc00",
              borderColor:
                clickedIndList.includes(index) &&
                !clickedSNIndList.includes(index)
                  ? "#A88000"
                  : "#ffcc00",
            }}
            onClick={() => onClickHandler(index)}
          >
            Nope
          </Button>
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              backgroundColor:
                clickedIndList.includes(index) &&
                clickedSNIndList.includes(index)
                  ? "#A00000"
                  : "#cc0000",
              borderColor:
                clickedIndList.includes(index) &&
                clickedSNIndList.includes(index)
                  ? "#a00000"
                  : "#cc0000",
            }}
            onClick={() => onSNClickHandler(index)}
          >
            Super Nope
          </Button>

          {/* サブの候補10個 */}
          <ImageButton
            disableRipple
            key={sub_rest_cand[index].title}
            style={{
              width: 500,
            }}
          >
            <ImageSrc
              style={{ backgroundImage: `url(${sub_rest_cand[index].url})` }}
            />
            <ImageBackdrop
              className="MuiImageBackdrop-root"
              style={{
                opacity:
                  !clickedIndList.includes(index + 10) &&
                  index < clickedIndList.length
                    ? 0.05
                    : 0.5,
                backgroundColor:
                  !clickedIndList.includes(index + 10) &&
                  index < clickedIndList.length
                    ? "#ffffff" //"#00ff00"
                    : "#000000",
              }}
            />
            <Image>
              <Typography
                component="span"
                variant="h5"
                color="black"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {sub_rest_cand[index].title}
              </Typography>
            </Image>
          </ImageButton>
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              backgroundColor:
                clickedIndList.includes(index + 10) &&
                !clickedSNIndList.includes(index + 10)
                  ? "#A88000"
                  : "#ffcc00",
              borderColor:
                clickedIndList.includes(index + 10) &&
                !clickedSNIndList.includes(index + 10)
                  ? "#A88000"
                  : "#ffcc00",
            }}
            onClick={() =>
              index < clickedIndList.length
                ? onClickHandler(index + 10)
                : console.log("out of indx")
            }
          >
            Nope
          </Button>
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              backgroundColor:
                clickedIndList.includes(index + 10) &&
                clickedSNIndList.includes(index + 10)
                  ? "#A00000"
                  : "#cc0000",
              borderColor:
                clickedIndList.includes(index + 10) &&
                clickedSNIndList.includes(index + 10)
                  ? "#a00000"
                  : "#cc0000",
            }}
            onClick={() =>
              index < clickedIndList.length
                ? onSNClickHandler(index + 10)
                : console.log("out of indx")
            }
          >
            Super Nope
          </Button>
        </Box>
      ))}
      <ImageButton
        focusRipple
        key={buttonImg[0].title}
        style={{
          height: 200,
          width: buttonImg[0].width,
        }}
        onClick={() => router.push("/roulette")}
      >
        <ImageSrc
          style={{
            backgroundImage: `url(${buttonImg[0].url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ImageBackdrop
          className="MuiImageBackdrop-root"
          style={{ opacity: 0 }}
        />
        <Image>
          <Typography
            component="span"
            variant="h5"
            color="black"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {""}
          </Typography>
        </Image>
      </ImageButton>
    </>
  );
}
