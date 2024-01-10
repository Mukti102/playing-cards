import React, { useEffect } from "react";
import cover from "../assets/cover.jpeg";

function Card({ item, onClick, fliped }) {
  console.log("card");
  return (
    <div className=" cursor-pointer group: relative w-[100px] h-[150px]">
      <div>
        <img
          src={item.src}
          alt="photo"
          className={`w-full absolute border-[1.2px]   h-full object-cover ${
            fliped ? "flipedCard" : null
          } transition-all  ease-in`}
        />
        <img
          onClick={() => onClick(item)}
          src={cover}
          alt="photo"
          className={`${
            fliped ? "fliped" : null
          } w-full h-full  object-cover  absolute transition-all border-[1.2px]  ease-out`}
        />
      </div>
    </div>
  );
}

export default Card;
