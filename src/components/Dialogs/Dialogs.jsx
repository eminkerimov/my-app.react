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

    let dialogs = [
        {id: 1, name: "Emin"},
        {id: 2, name: "Zaur"},
        {id: 3, name: "Nadir"},
        {id: 4, name: "Yusif"},
        {id: 5, name: "Orxan"},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message:"Hello!"},
        {id: 2, message:"How are you?"},
        {id: 3, message:"How old are you?"},
        {id: 4, message:"Where is your car?"},
    ]

    let messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;