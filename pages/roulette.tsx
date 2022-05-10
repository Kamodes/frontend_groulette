import { ReactChild, ReactFragment, SetStateAction, useEffect, useState } from "react";
import FoodItem from "../components/foodItem";


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
  const [lightedItem, setLightedItem] = useState<number>(0);

  // const onClickButton = () => {
  //   setLightedItem(lightedItem + 1);
  // }

  useEffect(() => {
    for (var i = 0; i < 30; i++) {
      const randnum = Math.floor(Math.random() * 10);
      arr1.push(randnum)
    }
  }, [])

  useEffect(() => {
    setLightedItem(arr1[0]);
  }, [])

  console.log("arr1:" + arr1)
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


/*
  let count = 0;
  function randnum(){
    const randnum = Math.floor( Math.random() * 10 );
    count = randnum
    setLightedItem(count)
  }
*/
  // setInterval(randnum, 1000)

  //<p style={{ fontSize: "40px", marginLeft: "20px"}}>arr1[count]: {arr1[count]}</p>