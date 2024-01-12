import React, { useEffect } from "react";
import cover from "../assets/cover.jpeg";

function Card({ item, onClick, fliped }) {
  return (
    <div
      className={` realtive md:light lightMobile cursor-pointer group: relative md:w-[90px] md:h-[140px] w-[50px] h-[70px]`}
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
