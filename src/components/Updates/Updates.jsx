import React from "react";
import s from "./update.module.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className={s.Updates}>
      {UpdatesData.map((update) => {
        return (
          <div className={s.update}>
            <img src={update.img} alt={update.name} />
            <div className={s.noti}>
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <div className={s.time}>{update.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
