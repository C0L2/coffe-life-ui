import { QuestionProp } from "../interfaces/QuestionProp";

const QuestionExample: React.FC<QuestionProp> = (props) => {
  return (
    <div className="meet-question-card ">
      <div className="q">{props.question}</div>
    </div>
  );
};

export default QuestionExample;
