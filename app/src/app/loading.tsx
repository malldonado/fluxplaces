"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App flex justify-center items-center h-screen">
      {loading ? (
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      ) : (
        <Image src="./img/ico.svg" alt="Logo" width={100} height={100} />
      )}
    </div>
  );
};

export default App;
