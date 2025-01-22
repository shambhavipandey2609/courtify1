import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div>
        <h3>COMPANY</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Delivery</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <h3>GET IN TOUCH</h3>
        <p>+1-212-456-7890</p>
        <p>Courtify@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;