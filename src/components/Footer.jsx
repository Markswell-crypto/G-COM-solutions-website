import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop(2500);
  };

  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Image src="/gcomlogo.jpg" alt="G-com Solutions Logo" fluid height="50px" width="50px" />
            <h1 className="logo">G-com Solutions</h1>
          </div>
          <div className="col-md-3">
            <p className="footer-title">Important Links</p>
            <ul className="list-unstyled">
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  duration={1000}
                  to="/"
                  className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="footer-title">Contact</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  P.O.Box 473-00100
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  Phone: 0727704389
                </Link>
              </li>
              <li>
                <Link to="gmail.com" className="footer-link">
                  lidburye@yahoo.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-3">
            <p className="footer-title">Social Media</p>
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/lidburye"
                  className="footer-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/lidbury1"
                  className="footer-link"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/emmanuel-lidbury-5ab05425/ "
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <p className="mb-0">&copy; 2023 Markswell-Crypto All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
