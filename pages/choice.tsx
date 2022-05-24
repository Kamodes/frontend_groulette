import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// 画像の配置
// %で幅の割合を指定
const images1 = [
  {
    url: "/img/food_gyudon.png",
    title: "Gyudon",
    width: "25%",
  },
  {
    url: "/img/food_hamburger_cheese.png",
    title: "Hamburger",
    width: "25%",
  },
  {
    url: "/img/food_ramen_iekei.png",
    title: "Ramen",
    width: "25%",
  },
  {
    url: "/img/food_spaghetti_vongole_bianco.png",
    title: "Pasta",
    width: "25%",
  },
];

const images2 = [
  {
    url: "img/food_subuta.png",
    title: "Chinese",
    width: "25%",
  },
  {
    url: "img/teisyoku_haizen.png",
    title: "Japanese",
    width: "25%",
  },
  {
    url: "img/vegetable_curry.png",
    title: "Curry",
    width: "25%",
  },
  {
    url: "img/nomikai_salaryman.png",
    title: "Others",
    width: "25%",
  },
];

const images3 = [
  {
    url: "img/mode_A.jpg",
    title: "GOD",
    width: "33%",
  },
  {
    url: "img/mode_B.jpg",
    title: "NORMAL",
    width: "33%",
  },
  {
    url: "img/mode_C.jpg",
    title: " DEVIL",
    width: "33%",
  },
];

// イメージつきボタンの設定
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  disabled: "false",
  position: "relative",
  height: 250,
  // あんまりよくわかってない設定
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    // カーソルをホバーした時の明度(1:真っ黒になる)
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    // カーソルをホバーした時の文字の下のバーの透明度(0:消える/1:そのまま残る)
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    // カーソルをホバーした時の文字枠の太さ
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageModeButton = styled(ButtonBase)(({ theme }) => ({
  disabled: "false",
  position: "relative",
  height: 250,
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
  backgroundSize: "cover", // 表示サイズに合わせて拡大
  backgroundPosition: "center 40%", // 写真の位置(0:上合わせ/100:下合わせ)
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
  backgroundColor: theme.palette.common.black,
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
  const [clickedList, setClickedList] = useState<string[]>([]);
  const [clickedIndList, setClickedIndList] = useState<number[]>([]);
  //クリックハンドラー
  const onClickHandler = (ind: number, key: string) => {
    if (!clickedIndList.includes(ind)) {
      setClickedList([...clickedList, key]);
      setClickedIndList([...clickedIndList, ind]);
    } else {
      setClickedList(clickedList.filter((item) => item.match(key) == null));
      setClickedIndList(clickedIndList.filter((item) => item != ind));
    }
    var printStr = "";
    for (const element of clickedList) {
      printStr = printStr + "- " + element + "\n";
    }
    {
      /*window.alert("Now selected genre: \n" + printStr); */
    }
  };
  const onModeSelect = (mode: string) => {
    {
      /*
    var url_str = "/backend";
    clickedList.forEach(function (value, index) {
      url_str = url_str + "?genre" + index + "=" + value;
    });
    url_str = url_str + "?mode=" + mode;
    axios
      .get(url_str)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    */
    }
    router.push("/list");
  };
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {/* 上の段のImageButton */}
      {images1.map((image, index) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => onClickHandler(index, image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop
            className="MuiImageBackdrop-root"
            style={{
              opacity: clickedIndList.includes(index) ? 0.15 : 0.4,
            }}
          />
          <Image>
            <Typography
              component="span"
              variant="h4"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}

      {images2.map((image, index) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => onClickHandler(index + 4, image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop
            className="MuiImageBackdrop-root"
            style={{
              opacity: clickedIndList.includes(index + 4) ? 0.1 : 0.4,
            }}
          />
          <Image>
            <Typography
              component="span"
              variant="h4"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}

      {/* モード選択 */}
      {images3.map((image) => (
        <ImageModeButton
          disableRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => onModeSelect(image.title)}
        >
          <ImageSrc
            className="MuiImageSrc-root"
            style={{
              backgroundImage: `url(${image.url})`,
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
              variant="h4"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {""}
              <ImageMarked
                className="MuiImageMarked-root"
                style={{ opacity: 0 }}
              />
            </Typography>
          </Image>
        </ImageModeButton>
      ))}
    </Box>
  );
}
