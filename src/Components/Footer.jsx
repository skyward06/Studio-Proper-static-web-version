import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["footer-text"]}>
          <h4>The destination for tech & design</h4>
          <p>
            Founded on the principal that good design should be seamless and
            accessible to all; PROPER creates an evolving range of solutions and
            accessories that deliver great technology experiences, delivered
            right to your doorstep.
          </p>
          <div className={styles.icons}>
            <i className="fa-brands fa-facebook fa-lg"></i>
            <i className="fa-brands fa-twitter-square fa-lg"></i>
            <i className="fa-brands fa-instagram-square fa-lg"></i>
            <i className="fa-brands fa-pinterest fa-lg"></i>
            <i className="fa-brands fa-youtube fa-lg"></i>
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </div>
        </div>
        <div className={styles["footer-links"]}>
          <h4>Studio Proper</h4>
          <ul>
            <li>Proper Consulting</li>
            <li>Proper x Architects</li>
            <li>Proper X Officeworks</li>
            <li>Your Brand on Our Products</li>
            <li>Verified Customer Reviews</li>
            <li>Apple Authorised Reseller</li>
            <li>Buy Now Pay Later</li>
            <li>NDIS support available</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles["footer-newsletter"]}>
          <h4>Newsletter</h4>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
