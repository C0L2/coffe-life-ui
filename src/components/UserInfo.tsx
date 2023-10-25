const UserInfo: React.FC<UserInfo> = (props) => {
  const fullName = props.firstName + " " + props.lastName;
  return (
    <>
      <div className="welcome-admin">
        <div className="see-q-card" style={{ height: "40px" }}>
          <div className="title-with-icon">
            <div
              style={{
                marginTop: "15px",
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              {fullName}
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

export default UserInfo;
