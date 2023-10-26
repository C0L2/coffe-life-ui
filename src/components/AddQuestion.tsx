import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { askQuestions } from "../api";

import "react-toastify/dist/ReactToastify.css";

const AddQuestion = () => {
  const [text, setText] = useState("Ask a question");
  const [cardHeight, setCardHeight] = useState("auto");
  const navigate = useNavigate();
  const handleTextChange = (event: any) => {
    setText(event.target.value);
    setCardHeight("auto");
  };

  const handelDeleteText = (event: any) => {
    event.preventDefault();
    setText("Ask a question");
  };

  const handleTextAreaResize = () => {
    const textArea = document.getElementById("textarea");
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
      setCardHeight(`${textArea.scrollHeight + 60}px`);
    }
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    askQuestions(text).then((res) => {
      console.log(res);
      setText("Ask a question");
      toast.success("Successfully submited!");
      setTimeout(() => {
        navigate("/menu");
      }, 1700);
    });
  }

  return (
    <>
      <div className="questions">
        <div className="question-card" style={{ height: cardHeight }}>
          <div onClick={handelDeleteText} className="question-numbers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M8.75 26.25C8.0625 26.25 7.47396 26.0052 6.98438 25.5156C6.49479 25.026 6.25 24.4375 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V23.75C23.75 24.4375 23.5052 25.026 23.0156 25.5156C22.526 26.0052 21.9375 26.25 21.25 26.25H8.75ZM21.25 7.5H8.75V23.75H21.25V7.5ZM11.25 21.25H13.75V10H11.25V21.25ZM16.25 21.25H18.75V10H16.25V21.25Z"
                fill="#DC7755"
              />
            </svg>
          </div>
          <textarea
            id="textarea"
            value={text}
            onChange={handleTextChange}
            onInput={handleTextAreaResize}
            onFocus={() => setText("")}
            style={{
              minHeight: "50px",
              background: "transparent",
              border: "none",
              fontSize: "16px",
              opacity: "75%",
              marginTop: "10px",
              marginLeft: "10px",
              resize: "none",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="join-bnt-container">
          <button className="join-btn" onClick={handleSubmit}>
            SEND
          </button>
          <ToastContainer autoClose={500} />
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
