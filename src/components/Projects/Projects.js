import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ color: "#c084f5" }}>
            My Recent <strong>Projects</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          {/* Software Projects */}
          <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
            Software Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Scorewise - GRE Essay Practice Tool"
                description="A full-stack web application designed to help GRE aspirants practice Analytical Writing Assessment (AWA) essays. Features include randomized topics, real-time timer, essay evaluation, and typing speed tracking."
                ghLink="https://github.com/Mithil1105/Scorewise"
                demoLink="https://scorewise.web.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="DonateNow - Blood Donation App"
                description="Built a full-stack blood donation app using MongoDB, React.js, and Node.js. Implemented JWT authentication and integrated SMS functionality for donor engagement. Features include user authentication, admin functionality, and multi-user roles."
                ghLink="https://github.com/Mithil1105/DonateNow"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Twitter Clone"
                description="Developed a Twitter clone using Flutter, Dart, and Firebase. Implemented real-time database features, user authentication, and tweet posting functionality. Created a responsive and interactive user interface."
                ghLink="https://github.com/Mithil1105/TwitterClone"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Teen Patti Game"
                description="Developed a 2-player multiplayer card game in Unity using C# and RNG Algorithm. Currently expanding the project to include online multiplayer functionality. Implemented game logic and user interface."
                ghLink="https://github.com/Mithil1105/TeenPattiGame"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Cube Runner"
                description="Created a 3D immersive game for a group project using C#, Unity Engine, and VS Code. Enhanced team collaboration and game development skills through effective project management and coding practices."
                ghLink="https://github.com/Mithil1105/CubeRunner"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Wisk Wizard"
                description="A web application that allows users to input ingredients and generate curated dish recipes. Developed to help users creatively utilize available ingredients, reducing food waste and inspiring culinary exploration."
                ghLink="https://github.com/Mithil1105/WiskWizard"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="WiFi-Based Attendance Tracking Module"
                description="A Smart India Hackathon (SIH) group project featuring an innovative attendance tracking system. Utilizes Flutter, Firebase, and advanced geolocation technologies to provide automatic, fraud-proof check-in/check-out tracking with precise GPS and Wi-Fi BSSID validation."
                ghLink="https://github.com/Mithil1105/WiFi-Attendance-Tracker"
              />
            </Col>
          </Row>

          {/* IoT and Hardware Projects */}
          <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
            IoT & Hardware Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Secret Language of Birds - Interactive Exhibition"
                description="Developed a Raspberry Pi-powered interactive bird call exhibit featuring 10 species, currently showcased at Thol and Nal Sarovar Bird Sanctuaries in Gujarat. Implemented GPIO-controlled LED illumination and audio playback system using Python, gpiozero, and VLC. The installation educates visitors about local and migratory birds through high-quality photographs, synchronized lighting, and authentic bird call recordings."
                ghLink="https://github.com/Mithil1105/BirdLanguageExhibition"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Smart Home Automation System"
                description="Successfully implemented a comprehensive home automation system in my current residence. Integrated remote-controlled switches, motion-activated lighting, and security sensors throughout the house. System features seamless operation via mobile app, remote controls, and physical switches, with real-time security notifications. All components work flawlessly in daily use, significantly enhancing home convenience and security."
                ghLink="https://github.com/Mithil1105/SmartHomeAutomation"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Emergency Braking Car (ADAS Prototype)"
                description="Built a prototype vehicle with Bluetooth/WiFi control and automated emergency braking system. Implemented proximity sensors, warning buzzers, and automatic stop functionality, simulating basic ADAS features at small scale."
                ghLink="https://github.com/Mithil1105/ADAS-Prototype"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="PCB Projects Implementation"
                description="Implemented various electronic projects including fiber optic microphone, fire alarm system, fastest finger first game, burglar alarm, water level monitor, and traffic light simulation. Worked with existing circuit designs and modified them to meet specific requirements. Gained hands-on experience in circuit assembly and testing."
                ghLink="https://github.com/Mithil1105/PCB-Projects"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
