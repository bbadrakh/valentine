"use client";
import { useState, useRef } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const yesButtonRef = useRef(null);

  const handleNoClick = () => {
    const buttonWidth = 100; // Approximate button width
    const buttonHeight = 40; // Approximate button height
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setPosition({ x: newX, y: newY });
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Итгэлтэй байна уу?",
      "Үнэхээр итгэлтэй байна уу?",
      "Дахиад нэг бодчих л доо",
      "Тийм гэж хэлэх сүүлийн боломж!",
      "Нээрэнгээсээ үгүй гэж үү?",
      "Дараа нь харамсаад байв аа!",
      "Дахиад нэг бодоод үз л дээ",
      "Тийм итгэлтэй байна уу?",
      "Энэрэнгүй байлдаа!",
      "Битгийлдээ",
      "Зүрхээ сонсооч!",
      "Дахин нэг бодооч!",
      "Нээрээ юу?",
      "Чи намайг гомдоож байна шүү 💔😭",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16 px-4">
      {yesPressed ? (
        <>
          <img className="max-w-full h-auto" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Celebration" />
          <div className="text-4xl font-bold my-4">Баярлалаа хайрт минь💖</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] max-w-full h-auto"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Valentine"
          />
          <h1 className="text-4xl my-4 text-center">Миний валентине болох уу? Хайрт минь 🥰</h1>
          <div className="flex justify-center items-center space-x-4">
            <button
              ref={yesButtonRef}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-2xl"
              onClick={() => setYesPressed(true)}
            >
              Тийм
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-all duration-300 text-2xl"
              style={
                noCount > 0
                  ? {
                      position: "fixed",
                      left: `${position.x}px`,
                      top: `${position.y}px`,
                      transition: "all 0.3s ease",
                    }
                  : {}
              }
            >
              {noCount === 0 ? "Үгүй" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <h1 className="fixed bottom-0 left-0 text-2xl font-bold ">Made especially for Tergel by Javkhlan</h1>
    </div>
  );
}
