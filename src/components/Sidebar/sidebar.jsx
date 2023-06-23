import React, { useState } from "react";
import s from "./sidebar.module.css";
import Logo from "../../imgs/logo.png";
import { UilBars, UilEstate, UilSignout } from "@iconscout/react-unicons";
import { SideBarData } from "../../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const onSelected = (index) => {
    return selected === index ? `${s.menuItem} ${s.active}` : `${s.menuItem}`;
  };
  const sidebarVaruants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const onClickHandler = (param) => {
    setSelected(param);
  };
  return (
    <>
      <div
        className={s.bars}
        onClick={() => setExpanded(!expanded)}
        style={expanded ? { left: "60%" } : { left: "5%" }}
      >
        <UilBars />
      </div>
      <motion.div
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        variants={sidebarVaruants}
        className={s.sidebar}
      >
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
      </motion.div>
    </>
  );
};

export default Sidebar;
