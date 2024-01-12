import React from "react";

function Header({ sufleCards, startGame }) {
  return (
    <>
      <div className="mx-auto flex flex-col md:gap-3 w-max">
        <h1 className="md:text-5xl  text-shadow  text-3xl text-pink-300 font-bold googleFont">
          PLAYING CARD
        </h1>
      </div>
      <div className="flex gap-2">
        <button
          className="md:px-4 px-3 h-max py-1 md:py-1  active:scale-95 font-semibold bg-pink-600 mx-auto rounded-sm md:text-base text-[13px] text-white"
          onClick={sufleCards}
        >
          New Game
        </button>
        <button
          className="md:px-4 px-3 h-max py-1 md:py-1  active:scale-95 font-semibold bg-green-600 mx-auto rounded-sm md:text-base text-[13px] text-white"
          onClick={startGame}
        >
          Mulai Game
        </button>
      </div>
    </>
  );
}

export default Header;
