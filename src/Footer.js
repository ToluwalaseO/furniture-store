import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Service</h4>
        <p>Legal Notices</p>
        <p>Data Protection</p>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <p>Enter email address</p>
        <p>Sign up</p>
      </div>
      <div className="check">
      <img alt="Logo" width="70" height="40" src="/unnamed.png"/>
      </div>
      <div className="footer-section">
        <h4>Connect</h4>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
      <div className="footer-section">
        <h4>Inquiries</h4>
        <p>Email: ask@dewish.ca</p>
        <p>Facebook: dewish.ca</p>
      </div>
    </footer>
  );
};

export default Footer
