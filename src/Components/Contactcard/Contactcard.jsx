import React from 'react'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import Button from "../Button/Button"

import "./Contactcard.css"
export default function Contactcard(props) {
  return (
    <div className="flexColCenter mode">
    <div className="flexStart">
      <div className="flexCenter icon">
        {props.icon}
      </div>
      <div className="flexColStart detail">
        <span className="primaryText">{props.method}</span>
        <span>{props.number}</span>
      </div>
    </div>
    <div className="flexCenter buttoncontact">
        <Button contant={props.cont} type="contact"/>
    </div>
  </div>
  )
}
