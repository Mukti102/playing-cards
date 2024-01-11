import React from "react";

function Header({ sufleCards, startGame }) {
  return (
    <div className="mx-auto   flex flex-col gap-3 w-max">
      <h1 className="text-5xl text-pink-300 font-bold googleFont">
        PLAYING CARD
      </h1>
      <div className="flex gap-2">
        <button
          className="px-4 py-1 active:scale-95 font-semibold bg-pink-600 mx-auto rounded-sm text-white"
          onClick={sufleCards}
        >
          New Game
        </button>
        <button
          className="px-4 py-1 active:scale-95 font-semibold bg-green-600 mx-auto rounded-sm text-white"
          onClick={startGame}
        >
          Mulai Game
        </button>
      </div>
    </div>
  );
}

export default Header;
