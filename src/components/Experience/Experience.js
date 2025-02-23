import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ color: "#c084f5" }}>
                    My <strong>Experience</strong>
                </h1>
                <p style={{ color: "#dcdcdc" }}>
                    Here's a glimpse of my professional journey and experiences.
                </p>

                {/* Internships Section */}
                <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                    Internships
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="Hidden Brains"
                            title="Application Development Intern"
                            duration="May 2024 - June 2024"
                            location="Ahmedabad, India"
                            description={[
                                "Implemented features in 'Clean Rides' app, optimizing user interactions by 20%",
                                "Enhanced development skills in Dart, Flutter, and Firebase",
                                "Collaborated with development team to deliver high-quality solutions"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="Charusat Space Research Center"
                            title="Research Intern"
                            duration="May 2024 - June 2024"
                            location="Anand, India"
                            description={[
                                "Contributed to research projects and supported technical operations",
                                "Worked on research papers and technical documentation",
                                "Gained hands-on experience in space research technologies"
                            ]}
                        />
                    </Col>
                </Row>

                {/* Extra Curriculars Section */}
                <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                    Extra Curriculars & Leadership
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="Arthyantra (CHARUSAT Economic Club)"
                            title="Founder and Joint President"
                            duration="2022 - Present"
                            description={[
                                "Led CHARUSAT's Economics Club, organizing financial literacy events",
                                "Managed club operations and strategic planning",
                                "Coordinated with stakeholders for event execution",
                                "Developed and implemented innovative programs for member engagement"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="The Rotaract Club of CHARUSAT"
                            title="Treasurer"
                            duration="2022 - Present"
                            description={[
                                "Managed budgeting and coordinated community service initiatives",
                                "Organized and executed community outreach programs",
                                "Maintained financial records and handled fund allocations"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="Lawn Tennis"
                            title="Sports Achievement"
                            description={[
                                "Reached quarter-finals in a state-level Lawn Tennis tournament",
                                "Volunteered in organizing junior level competitions",
                                "Developed leadership and team management skills through sports"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            company="Classical Music"
                            title="Musical Achievement"
                            description={[
                                "Achieved distinction in nine Classical Music exams",
                                "Proficient in playing multiple instruments",
                                "Demonstrated dedication and continuous learning in musical pursuits"
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Experience; 