import React from "react";
import "./Companies.css";
import prologis from "../../assets/images/prologis.png";
import tower from "../../assets/images/tower.png";
import equinix from "../../assets/images/equinix.png";
import realty from "../../assets/images/realty.png";

export default function Companies() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </section>
  );
}
