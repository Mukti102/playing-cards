import React, { useEffect } from "react";
import cover from "../assets/cover.jpeg";

function Card({ item, onClick, fliped }) {
  return (
    <div
      className={` realtive light cursor-pointer group: relative w-[90px] h-[140px]`}
    >
      <div>
        <img
          src={item.src}
          alt="photo"
          className={`outline-none w-full absolute border-[1.2px]   h-full object-cover ${
            fliped ? "flipedCard" : null
          } transition-all  ease-in`}
        />
        <img
          onClick={() => onClick(item)}
          src={cover}
          alt="photo"
          className={`${
            fliped ? "fliped" : null
          } w-full h-full   outline-none object-cover  absolute transition-all border-[1.2px]  ease-out`}
        />
      </div>
    </div>
  );
}

export default Card;
