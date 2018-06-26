import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaSlack from 'react-icons/lib/fa/slack';
import FaMedium from 'react-icons/lib/fa/medium';
import FaCopyright from 'react-icons/lib/fa/copyright';

import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <Element name="contact-section" className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="menu-title mt-2 mb-3"> website menu </div>
              <div className="row menu-content">
                <div className="col-6 col-md-5">
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="home-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Introduction
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="benefit-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Benefits
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="explore-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Explore
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="network-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Network
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="webApp-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Web App
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-5">
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="roadmap-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Roadmap
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="whitepaper-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Whitepaper
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="team-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Team
                    </Link>
                  </div>
                  <div className="menu-item">
                    <Link
                      href="#"
                      to="contact-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="social-title mt-2 mb-3"> follow us </div>
              <div className="row">
                <div className="col-3 col-md-2">
                  <div>
                    <a
                      href="https://www.facebook.com/quilloncurrency/"
                      target="blank"
                      className="text-white"
                    >
                      <FaFacebook className="social-icon" size="35" />
                    </a>
                  </div>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://www.instagram.com/QuillonCurrency"
                    target="blank"
                    className="text-white"
                  >
                    <FaInstagram className="social-icon" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://twitter.com/QuillonCurrency"
                    target="blank"
                    className="text-white"
                  >
                    <FaTwitter className="social-icon" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://github.com/QuillonCurrency"
                    target="blank"
                    className="text-white"
                  >
                    <FaGithub className="social-icon" size="35" />
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3 col-md-2">
                  <a
                    href="https://www.linkedin.com/company/quillonfoundation/"
                    target="blank"
                    className="text-white"
                  >
                    <FaLinkedin className="social-icon" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://quilloncurrency.slack.com"
                    target="blank"
                    className="text-white"
                  >
                    <FaSlack size="35" className="social-icon" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://medium.com/quillon"
                    target="blank"
                    className="text-white"
                  >
                    <FaMedium size="35" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="newsletter-title mt-2 mb-3"> newsletter </div>
              <div className="newsletter-description mb-3">
                Get Exclusive Content <br /> and more
              </div>
              <div id="newsletterSignUpDiv" />
            </div>
          </div>
          <div className="copyright">
            <div className="line"> </div>
            <div className="text">
              {' '}
              <FaCopyright />2018 quillon.co{' '}
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
