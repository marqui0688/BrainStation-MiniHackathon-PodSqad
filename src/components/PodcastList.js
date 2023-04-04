import "./PodcastList.scss";
import meow from "../assets/meow.jpeg";

import ins from "../assets/icons/ins.jpg";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import tiktok from "../assets/icons/tiktok.png";
import { useState } from "react";

export const PodcastList = ({ setModal }) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);

  const cancelHandler = () => {
    setModal(false);
  };

  const toggleHandler1 = (e) => {
    if (!active1) {
      setActive1(true);
    } else {
      setActive1(false);
    }
  };
  const toggleHandler2 = (e) => {
    if (!active2) {
      setActive2(true);
    } else {
      setActive2(false);
    }
  };
  const toggleHandler3 = (e) => {
    if (!active3) {
      setActive3(true);
    } else {
      setActive3(false);
    }
  };
  const toggleHandler4 = (e) => {
    if (!active4) {
      setActive4(true);
    } else {
      setActive4(false);
    }
  };

  const toggleHandler5 = (e) => {
    if (!active5) {
      setActive5(true);
    } else {
      setActive5(false);
    }
  };
  const toggleHandler6 = (e) => {
    if (!active6) {
      setActive6(true);
    } else {
      setActive6(false);
    }
  };
  const toggleHandler7 = (e) => {
    if (!active7) {
      setActive7(true);
    } else {
      setActive7(false);
    }
  };

  return (
    <div className="modal">
      <div className="podcast-list__container">
        <button onClick={cancelHandler} className="cancel">
          X
        </button>
        <h3 className="podcast-list__title">Share</h3>
        <p className="podcast-list__subheader">Choose a clip</p>
        <div onClick={toggleHandler1} className="podcast-list__sidebar">
          <img
            className={`podcast-list__img ${active1 ? "active" : ""}`}
            src={meow}
            alt="analytics-icon"
          />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">First 30 Seconds</p>
            {/* <p className="podcast-list__name">Podcast Name</p> */}
          </div>
        </div>
        <div onClick={toggleHandler2} className="podcast-list__sidebar">
          <img
            className={`podcast-list__img ${active2 ? "active" : ""}`}
            src={meow}
            alt="analytics-icon"
          />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">Details of story</p>
            <p className="podcast-list__name">with cliffhanger</p>
          </div>
        </div>
        <div onClick={toggleHandler3} className="podcast-list__sidebar">
          <img
            className={`podcast-list__img ${active3 ? "active" : ""}`}
            src={meow}
            alt="analytics-icon"
          />
          <div className="podcast-list__info-wrapper">
            <p className="podcast-list__name">Create custom</p>
            <p className="podcast-list__name">video clip</p>
          </div>
        </div>
      </div>
      <div className="social">
        <p className="social-header">Choose a platform</p>
        <div className="img-container">
          <img
            onClick={toggleHandler4}
            className={`social-icon ${active4 ? "active" : ""}`}
            src={twitter}
          ></img>
          <img
            onClick={toggleHandler5}
            className={`social-icon ${active5 ? "active" : ""}`}
            src={ins}
          ></img>
          <img
            onClick={toggleHandler6}
            className={`social-icon ${active6 ? "active" : ""}`}
            src={youtube}
          ></img>
          <img
            onClick={toggleHandler7}
            className={`social-icon ${active7 ? "active" : ""}`}
            src={tiktok}
          ></img>
        </div>
        <button className="social-button"> Share</button>
      </div>
    </div>
  );
};
export default PodcastList;
