import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SiderBar = props => {
    let classes = [css.SideBar, css.Close];
    if (props.showSideBar) {
        classes = [css.SideBar, css.Open];
    }

    return (
    <div>
        <Shadow hideShadow={props.toggleSideBar} show={props.showSideBar} />
        <div onClick = {props.toggleSideBar} className={classes.join(" ")}>
            <div className={css.Logo}>
                <Logo />
                <Menu />
        </div>
    </div>
    </div>
    )
};

export default SiderBar;