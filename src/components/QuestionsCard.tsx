import { useState } from "react";
import { ExpandableContentProps } from "../types";
import QuestionExample from "./QuestionExample";

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  initialHeight,
  expandedHeight,
}) => {
  const [contentHeight, setContentHeight] = useState<number>(initialHeight);

  function toggleHeight() {
    setContentHeight((prevHeight) =>
      prevHeight === initialHeight ? expandedHeight : initialHeight
    );
  }

  return (
    <div
      className="meet-questions-card"
      style={{ height: `${contentHeight}px` }}
    >
      <h3 className="title">Questions for communication</h3>
      <h4 className="ru-ro-txt">
        Вопросы для общения <br />
        Întrebări pentru comunicare
      </h4>
      <p className="see-more" onClick={toggleHeight}>
        see {contentHeight === initialHeight ? "more" : "less"}
      </p>

      {contentHeight === 410 ? (
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
  );
};

const QuestionsCard = () => {
  return (
    <>
      <div className="meet-container">
        <div className="meet-card">
          <h3 className="title">Meeting place</h3>
          <h4 className="ru-ro-txt">
            Найди свою цифру на территории церкви <br />
          </h4>
          <h4 className="ru-ro-txt" style={{ marginTop: "82px" }}>
            Găsiți persoanele cu numărul dvs. pe teritoriul bisericii
          </h4>
        </div>

        <ExpandableContent initialHeight={180} expandedHeight={410} />
      </div>
    </>
  );
};

export default QuestionsCard;
