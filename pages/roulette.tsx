import { ReactChild, ReactFragment, SetStateAction, useEffect, useState } from "react";
import FoodItem from "../components/foodItem";

const arr1 = [0];
var index = 0
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

  // const onClickButton = () => {
  //   setLightedItem(lightedItem + 1);
  // }

  useEffect(() => {
    for (var i = 0; i < 3000; i++) {
      const randnum = Math.floor(Math.random() * 10);
      arr1.push(randnum)
    }
  }, [])

  const lightedItemChange = () => {
    index += 1
    setLightedItem(arr1[index]);
  }

  useEffect(() => {
    setInterval(lightedItemChange, 100)
  }, [])

  /*
  var intervalID = setInterval(lightedItemChange, 1000)
  clearInterval(intervalID)
  */

  console.log("lightedItem:" + lightedItem)

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
      {/* {/* <button onClick={onClickButton}>Roulette Start!</button> */}
    </div>
  );
};

export default Roulette;


  //<p style={{ fontSize: "40px", marginLeft: "20px"}}>arr1[count]: {arr1[count]}</p>

/*
git add .
git commit -m "message"
git push
*/