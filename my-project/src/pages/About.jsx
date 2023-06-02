import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>여기는 About 위치입니다.</h1>
      <Link to="/">Home으로 가자</Link>
    </>
  );
};

export default About;
