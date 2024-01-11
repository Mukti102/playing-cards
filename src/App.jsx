import { data } from "./utils/data";
import { useEffect, useRef, useState } from "react";
import Artboard from "./molecules/Artboard";
import Header from "./molecules/Header";
import mp3 from "../src/assets/backsound.mp3";
import FormatStopwatch from "./atom/FormatStopwatch";
function App() {
  const [isRunning, setIsrunning] = useState(false);
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [cards, setCards] = useState(data.concat(data));
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const audio = useRef(new Audio(mp3));

  // mengacak kartu
  const sufleCards = () => {
    const sufleCards = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setCards(sufleCards);
    setChoiseOne(null);
    setChoiseTwo(null);
    setIsrunning(false);
    setMinute(0);
    setHour(0);
    setTime(0);
  };

  // funtion memulai permainan
  const handleClick = (card) => {
    if (isRunning) {
      if (choiseOne && choiseTwo) {
        resetTurn();
      } else {
        choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
      }
    } else {
      return;
    }
  };

  // merest
  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
  };

  // check dua kartu
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

  // audio putar
  useEffect(() => {
    sufleCards();
    audio.current.play();
  }, []);

  // stopwatch start
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((preveTime) => preveTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // mulai permainan
  const startGame = () => {
    setIsrunning(true);
  };

  // mengecek semua kartu terbuka ?
  const check = cards.some((item) => item.match === false);
  if (check) {
    console.log("kalah");
  } else {
    alert("menang");
    sufleCards();
  }

  // format
  const format = (detik, menit, jam) => {
    let second = detik;
    let minute = menit;
    let hour = jam;
    if (second === 60) {
      setMinute((prev) => prev + 1);
      setTime(0);
    } else if (minute === 60) {
      setHour((prev) => prev + 1);
      minute = 0;
    }
    return `${pad(second)} : ${pad(minute)} : ${pad(hour)}`;
  };

  const pad = (value) => {
    const res = value < 10 ? "0" + value : value;
    return res;
  };

  return (
    <div
      className={`py-2 w-full h-full bg-[url(https://wallpapercave.com/wp/wp6967015.jpg)] bg-black bg-cover bg-bottom flex gap-3 flex-col justify-center items-center `}
    >
      <Header sufleCards={sufleCards} startGame={startGame} />
      <FormatStopwatch
        format={format}
        time={time}
        minute={minute}
        hour={hour}
      />
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
