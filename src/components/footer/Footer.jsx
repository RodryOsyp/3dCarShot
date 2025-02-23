import React from "react";
import style from "./Footer.module.css";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io";
import { Header } from "../header";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.subscribe}>
          <div className={style.title}>Subscribe Our Newsletter</div>
          <div className={style.input}>
            <input
              type="email"
              placeholder="Your email"
              className={style.input}
            />
            <button className={style.button}>Subscribe</button>
          </div>
        </div>
        <div className={style.carImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/256/2555/2555013.png"
            alt=""
          />
        </div>
      </div>

      <Header>
        <div className={style.links}>
          <div className={style.icons}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <IoLogoTwitter className={style.icon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <IoLogoFacebook className={style.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <IoLogoInstagram className={style.icon} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <IoLogoGithub className={style.icon} />
            </a>
          </div>
        </div>
      </Header>
      <div className={style.copyright}>
        @Copyright 2022, All Rights Reserved by falconthought
      </div>
    </footer>
  );
};

export default Footer;
