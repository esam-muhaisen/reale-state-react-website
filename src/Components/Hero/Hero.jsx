import React from "react";
import "./Hero.css";
import heroimage from "../../assets/images/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import { Button } from "../exports";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover
              <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <Button contant="Search" />
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={8} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={4950} end={5000} duration={8} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Cutomers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src={heroimage} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
