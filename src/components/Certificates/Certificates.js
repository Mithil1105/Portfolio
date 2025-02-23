import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import certificates
import pythonCert from "../../Assets/Certificates/automating python certificate.pdf";
import awsCert from "../../Assets/Certificates/AWS Certificate.pdf";
import aiCert from "../../Assets/Certificates/Intro to generative AI.pdf";
import redhatCert from "../../Assets/Certificates/Red hat OS certificate.pdf";
import teachnookCert from "../../Assets/Certificates/Teachnook COURSE Completion Certificate _ Mithil Mistry.pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Certificates() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const certificates = [
        {
            title: "Python Automation",
            issuer: "Google",
            pdf: pythonCert
        },
        {
            title: "AWS Certification",
            issuer: "Amazon Web Services",
            pdf: awsCert
        },
        {
            title: "Generative AI",
            issuer: "Google Cloud",
            pdf: aiCert
        },
        {
            title: "Red Hat OS",
            issuer: "Red Hat",
            pdf: redhatCert
        },
        {
            title: "Machine Learning",
            issuer: "Teachnook",
            pdf: teachnookCert
        }
    ];

    return (
        <div>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1 className="project-heading" style={{ color: "#c084f5" }}>
                        My <strong>Certificates</strong>
                    </h1>
                    <p style={{ color: "#dcdcdc" }}>
                        Here are my achievements and certifications
                    </p>

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        {certificates.map((cert, index) => (
                            <Col md={6} key={index} style={{ padding: "20px" }}>
                                <div style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
                                    padding: "20px",
                                    borderRadius: "5px",
                                    transition: "all 0.5s ease 0s",
                                    height: "500px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}>
                                    <div>
                                        <h4 style={{
                                            color: "#c084f5",
                                            textAlign: "center",
                                            marginBottom: "10px",
                                            fontSize: "1.5rem"
                                        }}>
                                            {cert.title}
                                        </h4>
                                        <p style={{
                                            color: "#868e96",
                                            textAlign: "center",
                                            fontSize: "1rem",
                                            marginBottom: "20px"
                                        }}>
                                            {cert.issuer}
                                        </p>
                                    </div>

                                    <div style={{
                                        flex: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden"
                                    }}>
                                        <Document file={cert.pdf} className="d-flex justify-content-center">
                                            <Page
                                                pageNumber={1}
                                                scale={width > 786 ? 0.7 : 0.4}
                                                renderTextLayer={false}
                                            />
                                        </Document>
                                    </div>

                                    <div className="mt-3 d-flex justify-content-center">
                                        <Button
                                            variant="primary"
                                            href={cert.pdf}
                                            target="_blank"
                                            style={{ maxWidth: "250px" }}
                                        >
                                            <AiOutlineDownload />
                                            &nbsp;Download
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Certificates; 