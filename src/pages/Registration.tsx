import { useState, ChangeEvent, FormEvent } from "react";
import LogoComponent from "../components/LogoComponent";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  surname: string;
  nickname: string;
  mobileNumber: string;
}

function Registration() {
  const initialFormData: FormData = {
    name: "",
    surname: "",
    nickname: "",
    mobileNumber: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

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
    // Adăugați alte reguli de validare aici

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      localStorage.setItem("nickname", formData.nickname);
      navigate("/welcome");
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
              placeholder="Name"
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
              placeholder="Surname"
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
              placeholder="Nickname"
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
              required
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            {formErrors.mobileNumber && (
              <div className="error-message">{formErrors.mobileNumber}</div>
            )}
          </div>
          <div className="join-bnt-container">
            <button className="join-btn" type="submit">
              JOIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
