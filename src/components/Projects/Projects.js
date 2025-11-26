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
                title="Bill Blister Website"
                description="A full-stack billing and inventory management system designed for local retailers and distributors. It allows users to generate GST-ready bills, manage customer data, track stock entries, and monitor profit margins — all through a responsive dashboard. Built with clean UI components and optimized database calls for faster operations."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Amit Fibre Decor (AFD) Website"
                description="A premium portfolio website developed for Amit Fibre Decor, a sculpture and design company specializing in artistic installations and décor. The site showcases various projects with dynamic galleries, an interactive map for workshop locations, and smooth animations to emphasize their brand identity. Developed with focus on visual storytelling and user immersion."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Vibrant Gujarat Regional Meet 2025"
                description="A kiosk-based Android application developed for the Gujarat Forest Department's Vibrant Gujarat Regional Meet 2025. The app enables participants to take a digital oath for environmental conservation. It captures a user's photo and name, automatically embeds them on a personalized certificate, and stores the generated image for records. Designed for offline use and optimized for tablet kiosks."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Scorewise - GRE Essay Practice Tool"
                description="A full-stack web application designed to help GRE aspirants practice Analytical Writing Assessment (AWA) essays. Features include randomized topics, real-time timer, essay evaluation, and typing speed tracking."
                demoLink="https://scorewise.mithilmistry.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Depth and Dimension Company Website"
                description="A collaborative project where my partner and I created a professional company website for Depth and Dimension, showcasing their services, portfolio, and brand identity."
                demoLink="https://mithil1105.github.io/Depth/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="DonateNow - Blood Donation App"
                description="Built a full-stack blood donation app using MongoDB, React.js, and Node.js. Implemented JWT authentication and integrated SMS functionality for donor engagement. Features include user authentication, admin functionality, and multi-user roles."
                demoLink="https://github.com/Mithil1105/BloodDonation"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="The Wall - Twitter Clone"
                description="Developed a Twitter clone using Flutter, Dart, and Firebase. Implemented real-time database features, user authentication, and tweet posting functionality. Created a responsive and interactive user interface."
                demoLink="https://github.com/Mithil1105/The-wall"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Teen Patti Game"
                description="Developed a 2-player multiplayer card game in Unity using C# and RNG Algorithm. Currently expanding the project to include online multiplayer functionality. Implemented game logic and user interface."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Cube Runner"
                description="Created a 3D immersive game for a group project using C#, Unity Engine, and VS Code. Enhanced team collaboration and game development skills through effective project management and coding practices."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Wisk Wizard"
                description="A web application that allows users to input ingredients and generate curated dish recipes. Developed to help users creatively utilize available ingredients, reducing food waste and inspiring culinary exploration."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="WiFi-Based Attendance Tracking Module"
                description="A Smart India Hackathon (SIH) group project featuring an innovative attendance tracking system. Utilizes Flutter, Firebase, and advanced geolocation technologies to provide automatic, fraud-proof check-in/check-out tracking with precise GPS and Wi-Fi BSSID validation."
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
                demoLink="https://github.com/Mithil1105/BirdLanguageExhibition"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Smart Home Automation System"
                description="Successfully implemented a comprehensive home automation system in my current residence. Integrated remote-controlled switches, motion-activated lighting, and security sensors throughout the house. System features seamless operation via mobile app, remote controls, and physical switches, with real-time security notifications. All components work flawlessly in daily use, significantly enhancing home convenience and security."
                demoLink="https://github.com/Mithil1105/SmartHomeAutomation"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Emergency Braking Car (ADAS Prototype)"
                description="Built a prototype vehicle with Bluetooth/WiFi control and automated emergency braking system. Implemented proximity sensors, warning buzzers, and automatic stop functionality, simulating basic ADAS features at small scale."
                demoLink="https://github.com/Mithil1105/ADAS-Prototype"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="PCB Projects Implementation"
                description="Implemented various electronic projects including fiber optic microphone, fire alarm system, fastest finger first game, burglar alarm, water level monitor, and traffic light simulation. Worked with existing circuit designs and modified them to meet specific requirements. Gained hands-on experience in circuit assembly and testing."
                demoLink="https://github.com/Mithil1105/PCB-Projects"
              />
            </Col>
          </Row>

          {/* Ongoing Projects */}
          <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
            Ongoing Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                title="Lease Tracker Website"
                description="A modern web platform designed for co-working space owners to manage leases, clients, and office inventories in a structured dashboard resembling Excel. The system supports user authentication, role-based permissions, automated calculations for lease durations, and Excel-style export features — eliminating dependency on manual spreadsheets."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Gym Trainer Website"
                description="A platform built for personal fitness trainers to manage their clients. The website allows trainers to upload tutorial videos, assign personalized workout plans, and track user progress. It features a clean, motivating interface with a member dashboard for accessing daily routines and progress analytics."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Wardrobe Outfit Recommender"
                description="An AI-powered fashion assistant that helps users organize their wardrobe and receive outfit recommendations based on the occasion, weather, and color harmony. Users can upload images of their clothes, which are classified using a custom-trained CNN model into categories like Traditional, Western, Casual, and Formal. The recommender suggests optimal combinations and generates outfit ideas using AI similarity scoring."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
