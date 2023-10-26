import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="menu-txt">
        <p style={{ paddingTop: "40px" }}>menu</p>

        <div
          className="menu-card"
          onClick={() => navigate("/admin-qa")}
          style={{ background: "#F4F389", marginBottom: "10px" }}
        >
          <div className="title-with-icon">
            <div className="title">Questions</div>
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
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/admin-meets")}
          style={{ background: "#DC7755", marginBottom: "10px" }}
        >
          <div className="title-with-icon">
            <div className="title">Meetings</div>
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
        </div>

        <div
          className="menu-card"
          onClick={() => navigate("/admin-quiz")}
          style={{ background: "#4DDEB0", marginBottom: "10px" }}
        >
          <div className="title-with-icon">
            <div className="title">Quiz</div>
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
        </div>
      </div>
      <p className="paragraf-bottom">Coffee & Life</p>
    </>
  );
};

export default AdminMenu;
