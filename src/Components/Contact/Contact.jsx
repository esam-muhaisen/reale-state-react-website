import React from "react";
import contact from "../../assets/images/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";

import Button from "../Button/Button";
import Contactcard from "../Contactcard/Contactcard";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="c-wrapper" id="Contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <Contactcard
                icon={<MdCall size={25} />}
                method="Call"
                number="021 123 145 14"
                cont="Call Now"
              />
              <Contactcard
                icon={<BsFillChatDotsFill size={25} />}
                method="Chat"
                number="021 123 145 14"
                cont="Chat Now"
              />
            </div>
            {/* secound row */}
            <div className="flexColStart row">
              <Contactcard
                icon={<FaVideo size={25} />}
                method="Video Call"
                number="021 123 145 14"
                cont="Video Call Now"
              />
              <Contactcard
                icon={<HiChatBubbleBottomCenter size={25} />}
                method="Message"
                number="021 123 145 14"
                cont="Message Now"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
