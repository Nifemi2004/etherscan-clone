"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const Home = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch("/api/hello"); // Relative path works in the app router
      const data = await res.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <Header />
      <h1>{message}</h1>
      <Main />
    </div>
  );
};

export default Home;
