import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useAuthContext } from "../authContext";
import { db } from "../firebase";

const imageAssign = (n: string, j: number) => {
  if (j == 4) {
    var img = {
      url: "/img/list_icon/japanese.png",
      title: n,
      width: "40%",
    };
  } else if (j == 3) {
    var img = {
      url: "/img/list_icon/fastfood.png",
      title: n,
      width: "40%",
    };
  } else if (j == 2) {
    var img = {
      url: "/img/list_icon/ramen.png",
      title: n,
      width: "40%",
    };
  } else if (j == 5) {
    var img = {
      url: "/img/list_icon/youshoku.png",
      title: n,
      width: "40%",
    };
  } else if (j == 0) {
    var img = {
      url: "img/list_icon/chinese.png",
      title: n,
      width: "40%",
    };
  } else if (j == 1) {
    var img = {
      url: "img/list_icon/yakiniku.png",
      title: n,
      width: "40%",
    };
  } else if (j == 6) {
    var img = {
      url: "img/list_icon/izakaya.png",
      title: n,
      width: "40%",
    };
  } else if (j == 7) {
    var img = {
      url: "img/list_icon/others.png",
      title: n,
      width: "40%",
    };
  } else {
    var img = {
      url: "img/list_icon/none.png",
      title: n,
      width: "40%",
    };
  }
  return img;
};

const buttonImg = [
  { url: "img/rouletteStart.png", title: "Start", width: "20%" },
];

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
  const { restaurantList, setRestaurantList } = useAuthContext();
  const router = useRouter();
  const [clickedIndList, setClickedIndList] = useState<number[]>([]);
  const [clickedSNIndList, setClickedSNIndList] = useState<number[]>([]);
  const [SNList, setSNList] = useState<string[]>([]);
  const [SNNameList, setSNNameList] = useState<string[]>([]);
  const { user } = useAuthContext();

  // BackEndからお店のリストとジャンルを受け取る
  // 以下テスト用の暫定コード

  const { backendRes, setBackendRes } = useAuthContext();

  var maxind = 20;

  // 最大候補数を渡す
  if (backendRes.length > 20) {
    maxind = 20;
  } else {
    maxind = backendRes.length;
  }

  const candList = backendRes.slice(0, 10);
  /*[
  // [id,name,genre]
  ["aaaa0", "すき家", 4],
  ["aaaa1", "マクドナルド", 3],
  ["aaaa2", "吉野家", 4],
  ["aaaa3", "あくた川", 2],
  ["aaaa4", "キラメキ☆JAPAN", 2],
  ["aaaa5", "ジェームズキッチン", 5],
  ["aaaa6", "チャンピオンカレー", 5],
  ["aaaa7", "凛屋", 5],
  ["aaaa8", "火楓源", 0],
  ["aaaa9", "ケンタッキー", 3],
]*/

  const subcandList = backendRes.slice(10, maxind + 1);
  /*[
    ["aaaaa", "ラジュ", 5],
    ["aaaab", "サコブーン", 4],
    ["aaaac", "鳥貴族", 6],
    ["aaaad", "ハイライト", 4],
    ["aaaae", "松之助", 4],
    ["aaaaf", "里乃屋", 1],
    ["aaab0", "旅の音", 7],
    [""],
    [""],
    [""],
  ]*/

  var rest_cand = [];
  candList.map((cand, index) =>
    rest_cand.push(imageAssign(cand.name, cand.genre))
  );

  var sub_rest_cand = [];
  subcandList.map((cand, index) =>
    sub_rest_cand.push(imageAssign(cand.name, cand.genre))
  );

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
        if (ind < 10) {
          setSNList([...SNList, candList[ind][0]]);
          setSNNameList([...SNNameList, candList[ind][1]]);
        } else {
          setSNList([...SNList, subcandList[ind - 10][0]]);
          setSNNameList([...SNNameList, subcandList[ind - 10][1]]);
        }
      }
    } else {
      window.alert("No more candidates can be deleted.");
    }
  };

  // 次回検討
  const startHandler = () => {
    var tempList = [];
    if (user) {
      for (var j = 0; j < SNList.length; j++) {
        db.collection("user").add({
          email: user.email,
          resID: SNList[j],
          resname: SNNameList[j],
        });
      }
    }

    for (var i = 0; i < 10 + clickedIndList.length; i++) {
      if (!clickedIndList.includes(i)) {
        console.log(i);
        if (i < 10) {
          //console.log(candList[i][1]);
          tempList.push([candList[i].place_id, candList[i].name]);
          //console.log(tempList);
          //setRestaurantList([...restaurantList, candList[i][0]]);
        } else {
          tempList.push([
            subcandList[i - 10].place_id,
            subcandList[i - 10].name,
          ]);
          //console.log(tempList);
          //setRestaurantList([...restaurantList, subcandList[i - 10][0]]);
        }
      }
    }

    setRestaurantList(tempList);
    console.log(SNList);
    //console.log(restaurantList);
    //console.log(restaurantIDList);
    router.push("/roulette");
  };
  return (
    <>
      {console.log(backendRes)}
      {console.log(rest_cand)}
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
        onClick={() => startHandler()}
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
