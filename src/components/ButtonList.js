import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Music",
  "News",
  "Health",
  "Gaming",
  "Technology",
  "Cooking",
  "Cartoon",
  "kids",
  // "Lifestyle",
  // "Cricket",
];

function ButtonList() {
  return (
    <div className="flex items-center my-2 ms-2">
       {
        List.map(btn => <Button key={btn} name={btn} />)
       }
    </div>
  );
}

export default ButtonList;
