import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        БҮХ СУРГАЛТУУД
      </MenuItem>
      <MenuItem link="/orders">МИНИЙ СУРГАЛТУУД</MenuItem>
      <MenuItem link="/login">НЭВТРЭХ</MenuItem>
    </ul>
  </div>
);

export default Menu;
