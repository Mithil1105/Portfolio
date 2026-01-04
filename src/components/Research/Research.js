import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Research() {
    return (
        <div>
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

                    {/* Journal Papers Section */}
                    <h2 className="project-heading" style={{ color: "#c084f5", fontSize: "1.8em" }}>
                        Journal Papers
                    </h2>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Plant diseases classification with Spectral Signature Taxonomy & Analysis Software (SSTAS)"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Published in: Elsevier SoftwareX
                                        </div>
                                        <div>
                                            This research introduces a spectroscopy-based classification technique for detecting non-visible plant diseases. Utilizing spectral signatures (400-1000 nm) collected over 15 months at Anand Agriculture University and Charotar University Space Research Centre, the SSTAS Software with Deep-Spectro model demonstrated superior accuracy in mango disease detection, overcoming limitations of traditional visual-based methods.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://authors.elsevier.com/sd/article/S2665963825000041"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Symptom-based early detection and classification of plant diseases using AI-driven CNN+KNN Fusion Software (ACKFS)"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Published in: Elsevier SoftwareX
                                        </div>
                                        <div>
                                            This paper introduces ACKFS, integrating CNN and KNN for enhanced plant disease classification. Following a four-phase process, the system achieved remarkable accuracy improvements: 94.56% and 87.52% on two datasets. The research demonstrates the effectiveness of CNN-KNN fusion for real-time disease detection on smart devices, advancing precision agriculture.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://doi.org/10.1016/j.simpa.2025.100755"
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
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Presented at: ISBM 2024 Thailand
                                        </div>
                                        <div>
                                            This study explores the classification of lime diseases using advanced machine learning models and spectrometry data. We employed LSTM, RNN, and BiLSTM networks combined with SVM, KNN, and XGBoost classifiers. The LSTM model achieved 99.96% precision, while BiLSTM with classifiers reached up to 99.9816% precision. Our models excelled in sensitivity (99.96%) and specificity (99.78%), significantly surpassing previous studies.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://drive.google.com/file/d/1lOCyKHfuw1ffLmGR_-38QNtgoqzC8gYs/view?usp=drive_link"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Anomaly Detection in Industrial Machines Using Echo State Networks"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Presented at: ICT4SD 2025 Goa
                                        </div>
                                        <div>
                                            This paper explores Echo State Networks (ESNs) for detecting anomalies in industrial machinery through time-series sensor data analysis. ESNs offer computational efficiency and effectiveness in modeling temporal dependencies, achieving high accuracy with lower computational overhead compared to traditional RNNs, making them ideal for real-time industrial applications.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://docs.google.com/document/d/1Hl_Pn-rhUKT45wC0_RG7IbtWYWqZZQ8p/edit?usp=drive_link&ouid=116351027586430011941&rtpof=true&sd=true"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Obesity Level Prediction Using Machine Learning"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Presented at: ICICT 2025 LONDON
                                        </div>
                                        <div>
                                            This research utilizes a stacking ensemble model combining Random Forest, Gradient Boosting, SVM, and Neural Networks to predict obesity levels. The model achieved 96.69% accuracy using diverse population datasets. Key features were identified through Recursive Feature Elimination, demonstrating the potential of data-driven techniques in personalized obesity management.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://drive.google.com/file/d/1iZTdFtRRlPspZ4Zs2IeMnuaK4pEwugng/view?usp=drive_link"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Automated Detection of Potholes and Speed Bumps Using Deep Learning"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Presented at: ICICT 2025 LONDON
                                        </div>
                                        <div>
                                            This study implements EfficientNetB0 for road surface monitoring, achieving 91.91% validation accuracy. The model was trained on 400 annotated images under diverse conditions, utilizing advanced data augmentation and regularization techniques. The research demonstrates the potential of deep learning in improving road safety and maintenance efficiency.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://drive.google.com/file/d/1ME4uwQfUke4F6BPUvxJfyBvvPnBp7wV8/view?usp=drive_link"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Predictive Analysis of Apple Stock Market Trends"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Presented at: SmartCom 2025 - Pune
                                        </div>
                                        <div>
                                            This research analyzes Apple stock market trends using various ML models including Logistic Regression, XGBoost, Neural Networks, RNN, LSTM, and ARIMA. Analyzing data from 2014-2024, the study achieved 96.50% accuracy with LSTM and 90.91% with ARIMA, demonstrating ML's potential in stock price prediction.
                                        </div>
                                    </div>
                                }
                                googleDriveLink="https://drive.google.com/file/d/1G1qd0T1BkEx7Vu3qoSPsJaytSL9DPeU8/view?usp=drive_link"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Signature fraud detection using cnn"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Status: In Progress
                                        </div>
                                        <div>
                                            [Description placeholder - to be updated]
                                        </div>
                                    </div>
                                }
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCard
                                title="Career path prediction using ml"
                                description={
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            fontSize: "0.85em",
                                            color: "#c084f5",
                                            marginBottom: "8px",
                                            fontStyle: "italic"
                                        }}>
                                            Status: In Progress
                                        </div>
                                        <div>
                                            [Description placeholder - to be updated]
                                        </div>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Research; 