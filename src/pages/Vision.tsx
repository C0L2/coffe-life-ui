import { useNavigate } from "react-router-dom"
import VisionCard from "../components/VisionCard"

const Vision = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="q-header">
        <div className="left-element" onClick={() => navigate("/menu")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M14.25 15L20 9.25L18.25 7.5L10.75 15L18.25 22.5L20 20.75L14.25 15Z"
              fill="white"
            />
          </svg>
        </div>
        <p style={{ fontSize: "20px" }}>Coffe & Life Vision</p>
        <div className="right-element" onClick={() => navigate("/menu")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="10"
            viewBox="0 0 25 10"
            fill="none"
          >
            <path
              d="M25 2.46997L0 2.46997L2.15934e-07 -3.15111e-05L25 -2.93255e-05L25 2.46997Z"
              fill="white"
            />
            <path
              d="M25 9.46997L0 9.46997L2.15934e-07 6.99997L25 6.99997L25 9.46997Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
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
            style={{
              marginLeft: "20px",
              marginTop: "45px",
              marginRight: "10px",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Привет друг! Мы хотим тебя познакомить с нами и с нашим виденьем.
          </p>
          <p
            style={{
              marginLeft: "20px",
              marginRight: "10px",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Coffee & Life это молодёжное сообщество любящее Иисуса
            которое,ставит перед собой следующие цели:
          </p>
        </div>
        <VisionCard
          color="#DC7755"
          title="Показать"
          text="Наше желание создать на наших встречах атмосферу любви и принятия, и передать её тебе. Так, как сделал это Иисус"
          number={1}
        />
        <VisionCard
          color="#F4F389"
          title="Рассказать"
          text="Это место, где мы рассказываем о самом ценном, что у нас есть. Мы говорим об Иисусе и о Его самом ценном подвиге."
          number={2}
          textColor="#000"
        />
        <VisionCard
          color="#4DDEB0"
          title="Уповать"
          text="Мы надеемся на Бога, что Он использует наши слабые усилия, чтобы ты имел уверенное будущие. Мы надеемся на то, что тебе захочется вернуться к нам."
          number={3}
          textColor="#2F2F2F"
        />
        <div
          className="menu-card"
          style={{ background: "#7C83A8", marginTop: "10px" }}
        >
          <p
            style={{
              textAlign: "center",
              marginTop: "45px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            С любовью твоя семья <br />
            <span style={{ fontSize: "36px", fontWeight: 700 }}>
              coffee & life
            </span>
          </p>
        </div>
        <button
          className="join-btn-vision"
          style={{
            height: "60px",
            width: "209px",
            marginBottom: "40px",
            marginTop: "40px",
          }}
          onClick={() => navigate("/menu")}
        >
          HOME PAGE
        </button>
      </div>
      <div className="coffe-life-txt">Coffee & Life</div>
    </>
  )
}

export default Vision
