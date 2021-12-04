import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let foodDictionary = {
    "🥬": "Leafy green",
    "🧄": "Garlic",
    "🥫": "Canned Food",
    "🥩": "Cut of Meat",
    "🥯": "Bagel",
    "🥥": "Coconut",
    "🥦": "Broccoli",
    "🥨": "Pretzel",
    "🧆": "Falafel",
    "🥧": "Pie",
    "🥪": "Sandwich",
    "🍅": "Tomato",
    "🍆": "Eggplant",
    "🍉": "Watermelon",
    "🍌": "Banana",
    "🍋": "Lemon",
    "🍍": "Pineapple",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍑": "Peach",
    "🍒": "Cherry",
    "🍕": "Pizza",
    "🍔": "Burger",
    "🍞": "Bread",
    "🍟": "French Fries",
    "🍩": "Doughnut",
    "🍰": "Shortcake",
    "🧀": "Cheese Wedge",
    "🍿": "Popcorn"
  };

  let [foodName, setFoodName] = useState("");

  let foodInputHandler = (event) => {
    let foodEmoji = event.target.value;

    if (foodEmoji in foodDictionary) {
      foodName = foodDictionary[foodEmoji];
    } else if (foodEmoji === "") {
      foodName = "";
    } else {
      foodName = "Sorry! that could not be recognised";
    }
    setFoodName(foodName);
  };

  let foodClickHandler = (foodItem) => {
    foodName = foodDictionary[foodItem];
    setFoodName(foodName);
    console.log(foodItem, foodName);
  };

  return (
    <div className="App">
      <h1>Food Emoji Identifier</h1>
      <h4>Enter any food image, or select from those below.</h4>
      <input onChange={foodInputHandler}></input>
      <h2>{foodName}</h2>
      {Object.keys(foodDictionary).map((foodItem) => {
        return (
          <span
            key={foodItem}
            onClick={() => foodClickHandler(foodItem)}
            style={{ cursor: "pointer" }}
          >
            {"  "}
            {foodItem}
            {"  "}
          </span>
        );
      })}
    </div>
  );
}
