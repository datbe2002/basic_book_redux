import React from "react";
import "../css/styles.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>&copy; Copyright {currentYear}. Made by Truong Tan Dat.</small>
    </footer>
  );
};

export default Footer;
