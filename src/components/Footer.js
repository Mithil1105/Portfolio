import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="6" className="footer-copywright d-flex justify-content-center justify-content-md-start">
          <h3 style={{ marginBottom: 0 }}>Designed and Developed by Mithil Mistry</h3>
        </Col>
        <Col md="6" className="footer-copywright d-flex justify-content-center justify-content-md-end">
          <h3>Copyright © {year} MM</h3>
        </Col>
        <Col md="6" className="footer-body d-flex justify-content-center justify-content-md-start">
          <ul className="footer-icons" style={{ fontSize: "1.5em", marginBottom: 0 }}>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mithil-mistry-394a38250/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://orcid.org/0009-0000-7055-6088"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOrcid />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mithil_1105/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Mithil1105"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/918238326605"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mithil20056mistry@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://scholar.google.com/citations?user=ksO9HzMAAAAJ&hl=en"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
