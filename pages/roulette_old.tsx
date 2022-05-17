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