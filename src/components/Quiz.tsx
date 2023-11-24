import { useNavigate } from "react-router-dom";
// import { voteSurvey } from "../api";
import { useState, useEffect } from "react";
import { useVoteSurveyMutation } from "../api";

const Quiz = () => {
  const navigate = useNavigate();
  const [voted, setVoted] = useState(!!localStorage.getItem("voted"));
  const [voteSurvey, { isSuccess }] = useVoteSurveyMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/qz-response");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (localStorage.getItem("voted")) {
      setVoted(true);
    }
  }, []);

  function voteYes(event: any) {
    event.preventDefault();
    const is_pro: boolean = true;
    localStorage.setItem("voted", "yes");
    setVoted(true);
    voteSurvey({ is_pro, question: 1 });
  }

  function voteNo(event: any) {
    event.preventDefault();
    const is_pro: boolean = false;
    localStorage.setItem("voted", "no");
    setVoted(true);
    voteSurvey({ is_pro, question: 1 });
  }

  return (
    <div className="map-container" style={{ marginTop: "60px" }}>
      <svg
        style={{ position: "absolute", top: "138px", zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
      >
        <circle cx="35" cy="35" r="35" fill="#DC7755" />
        <path
          d="M53.8957 42.7269C53.8106 42.5869 53.6901 42.4702 53.5456 42.388C52.8041 41.9937 52.2178 42.6961 52.2162 42.6961C52.1006 42.8394 49.4467 46.0143 43.1596 45.2394C40.2565 44.7081 37.5537 43.4278 35.3341 41.5324C33.1145 39.6371 31.4598 37.1965 30.5432 34.4662C29.6265 31.7358 29.4818 28.8161 30.1239 26.0126C30.7661 23.2092 32.1716 20.6251 34.1933 18.531C34.4156 18.2438 34.6786 17.9886 34.9744 17.7731C35.722 17.2272 36.6428 16.9532 37.5766 16.9988C38.5104 17.0444 39.3982 17.4067 40.0858 18.0226C40.7734 18.6386 41.2173 19.4693 41.3403 20.3705C41.4634 21.2716 41.2577 22.1861 40.7592 22.9552C40.6291 23.1556 40.48 23.3439 40.314 23.5174C39.572 24.5634 39.1384 25.7868 39.0602 27.0551C38.9821 28.3234 39.2623 29.5884 39.8705 30.713C40.4788 31.8376 41.3918 32.779 42.5109 33.4352C43.63 34.0915 44.9124 34.4376 46.2193 34.4361C47.5262 34.4345 48.8077 34.0854 49.9252 33.4265C51.0426 32.7676 51.9534 31.8241 52.5588 30.6981C53.1642 29.572 53.4413 28.3064 53.36 27.0383C53.2786 25.7701 52.842 24.5478 52.0974 23.5036C51.8994 23.2509 51.695 23.0014 51.4842 22.7595C49.7348 20.735 47.5688 19.089 45.1258 17.9272C42.6827 16.7654 40.0165 16.1137 37.2988 16.0139C37.0453 16.0046 36.7918 16 36.5367 16C33.0779 16.001 29.6813 16.8945 26.6938 18.5892C23.7063 20.2839 21.235 22.7192 19.5322 25.6462C17.8295 28.5733 16.9562 31.8873 17.0017 35.2499C17.0472 38.6124 18.0098 41.9029 19.7911 44.7855C21.5725 47.668 24.1089 50.0392 27.1411 51.657C30.1734 53.2747 33.593 54.081 37.0506 53.9936C40.5083 53.9061 43.8801 52.928 46.8218 51.1592C49.7634 49.3903 52.1695 46.8941 53.7943 43.9254L53.8466 43.8299L53.8783 43.7606C53.8926 43.7282 53.9053 43.6959 53.9163 43.6651C54.0346 43.3616 54.0272 43.0253 53.8957 42.7269Z"
          fill="white"
        />
      </svg>
      <div className="quiz">
        <p
          style={{ marginLeft: "20px", marginTop: "45px", marginRight: "10px" }}
        >
          Может ли плач быть полезным в твоей жизни?
        </p>

        <div style={{ paddingTop: "5px", height: "60px" }}>
          <button
            style={{ right: "30px" }}
            className={`quizz-button ${voted ? "disabled" : ""}`}
            onClick={voteNo}
            disabled={voted}
          >
            Нет
          </button>
          <button
            style={{ left: "30px" }}
            className={`quizz-button ${voted ? "disabled" : ""}`}
            onClick={voteYes}
            disabled={voted}
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
