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
                title="Amit Fibre Decor (AFD) — Company Website"
                description="A professional business website for a company specializing in large-scale fibre, FRP, and sculptural installations. The website showcases craftsmanship, projects, and services to government bodies, exhibition planners, and private clients. Features include company profile, service overview, project showcase with visual emphasis, and clean professional UI suitable for enterprise clients."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Pesowise — Bill & Petty Cash Management"
                description="A reimbursement and petty-cash management platform that digitizes employee expense submission, admin approval, and finance-ready exports. Features include expense submission with bill upload (image/PDF), admin review workflow, voucher timeline tracking, exportable CSV logs for accounting, and role-based access with clean dashboard UI."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="ScoreWise — Essay Evaluation & Student Learning Platform"
                description="A student and institution platform focused on writing improvement through practice, evaluation, and structured feedback. Features include student signup with email verification, institution code-based joining with teacher approval, essay submission portal, teacher dashboard for reviewing and scoring, and typing practice workflows. Includes multi-tenant access control and role-based authentication."
                demoLink="https://scorewise.mithilmistry.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="ServiceWise — Patidar Travels Car Fleet Management System"
                description="A fleet operations app for a travel agency to manage vehicles, drivers, trips, and service schedules. Features include vehicle catalog with availability and usage history, driver assignment and trip scheduling, trip logs with pickup/drop details, maintenance reminders, and admin dashboard for fleet overview and operational tracking."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Inventory Management System — Household + Workshop + SaaS Ready"
                description="A barcode-driven inventory system for personal household use and workshop storage, designed to scale into a multi-organization SaaS. Features include product management with images and categories, check-in/check-out workflow with logs, barcode scanning and generation, location mapping (shelf/box/room/bin), and multi-tenant SaaS with organization-wise segregation. Clean UI designed for fast daily use."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Vibrant Gujarat Regional Meet 2025 — Mehsana (OathKiosk)"
                description="A public-facing kiosk/web app for the Forest Department that collects user pledges and generates instant digital certificates. Features include 10-question pledge flow, certificate generation, multi-language support (Gujarati/English), and exhibition-ready interface optimized for kiosk screens. Designed for rapid usage with minimal friction, handling high concurrent participation during events."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Depth & Dimension — Design & Installation Studio Website"
                description="A portfolio website for a creative design studio focused on art installations, spatial design, sculptures, and immersive environments. The site highlights visual storytelling and craftsmanship, showcasing how artistic depth translates into real-world installations. Features include gallery-driven layout, project-based storytelling, minimal expressive UI, and brand-aligned presentation for exhibitions."
                demoLink="https://mithil1105.github.io/Depth/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="DonateNow — Blood Donation App"
                description="A mobile application that connects blood donors with recipients and hospitals, streamlining blood availability during emergencies. DonateNow centralizes donor information and accessibility. Features include user registration as donor or requester, blood group and location-based matching, donor availability status, fast-access UI for emergency usage, and contact flow between donor and recipient. Built with emergency-driven UX and mobile-first architecture."
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

            <Col md={4} className="project-card">
              <ProjectCard
                title="Nal-Sarovar Interpretation Center Restoration"
                description="Led the restoration and upgrade of interactive panels and technical systems at the Nal-Sarovar Interpretation Center, a key visitor facility at the Nal Sarovar Bird Sanctuary. The project involved comprehensive repair of broken interactive displays, restoration of damaged hardware components, and reconfiguration of systems for reliable operation. Worked on troubleshooting malfunctioning panels, replacing defective components, and ensuring seamless integration with educational exhibits."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Footfall Detection Module — Event & Exhibition Analytics System"
                description="A low-cost, camera-based footfall measurement system for exhibitions and public stalls to estimate visitor count and movement patterns in real time. Developed for government and public exhibition environments where manual counting is impractical. Features include camera-based people detection, works with mixed entry-exit gates, continuous visitor count logging, minimal hardware footprint for quick setup, and scalable logic for multiple entry points. Uses vision-based detection with frame-wise human presence detection and logic to avoid double-counting."
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
                title="Gym Trainer Website — Personal Training & Fitness Platform"
                description="A personal website for gym trainers and fitness coaches to showcase training programs, achievements, and client engagement. Helps trainers establish a professional digital presence and attract clients. Features include trainer profile with certifications, workout plans and training programs, client testimonials and transformation highlights, contact section, and clean energetic UI aligned with fitness branding."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="WardrobeWise — AI Wardrobe Organizer & Outfit Recommendation"
                description="A wardrobe digitization and outfit recommendation system that organizes user clothing photos and helps create combinations. Features include wardrobe item upload and categorization (Traditional/Formal/Western/Casual), outfit recommendation by occasion, and closet organization UX. Technical focus on handling inconsistent angles and multi-layer clothing, with pipeline for segmentation and attribute classification. Future scope includes silhouette matching and try-on visualization."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="AR Menu Visualization — 3D Menu Experience for Cafes/Exhibitions"
                description="An AR/3D menu concept where users can view food items in interactive 3D before ordering. Features include 3D model viewer for menu items (GLB/3D assets), web-based experience via QR scan, and lightweight optimized assets for mobile browsers. Technical focus on hosting 3D assets with fast delivery and mobile performance optimization. Future scope includes AR placement, nutrition overlays, and upsell combos."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                title="Web2Resume (Resume2Web) — Resume to Portfolio Website Generator"
                description="A web tool that converts a resume into a structured portfolio website with projects, skills, and sections ready for deployment. Features include resume parsing with auto-generated portfolio sections, project cards, skills grid, education, achievements, and deploy-ready structure with modern UI. Customization-ready for themes and layout edits. Fast portfolio creation with clean, professional presentation."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
