import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Track your product with"
        imgsrc={web}
        // visit="/service"
        visit="/login"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
