import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Mithil Mistry</span>, a Forth-year B.Tech Computer Science & Engineering student at{" "}
            <span className="purple">Charotar University of Science and Technology (CHARUSAT)</span>, based in{" "}
            <span className="purple">Ahmedabad, Gujarat, India</span>.
          </p>

          <p style={{ textAlign: "justify" }}>
            I have a strong inclination toward machine learning, artificial intelligence, and applied research, with a growing interest in building real-world, scalable tech solutions. Over the years, I've actively explored this space through research work, internships, independent projects, and leadership initiatives, allowing me to bridge the gap between theory and practical impact.
            <br />
            <br />
            My technical skill set spans Python, C++, Java, SQL, and modern ML frameworks such as TensorFlow, PyTorch, and Scikit-learn. I have worked across diverse domains including anomaly detection, healthcare analytics, industrial machine monitoring, IoT-based systems, and data-driven web platforms. Several of my projects and research efforts are geared toward efficiency, accuracy, and real-world deployment, rather than just academic experimentation.
            <br />
            <br />
            Beyond technology, I strongly believe in leadership, creativity, and continuous self-growth. I am:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> A leader — Founder & Joint President of CHARUSAT's Economics Club, "Arthyantra", where I lead initiatives at the intersection of economics, technology, and student engagement
            </li>
            <li className="about-activity">
              <ImPointRight /> An athlete — Reached quarter-finals at state-level Lawn Tennis tournaments, reflecting discipline and competitive spirit
            </li>
            <li className="about-activity">
              <ImPointRight /> A musician — Achieved distinction in nine Classical Music examinations and proficient with multiple instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> A curious creator — Passionate about innovation, problem-solving, and experimenting with new ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> A traveler & explorer — Someone who enjoys discovering new perspectives, cultures, and experiences
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm driven by the belief that technology should not just be intelligent—but meaningful, and I continuously strive to build solutions that create tangible value."{" "}
          </p>
          <footer className="blockquote-footer">Mithil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
