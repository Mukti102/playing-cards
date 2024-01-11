import React from "react";
import Card from "./Card";
function Artboard({ cards, choiseOne, choiseTwo, handleClick }) {
  return (
    <div className="flex flex-wrap  gap-3 w-[600px]  h-[500px] bg-red ">
      {cards?.map((item, index) => {
        return (
          <Card
            item={item}
            key={index}
            fliped={item == choiseOne || item == choiseTwo || item.match}
            onClick={handleClick}
          />
        );
      })}
      ;
    </div>
  );
}

export default Artboard;
