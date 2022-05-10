import { useState } from "react";
import FoodItem from "../components/foodItem";


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
  const [lightedItem, setLightedItem] = useState<number>(0);

  /*
  //0~10までのランダムな数を返す
  let count = 0;
  function randnum(){
    const randnum = Math.floor( Math.random() * 10 );
    count = randnum
    setLightedItem(count)
  }
  setInterval(randnum, 1000)
*/

  return (
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
    </div>
  );
};

export default Roulette;

/*
npm start
git add
git commit -m"message"
git push
*/