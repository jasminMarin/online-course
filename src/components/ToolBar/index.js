import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";

const ToolBar = (props) => (
    <header className={css.Toolbar}>    
        <HamburgerMenu toggleSideBar={props.toggleSideBar} />
        <Logo/>
        <nav className={css.HideOnMobile}>
        <Menu />
        </nav>
    </header>
);

export default ToolBar;