import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiAndroid,
  SiApple,
  SiGithub,
  SiMysql,
  SiFirebase,
  SiIntellijidea,
  SiDiscord,
  SiUnity,
  SiAnaconda,
  SiSupabase,
  SiCloudflare,
  SiJupyter,
} from "react-icons/si";
import { AiOutlineRobot, AiOutlineCloudServer } from "react-icons/ai";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiWindows />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiAndroid />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiApple />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Apple (macOS / iOS)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiVisualstudiocode />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiIntellijidea />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>IntelliJ IDEA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiMysql />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>SQL Developer</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiJupyter />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Jupyter Notebook</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <AiOutlineCloudServer />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Google Colab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiAnaconda />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <DiGit />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiGithub />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiGithub />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>GitHub Actions</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiPostman />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiVercel />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiFirebase />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Firebase Console</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiSupabase />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Supabase Dashboard</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiCloudflare />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Cloudflare Workers & R2</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiSlack />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiDiscord />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Discord</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <AiOutlineRobot />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>ChatGPT</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
