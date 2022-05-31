/* eslint-disable react-hooks/exhaustive-deps */
import { ContactSupportOutlined } from "@material-ui/icons";
import {
  ReactChild,
  ReactFragment,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from "react";
import FoodItem from "../components/foodItem";
import Router from "next/router";
import { useAuthContext } from "../authContext";

const arr1 = [0];

const Roulette = () => {
  const [foodList, setFoodList] = useState<string[]>([
    "あくた川",
    "ハイライト",
    "キラメキ",
    "中央食堂",
    "マハカレー",
    "伝丸",
    "たくみ",
    "鳥貴族",
    "さわやか",
    "カフェテリアルネ",
  ]);

  //ルーレット用の配列
  useEffect(() => {
    for (var i = 0; i < 300; i++) {
      const randnum = Math.floor(Math.random() * 10);
      arr1.push(randnum);
    }
  }, []);

  var index = 0;
  const lightedItemChange = () => {
    index += 1;
    setLightedItem(arr1[index]);
  };

  const [lightedItem, setLightedItem] = useState<number>(-1);
  const [buttonCount, setButtonCount] = useState<number>(0);

  //初回レンダリング判定
  const isFirstRender = useRef(false);
  var isRoulette: boolean;
  useEffect(() => {
    isFirstRender.current = true;
    isRoulette = false;
  }, []);

  //ルーレット
  const spin = () => {
    var setIV1 = setInterval(lightedItemChange, 100);
    const stopIV1 = () => {
      clearInterval(setIV1);
    };
    var setIV2 = setInterval(lightedItemChange, 300);
    const stopIV2 = () => {
      clearInterval(setIV2);
    };
    var setIV3 = setInterval(lightedItemChange, 500);
    const stopIV3 = () => {
      clearInterval(setIV3);
    };
    var setIV4 = setInterval(lightedItemChange, 1000);
    const stopIV4 = () => {
      clearInterval(setIV4);
    };
    const setIV5 = () => {
      setLightedItem(arr1[200]);
      setButtonCount(buttonCount + 1);
      isRoulette = true;
    };
    setTimeout(stopIV1, 3000);
    setTimeout(setIV2, 3000);
    setTimeout(stopIV2, 6000);
    setTimeout(setIV3, 6000);
    setTimeout(stopIV3, 8000);
    setTimeout(setIV4, 8000);
    setTimeout(stopIV4, 9000);
    setTimeout(setIV5, 10000);
    setTimeout(restrauntShow, 10700);
  };

  // ボタン押下時のみにルーレットスタート
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (buttonCount == 1) {
        spin();
      } else if (buttonCount > 2) {
        alert("ルーレットは1回までです！");
      }
    }
  }, [buttonCount]);

  const restrauntShow = () => {
    alert("お店は「" + foodList[arr1[200]] + "」に決定しました！");
  };

  const handler = (path: string) => {
    Router.push({
      pathname: path,
      query: { restrauntName: foodList[arr1[200]] },
    });
  };

  const restrauntDisplay = () => {
    if (isRoulette || buttonCount >= 2) {
      handler("/restrauntInfo");
    } else {
      alert("先にルーレットを回してください！");
    }
  };

  const { restaurantList, setRestaurantList } = useAuthContext();

  return (
    <>
      {console.log("now selected: " + restaurantList)}
      <div className="my-0">
        <div className="flex flex-wrap">
          {foodList.map((value, index) => {
            return (
              <FoodItem
                key={index}
                storeName={value}
                isLighted={index === lightedItem}
              />
            );
          })}
        </div>
        <div>
          <button
            onClick={() => setButtonCount(buttonCount + 1)}
            className="mx-8 my-3 flex justify-center bg-red-500 hover:bg-red-700 text-white text-4xl font-bold py-2 px-4 border border-red-700 rounded"
          >
            Groulette Start!
          </button>
          <button
            onClick={() => restrauntDisplay()}
            className="mx-8 my-5 flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            レストランの情報はこちら
          </button>
        </div>
      </div>
    </>
  );
};

export default Roulette;

//githubのコマンド

/*
git checkout -b "branch-name" //ブランチを作る
git checkout branch-name
*/

/*
git add .
git commit -m "message"
git push
*/

/*
git checkout main
git pull
yarn install
*/
