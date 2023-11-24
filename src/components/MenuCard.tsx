import { useNavigate } from "react-router-dom";
import { MenuCardProps } from "../types";

const MenuCard: React.FC<MenuCardProps> = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${props.link}`);
  }

  return (
    <div
      className="menu-card"
      onClick={handleClick}
      style={{ background: `${props.color}`, marginBottom: "10px" }}
    >
      <div className="title-with-icon">
        <div className="title" style={{ fontSize: "16px" }}>
          {props.title}
        </div>
        <div className="access-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="white" />
            <path
              d="M23.7071 15.7071C24.0976 15.3166 24.0976 14.6834 23.7071 14.2929L17.3431 7.92893C16.9526 7.53841 16.3195 7.53841 15.9289 7.92893C15.5384 8.31946 15.5384 8.95262 15.9289 9.34315L21.5858 15L15.9289 20.6569C15.5384 21.0474 15.5384 21.6805 15.9289 22.0711C16.3195 22.4616 16.9526 22.4616 17.3431 22.0711L23.7071 15.7071ZM8 16H23V14H8V16Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
      </div>
      <div className="ru" style={{ fontSize: "12px" }}>
        {props.title_ru}
      </div>
      <div className="ro" style={{ fontSize: "12px" }}>
        {props.title_ro}
      </div>
    </div>
  );
};

export default MenuCard;
