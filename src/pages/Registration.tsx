import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import LogoComponent from "../components/LogoComponent";
import { useNavigate } from "react-router-dom";
import { FormData } from "../interfaces/FormData";
import { regNewUser } from "../api";

function Registration() {
  const initialFormData: FormData = {
    name: "",
    surname: "",
    nickname: "",
    mobileNumber: "",
  };

  useEffect(() => {
    if (
      localStorage.getItem("nickname") &&
      localStorage.getItem("nickname") !== "admin-sigma"
    ) {
      navigate("/welcome");
    }

    if (
      localStorage.getItem("nickname") &&
      localStorage.getItem("nickname") === "admin-sigma"
    ) {
      navigate("/admin-welcome");
    }
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [usedNickname, setUsedNickname] = useState<boolean>(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validare formular
    const errors: Partial<FormData> = {};
    if (formData.name.trim() === "") {
      errors.name = "Numele este obligatoriu";
    }
    if (formData.surname.trim() === "") {
      errors.surname = "Prenumele este obligatoriu";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      if (formData.nickname === "admin-sigma") navigate("admin-welcome");
      else {
        regNewUser(
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
        });
      }
    }
  };

  return (
    <>
      <div className="logo-container">
        <LogoComponent />
      </div>
      <div className="hello-txt-container">
        <div className="hello-txt">Hello again</div>
      </div>
      <div className="center-div">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="reg-input"
              type="text"
              name="name"
              required
              placeholder="Name*"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <div className="error-message">{formErrors.name}</div>
            )}
          </div>
          <div className="input-group">
            <input
              className="reg-input"
              type="text"
              name="surname"
              required
              placeholder="Surname*"
              value={formData.surname}
              onChange={handleInputChange}
            />
            {formErrors.surname && (
              <div className="error-message">{formErrors.surname}</div>
            )}
          </div>
          <div className="input-group">
            <input
              className="reg-input"
              type="text"
              name="nickname"
              required
              placeholder="Nickname*"
              value={formData.nickname}
              onChange={handleInputChange}
            />
            {formErrors.nickname && (
              <div className="error-message">{formErrors.nickname}</div>
            )}
          </div>
          <div className="input-group">
            <input
              className="reg-input"
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
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
          <div className="join-bnt-container">
            <button className="join-btn" type="submit" style={{}}>
              JOIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
