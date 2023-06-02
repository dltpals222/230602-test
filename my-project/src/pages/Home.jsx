import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>여기는 홈입니다.</h1>
      <Link to="/about"> about으로 가자 </Link>
    </div>
  );
};

export default Home;
