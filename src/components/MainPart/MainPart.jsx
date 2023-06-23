import React from "react";
import s from "./mainPart.module.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainPart = () => {
  return (
    <div className={s.mainPart}>
      <h1>Dashboard</h1>
      <Cards />

      <Table />
    </div>
  );
};

export default MainPart;
