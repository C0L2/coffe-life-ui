import { useNavigate } from "react-router-dom";
import AboutUser from "../components/AboutUser";
import { useGetAllUsersQuery } from "../api";
import { User } from "../types";
import LoadingOverlay from "./Layouts/LoadingOverlay";
import { useEffect } from "react";

const AdminMeets = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetAllUsersQuery();

  if (isLoading || !data) {
    return <LoadingOverlay />;
  }

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div className="q-header">
        <div className="left-element" onClick={() => navigate("/admin-menu")}>
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
        <p style={{ fontSize: "20px" }}>meetings</p>
        <div className="right-element" onClick={() => navigate("/admin-menu")}>
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

      <div
        className="see-q-card"
        style={{ marginLeft: "3px", background: "#F4F389" }}
      >
        <div
          className="title-with-icon"
          style={{ marginLeft: "2px", textAlign: "center" }}
        >
          <div
            style={{
              marginTop: "20px",
              marginLeft: "15px",
              fontWeight: "bold",
            }}
          >
            Unnasign all numbers (not working now)
          </div>
        </div>
      </div>
      <hr />

      {data?.map((user: User) => (
        <AboutUser
          key={user.id}
          id={user.id}
          nickname={user.nickname}
          assignedNumber={user.assignedNumber}
        />
      ))}
      {/* <p className="paragraf-bottom">Coffee & Life</p> */}
    </>
  );
};

export default AdminMeets;
