import { data } from "./utils/data";
import background from "./assets/bg.jpg";
import Card from "./molecules/Card";
import { useEffect, useState } from "react";
import Artboard from "./molecules/Artboard";
function App() {
  const [cards, setCards] = useState(data.concat(data));
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [turn, setTurn] = useState(0);

  const sufleCards = () => {
    const sufleCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setCards(sufleCards);
    setTurn(turn + 1);
    setChoiseOne(null);
    setChoiseTwo(null);
  };

  const handleClick = (card) => {
    if (choiseOne && choiseTwo) {
      resetTurn();
    } else {
      choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
    }
  };

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
  };

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
      }
    }
  }, [choiseOne, choiseTwo]);

  useEffect(() => {
    sufleCards();
  }, []);

  return (
    <div
      className={`py-3 w-full min-h-screen bg-[url(https://wallpapercave.com/wp/wp6967015.jpg)] bg-cover bg-bottom flex gap-3 flex-col justify-center items-center  `}
    >
      <div className="mx-auto  flex flex-col gap-3 w-max">
        <h1 className="text-4xl font-bold text-white">PLAYING CARD</h1>
        <button
          className="px-4 py-1 font-semibold bg-pink-600 mx-auto rounded-sm text-white"
          onClick={sufleCards}
        >
          New Game
        </button>
      </div>
      <Artboard
        cards={cards}
        choiseOne={choiseOne}
        choiseTwo={choiseTwo}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
