import React from "react";
import s from "./mainPart.module.css";
import Cards from "../Cards/Cards";

const MainPart = () => {
  return (
    <div className={s.mainPart}>
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainPart;
