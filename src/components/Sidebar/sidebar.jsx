import React, { useState } from "react";
import s from "./sidebar.module.css";
import Logo from "../../imgs/logo.png";
import { UilEstate, UilSignout } from "@iconscout/react-unicons";
import { SideBarData } from "../../Data/Data";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const onSelected = (index) => {
    return selected === index ? `${s.menuItem} ${s.active}` : `${s.menuItem}`;
  };

  const onClickHandler = (param) => {
    setSelected(param);
  };
  return (
    <div className={s.sidebar}>
      {/*logo*/}
      <div className={s.logo}>
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className={s.menu}>
        {SideBarData.map((item, index) => {
          return (
            <div
              onClick={() => onClickHandler(index)}
              key={index}
              className={onSelected(index)}
            >
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className={s.menuItem}>
          <UilSignout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
