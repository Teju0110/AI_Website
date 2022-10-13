import React from "react";
import people from "../Images/people.png";
import ai from "../Images/ai.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id='home'>
      <div className="header_content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="header_content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header_content_people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
