import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectOnLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nickname = localStorage.getItem("nickname");

    if (nickname && nickname !== "admin-sigma") {
      navigate("/welcome");
    }

    if (nickname && nickname === "admin-sigma") {
      navigate("/admin-welcome");
    }
  }, [navigate]);

  return null;
};

export default useRedirectOnLogin;
