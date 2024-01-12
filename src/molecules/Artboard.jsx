import React from "react";
import Card from "./Card";
function Artboard({ cards, choiseOne, choiseTwo, handleClick }) {
  return (
    <div className="flex flex-wrap  md:gap-3 gap-2 md:w-[750px]  md:h-[500px] w-[300px] h-max justify-start px-1 ">
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
