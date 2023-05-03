import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="footer pt-5">
        <div className="footer-top py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-widget">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                  <div className="widget-social">
                    <ul>
                      <li>
                        {" "}
                        <span>Follow us:</span>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitter></FaTwitter>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaInstagram></FaInstagram>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaFacebook></FaFacebook>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedin></FaLinkedin>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-widget">
                  <h3>Quick Links </h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Performance</a>
                    </li>
                    <li>
                      <a href="#">Help (FAQ)</a>
                    </li>
                    <li>
                      <a href="#">Blog </a>
                    </li>
                    <li>
                      <a href="#">Contact </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-widget">
                  <h3>Other Resources</h3>
                  <ul>
                    <li>
                      <a href="#"> Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Home Delivery Process </a>
                    </li>
                    <li>
                      <a href="#">Special Services </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-widget">
                  <h3>Contact Us</h3>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon d-flex">
                      <span>
                        <i className="fas fa-location-arrow    "></i>
                      </span>
                      <p>Fatikchhari, Chattogram</p>
                    </div>

                    <div className="footer-contact-icon d-flex">
                      <span>
                        <i className="fas fa-envelope    "></i>
                      </span>
                      <a href="mailto:robim6225@gmail.com">robim6225@gmail.com</a>
                    </div>

                    <div className="footer-contact-icon d-flex">
                      <span>
                        <i className="fas fa-phone"></i>
                      </span>
                      <a href="tel:01537436599">01537436599</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copytright-text">
                  <p>
                    Copyright @2023 Foodify. Designed By <a href="#"> Rabiul Hossain</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
