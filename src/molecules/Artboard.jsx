import React from "react";
import Card from "./Card";
function Artboard({ cards, choiseOne, choiseTwo, handleClick }) {
  console.log("artboard");
  return (
    <div className="w-max  pt-9 px-10 bg-white bg-opacity-25 rounded-md backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="flex flex-wrap  gap-2 w-[650px]  h-max bg-red ">
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
    </div>
  );
}

export default Artboard;
