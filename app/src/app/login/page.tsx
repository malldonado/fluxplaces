import React from "react";
import LoginLeft from "../components/auth/loginLeft";
import LoginRight from "../components/auth/loginRight";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center mx-auto md:h-screen">
      <LoginLeft />
      <LoginRight />
    </div>
  );
}

export default Login;
