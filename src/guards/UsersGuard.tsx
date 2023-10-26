import React from "react";
import { Navigate, Route } from "react-router-dom";

const UsersGuard: React.FC<{ path: string; element: React.ReactElement }> = ({
  path,
  element,
}) => {
  const hasNickname = !!localStorage.getItem("nickname");

  if (hasNickname) {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/" replace={true} />;
  }
};

export default UsersGuard;
