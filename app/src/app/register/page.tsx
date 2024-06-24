"use client";

import React from "react";
import RegisterLeft from '../components/auth/loginLeft';
import RegisterRight from '../components/auth/registerRight';

const Register: React.FC = () => {
  return (
    <div className="flex justify-center mx-auto md:h-screen">
      <RegisterLeft/>
      <RegisterRight/>
    </div>
  );
}

export default Register;
