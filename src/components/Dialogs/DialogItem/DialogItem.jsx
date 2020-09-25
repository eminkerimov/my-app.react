import React from "react";
import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return  <div className={c.dialog + ' ' + c.active}>
        <img src={props.ava} alt="shekil"/>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

export default DialogItem;