import React from "react";
import Button from "../Button/Button";

import "./GetStarted.css";
export default function GetStarted() {
  return (
    <section className="g-wrapper" id="Started">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <Button type="contact" contant="Get Started"/>
        </div>
      </div>
    </section>
  );
}
