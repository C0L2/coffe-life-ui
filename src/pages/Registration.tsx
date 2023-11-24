import { useState, ChangeEvent, FormEvent, useEffect, FC } from "react";
import LogoComponent from "../components/LogoComponent";
import { Form, useNavigate } from "react-router-dom";
import { FormData } from "../types";
import useRedirectOnLogin from "../hooks/useRedirectOnLogin";
import { useRegNewUserMutation } from "../api";
import LoadingLayout from "./Layouts/LoadingOverlay";
import LoadingOverlay from "./Layouts/LoadingOverlay";

const Registration: FC = () => {
  useRedirectOnLogin();

  // const [regNewUser, { isLoading, error }] = useRegNewUserMutation();

  const initialFormData: FormData = {
    nickname: "",
    mobileNumber: "",
  };
  /* 
  if (isLoading) {
  } */

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [usedNickname, setUsedNickname] = useState<boolean>(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setClicked(true);
    // regNewUser().then;
    /* 
    navigate("/welcome");
    e.preventDefault();
 */
    // Validare formular
    /*  const errors: Partial<FormData> = {};

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      if (formData.nickname === "admin-sigma") navigate("admin-welcome");
      else { */
    /*  regNewUser(
          formData.name,
          formData.surname,
          formData.nickname,
          formData.mobileNumber
        ).then((res) => {
          if (res.data.message === "This nickname is already taken") {
            setUsedNickname(true);
          } else {
            localStorage.setItem("nickname", formData.nickname);
            if (formData.nickname === "admin-sigma") navigate("admin-welcome");
            else navigate("/welcome");
          }
        }); */
    /*  }
    } */
  };

  return (
    <>
      {clicked ? (
        <LoadingOverlay></LoadingOverlay>
      ) : (
        <>
          <div className="logo-container">
            <LogoComponent />
          </div>
          <div className="hello-txt-container">
            <div className="hello-txt">Hello again</div>
          </div>
          <div className="center-div">
            <form
              className="form"
              onSubmit={handleSubmit}
              style={{ marginTop: "100px" }}
            >
              <div>
                <input
                  className="reg-input"
                  type="text"
                  name="nickname"
                  placeholder="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
                {formErrors.nickname && (
                  <div className="error-message">{formErrors.nickname}</div>
                )}
              </div>
              <div>
                <input
                  className="reg-input"
                  type="text"
                  name="mobileNumber"
                  placeholder="mobile number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
                {formErrors.mobileNumber && (
                  <div className="error-message">{formErrors.mobileNumber}</div>
                )}
              </div>
              {usedNickname ? (
                <p style={{ color: "#F4F389", marginBottom: 0 }}>
                  This nickname is already used
                </p>
              ) : (
                ""
              )}
              <button
                className="join-btn"
                type="submit"
                style={{ marginTop: "100px" }}
              >
                JOIN
              </button>
              {/* </div> */}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Registration;
