import { UserInfo } from "../types";

const AboutUser: React.FC<UserInfo> = (props) => {
  console.log(props);
  return (
    <>
      <div className="welcome-admin">
        <div
          className="see-q-card"
          style={{ height: "40px", marginBottom: "5px" }}
        >
          <div className="title-with-icon">
            <div
              style={{
                marginTop: "15px",
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              {props.nickname}
            </div>
            <div className="access-card">{props.assignedNumber}</div>
          </div>
          <div
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AboutUser;
