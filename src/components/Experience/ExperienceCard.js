import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";

function ExperienceCard({ title, company, duration, location, description }) {
    return (
        <Card className="quote-card-view"
            style={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
                color: "white",
                opacity: 0.9,
                transition: "all 0.5s ease 0s"
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 4px 4px 5px rgba(129, 72, 144, 0.561)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 5px 3px rgba(119, 53, 136, 0.459)";
            }}
        >
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h3 style={{ fontSize: "1.5em", color: "#c084f5" }}>{company}</h3>
                    <h4 style={{ fontSize: "1.2em", color: "#fff" }}>{title}</h4>
                    {duration && <p style={{ color: "#868e96" }}>{duration}</p>}
                    {location && (
                        <p style={{ color: "#868e96" }}>
                            <MdLocationOn /> {location}
                        </p>
                    )}

                    <ul style={{ marginTop: "20px" }}>
                        {description.map((point, index) => (
                            <li key={index} className="about-activity">
                                <ImPointRight /> {point}
                            </li>
                        ))}
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard; 