import { useEffect, useState } from "react";
import { useGetMyNumberMutation } from "../api";

const NumberCard = () => {
  const nickname = localStorage.getItem("nickname");
  const [myNumber, setMyNumber] = useState<number>(0);
  const [getMyNumber, { data, isLoading, isSuccess }] =
    useGetMyNumberMutation();

  useEffect(() => {
    if (nickname) {
      getMyNumber(nickname);
    }
  }, [nickname, getMyNumber]);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setMyNumber(data?.assignedNumber || null);
    }
  }, [isSuccess, isLoading, data]);

  return (
    <div
      className="menu-card-2"
      style={{ background: `#DC7755`, marginBottom: "10px", display: "flex" }}
    >
      <div className="title-with-icon-2" style={{ flex: 1 }}>
        <div className="numer-title">Your number</div>
        <div className="numar-title-ru">Ваш номер</div>
        <div className="numar-title-ro">Numărul tău</div>
      </div>
      <div
        className="right-square"
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="50" fill="white" />
            </svg>
            <div className="svg-wrapper static-overlay">
              <svg
                style={{ marginTop: "11px", marginLeft: "12px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="static-svg"
              >
                <path
                  d="M26.497 19.5192C26.4362 19.4192 26.3501 19.3359 26.2469 19.2772C25.7172 18.9955 25.2985 19.4972 25.2973 19.4972C25.2147 19.5996 23.3191 21.8673 18.8283 21.3139C16.7547 20.9344 14.8241 20.0198 13.2387 18.666C11.6532 17.3122 10.4713 15.5689 9.81657 13.6187C9.16185 11.6684 9.05843 9.58289 9.51711 7.58043C9.9758 5.57797 10.9797 3.73222 12.4238 2.2364C12.5826 2.03124 12.7704 1.84897 12.9818 1.69504C13.5158 1.30511 14.1734 1.10943 14.8404 1.142C15.5074 1.17456 16.1416 1.43332 16.6328 1.8733C17.1239 2.31328 17.441 2.90666 17.5288 3.55032C17.6167 4.19398 17.4698 4.84723 17.1137 5.39654C17.0208 5.53972 16.9143 5.67417 16.7957 5.79816C16.2657 6.54526 15.956 7.4191 15.9002 8.32506C15.8444 9.23101 16.0445 10.1345 16.479 10.9378C16.9134 11.7411 17.5656 12.4136 18.365 12.8823C19.1643 13.3511 20.0803 13.5983 21.0138 13.5972C21.9473 13.5961 22.8627 13.3467 23.6609 12.8761C24.459 12.4054 25.1096 11.7315 25.542 10.9272C25.9745 10.1229 26.1724 9.21885 26.1143 8.31304C26.0562 7.40722 25.7443 6.5341 25.2125 5.78825C25.071 5.60779 24.925 5.42954 24.7745 5.25679C23.5249 3.81074 21.9778 2.63497 20.2327 1.80514C18.4876 0.975299 16.5833 0.50976 14.642 0.438458C14.461 0.431856 14.2799 0.428558 14.0977 0.428558C11.6271 0.429261 9.20095 1.06745 7.06704 2.27797C4.93313 3.48849 3.1679 5.22796 1.95163 7.31873C0.735349 9.40949 0.111601 11.7767 0.144091 14.1785C0.17658 16.5803 0.864145 18.9307 2.13656 20.9896C3.40897 23.0485 5.22064 24.7423 7.38655 25.8978C9.55247 27.0534 11.995 27.6293 14.4648 27.5668C16.9345 27.5044 19.343 26.8057 21.4441 25.5423C23.5453 24.2788 25.264 22.4958 26.4246 20.3753L26.4619 20.3071L26.4845 20.2575C26.4947 20.2344 26.5038 20.2113 26.5117 20.1893C26.5962 19.9725 26.5909 19.7323 26.497 19.5192Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="svg-wrapper">
              <svg
                style={{ marginLeft: "1px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="rotating-svg"
              >
                <g transform="rotate(0 25 25)">
                  <circle
                    cx="25"
                    cy="25"
                    r="25"
                    fill="url(#paint0_linear_116_88)"
                  />
                </g>

                <defs>
                  <linearGradient
                    id="paint0_linear_116_88"
                    x1="13.5"
                    y1="-2.81036e-07"
                    x2="25"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4DDEB0" />
                    <stop offset="1" stopColor="#5792EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="50" fill="white" />
            <text
              style={{ fontWeight: "bold", fontSize: "36px" }}
              x="50"
              y="50"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="36"
              fill="black"
            >
              {myNumber !== null ? myNumber : "N/A"}
            </text>
          </svg>
        )}
      </div>
    </div>
  );
};

export default NumberCard;
