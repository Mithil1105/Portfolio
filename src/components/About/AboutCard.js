import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mithil Mistry</span>, a third-year B.Tech student in Computer Science and Engineering at{" "}
            <span className="purple">Charotar University of Science and Technology (CHARUSAT)</span>, from{" "}
            <span className="purple">Ahmedabad, Gujarat, India</span>.
          </p>

          <p style={{ textAlign: "justify" }}>
            With a strong passion for machine learning, artificial intelligence, and emerging technologies,
            I have actively engaged in research, internships, and leadership roles that align with my interests.
            <br />
            <br />
            My technical expertise spans across Python, C++, Java, SQL, and frameworks like TensorFlow,
            PyTorch, and Scikit-learn. Through internships and research work, I've contributed to various
            domains including anomaly detection, healthcare analytics, and IoT-based solutions.
            <br />
            <br />
            Beyond technology, I am:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> A leader - serving as Founder & Joint President of CHARUSAT's Economics Club "Arthyantra"
            </li>
            <li className="about-activity">
              <ImPointRight /> An athlete - achieved quarter-finals in state-level Lawn Tennis tournaments
            </li>
            <li className="about-activity">
              <ImPointRight /> A musician - earned distinction in nine Classical Music exams and proficient in multiple instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovation new stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to innovate at the intersection of technology and human experience."{" "}
          </p>
          <footer className="blockquote-footer">Mithil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
