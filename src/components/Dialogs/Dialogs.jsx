import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return  <div className={c.dialog + ' ' + c.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={c.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name="Emin" id="1"/>
                <DialogItem name="Zaur" id="2"/>
                <DialogItem name="Nadir" id="3"/>
                <DialogItem name="Yusif" id="4"/>
                <DialogItem name="Orxan" id="5"/>
            </div>
            <div className={c.messages}>
                <Message message="Hello!" />
                <Message message="How are you?"/>
                <Message message="How old are you?"/>
                <Message message="Where is your car?"/>
            </div>
        </div>
    )
}

export default Dialogs;