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
    <div className="flex flex-row">
      <FoodItem storeName={"あくた川"} />;
    </div>
  );
};

export default Roulette;
