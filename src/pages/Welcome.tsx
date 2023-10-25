import { useNavigate } from "react-router-dom";
import LogoComponent from "../components/LogoComponent";

const Welcome = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/menu");
  }
  return (
    <div>
      <div className="logo-container">
        <LogoComponent />
      </div>
      <div className="welcome-txt-container">
        Welcome to <br /> coffee & life
        <br /> family
      </div>
      <div className="next-button-container">
        <button className="join-btn" onClick={handleClick}>
          NEXT
        </button>
      </div>
      <div className="coffe-life-txt">Coffe & Life</div>
    </div>
  );
};

export default Welcome;
