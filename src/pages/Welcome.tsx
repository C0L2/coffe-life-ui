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
        Welcome to coffee & life family
      </div>
      <div className="join-bnt-container">
        <button className="join-btn" onClick={handleClick}>
          NEXT
        </button>
      </div>
      <div className="coffe-life-txt">Coffe & Life</div>
    </div>
  );
};

export default Welcome;
