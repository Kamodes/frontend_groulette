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
  return (
    <div>
      <div className="flex flex-wrap">
        {foodList.map((value, index) => {
          return <FoodItem key={index} storeName={value} />;
        })}
      </div>
    </div>
  );
};

export default Roulette;
