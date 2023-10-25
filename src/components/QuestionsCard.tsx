import { useState } from "react";
import QuestionExample from "./QuestionExample";

const QuestionsCard = () => {
  const [cardHeight, setCardHeight] = useState<number>(150);

  function expandCard() {
    if (cardHeight === 150) setCardHeight(410);
    else setCardHeight(150);
  }
  return (
    <>
      <div className="meet-container">
        <div className="meet-card" style={{ height: `${cardHeight}px` }}>
          <p className="title">Questions for communication</p>
          <p className="ru-ro-txt">
            Вопросы для общения <br />
            Întrebări pentru comunicare
          </p>
          {cardHeight === 150 ? (
            <p className="see-more" onClick={expandCard}>
              see more
            </p>
          ) : (
            <div></div>
          )}

          {cardHeight === 410 ? (
            <div className="meet-questions-container">
              <QuestionExample question="Как тебя зовут? Cum te numești?" />
              <QuestionExample question="Откуда ты? De unde ești?" />
              <QuestionExample question="У тебя есть хобби? Ai un hobby?" />
              <QuestionExample question="Ты посещаешь церковь? Mergi la biserică?" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionsCard;
