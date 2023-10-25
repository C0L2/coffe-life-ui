const NumberCard = () => {
  function handleClick() {}

  return (
    <div
      className="menu-card-2"
      onClick={handleClick}
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
            25
          </text>
        </svg>
      </div>
    </div>
  );
};

export default NumberCard;
