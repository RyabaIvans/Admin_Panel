import React from "react";
import s from "./cards.module.css";
import Card from "../Card/card";
import { cardsData } from "../../Data/Data";

const Cards = () => {
  return (
    <div className={s.Cards}>
      {cardsData.map((card, id) => {
        return (
          <div className={s.parentContainer}>
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
