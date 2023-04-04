import React from "react";
import "./Footer.scss";
import analyticsIcon from "../../src/assets/icons/analytics-icon.png";
import toolsIcon from "../../src/assets/icons/plus-icon.png";
import podcastIcon from "../../src/assets/icons/pod-icon.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Analytics Icon */}

        <div className="footer__link-container">
          <a
            className={({ isActive }) =>
              isActive ? "footer__item footer__item--active" : "footer__item"
            }
          >
            <img
              className="footer__icon"
              src={analyticsIcon}
              alt="analytics-icon"
            />
            <p className="footer__header">Analytics</p>
          </a>
          {/* Tools Icon */}
          <a
            className={({ isActive }) =>
              isActive ? "footer__item footer__item--active" : "footer__item"
            }
          >
            <div className="zoom">
              <img
                className="footer__plus-icon"
                src={toolsIcon}
                alt="tools-icon"
              />

              <p className="footer__header">Tools</p>
            </div>
          </a>
          {/* Your Podcasts Icon */}
          <a
            className={({ isActive }) =>
              isActive ? "footer__item footer__item--active" : "footer__item"
            }
          >
            <img
              className="footer__icon"
              src={podcastIcon}
              alt="podcast-icon"
            />
            <p className="footer__header">Your Podcast</p>
          </a>
        </div>
        {/* </nav> */}
      </footer>
    </>
  );
};
export default Footer;
