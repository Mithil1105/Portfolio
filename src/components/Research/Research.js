import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Research() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ color: "#c084f5" }}>
                    My Recent <strong>Research Work</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are my research contributions and publications.
                </p>
                <p style={{ color: "white" }}>
                    All research papers are SCOPUS-indexed in Springer format and will be indexed soon. Below is a list of my contributions:
                </p>

                {/* Ongoing Papers Section */}
                <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                    Ongoing Papers
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Signature fraud detection using cnn"
                            description="Status: In Progress"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Career path prediction using ml"
                            description="Status: In Progress"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Landslide detection"
                            description="Status: In Progress"
                        />
                    </Col>
                </Row>

                {/* Journal Papers Section */}
                <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                    Journal Papers
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Plant Diseases Classification with Spectral Signature Taxonomy and Analysis Software"
                            description="Published in Springer's Lecture Notes in Networks and Systems"
                            googleDriveLink="https://drive.google.com/link-to-plant-diseases-paper"
                        />
                    </Col>
                </Row>

                {/* Conference Papers Section */}
                <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                    Conference Papers
                </h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Lime Diseases Classification Using ML and Spectrometry"
                            description="99.98% accuracy achieved."
                            googleDriveLink="https://drive.google.com/file/d/1lOCyKHfuw1ffLmGR_-38QNtgoqzC8gYs/view?usp=drive_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Anomaly Detection in Industrial Machines Using Echo State Networks"
                            description=""
                            googleDriveLink="https://docs.google.com/document/d/1Hl_Pn-rhUKT45wC0_RG7IbtWYWqZZQ8p/edit?usp=drive_link&ouid=116351027586430011941&rtpof=true&sd=true"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Obesity Level Prediction Using Machine Learning"
                            description="96.69% accuracy achieved."
                            googleDriveLink="https://drive.google.com/file/d/1iZTdFtRRlPspZ4Zs2IeMnuaK4pEwugng/view?usp=drive_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Automated Detection of Potholes and Speed Bumps Using Deep Learning"
                            description="91.91% validation accuracy achieved."
                            googleDriveLink="https://drive.google.com/file/d/1ME4uwQfUke4F6BPUvxJfyBvvPnBp7wV8/view?usp=drive_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Predictive Analysis of Apple Stock Market Trends"
                            description="96.5% accuracy achieved."
                            googleDriveLink="https://drive.google.com/file/d/1G1qd0T1BkEx7Vu3qoSPsJaytSL9DPeU8/view?usp=drive_link"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Research; 