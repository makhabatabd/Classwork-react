import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-list">
          Контакты:
          <p>0555555555</p>
          <p>0999555555</p>
          <p>mypizza.kg</p>
        </div>
        <div className="footer-list">
          Рабочий график:
          <p>Мы работаем 24/7!!!</p>
        </div>
        <div className="footer-list">
          Акции:
          <p>Смотрите вначале страницы!</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
