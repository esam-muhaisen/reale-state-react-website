import React from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <div className="">
      {props.type === "contact" ? (
        <button className="contact">{props.contant}</button>
      ) : (
        <button className="btn">{props.contant}</button>
      )}
    </div>
  );
}

