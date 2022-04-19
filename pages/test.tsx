import { useState } from "react";
import FoodItem from "../components/foodItem";

const Test = () => {

    function randnum() {
        const randnum = Math.floor(Math.random() * 10);
        let count = randnum
    }

    setInterval(randnum, 500)

}

export default Test;