/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/images/online-course-logo.jpg";

const Logo = (props) => (
  <div className={css.Logo}>
    <img src={logoImage} />
  </div>
);

export default Logo;
