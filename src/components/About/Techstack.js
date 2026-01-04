import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiArduino,
  SiRaspberrypi,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiFlutter,
  SiUnity,
  SiTypescript,
  SiMysql,
  SiAndroid,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiSupabase,
} from "react-icons/si";
import { FaRobot, FaBrain, FaDatabase, FaChartLine, FaSatellite, FaGlobe } from "react-icons/fa";
import { GiArtificialIntelligence, GiNetworkBars } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";

function Techstack() {
  return (
    <div>
      <h2 className="techstack-title" style={{ textAlign: "center", paddingBottom: "20px" }}>
        My Tech Stack
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <CgCPlusPlus />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>C / C++</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiJava />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Java</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiJavascript1 />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiTypescript />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>TypeScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiPython />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiMysql />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>MySQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiPostgresql />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>PostgreSQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiReact />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiNodejs />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiFlutter />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Flutter</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiAndroid />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Android</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiTensorflow />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>TensorFlow</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiPytorch />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>PyTorch</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaBrain />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Scikit-learn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <GiArtificialIntelligence />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>CNN, RNN, LSTM, GRU</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <GiNetworkBars />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Echo State Networks</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaBrain />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Ensemble Models</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <GiArtificialIntelligence />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Anomaly Detection</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaChartLine />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>SMOTE & Imbalanced Learning</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiNumpy />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>NumPy</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiPandas />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Pandas</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaChartLine />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Matplotlib / Seaborn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaDatabase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Xarray</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaDatabase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Data Cleaning & Feature Engineering</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaGlobe />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Google Earth Engine</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaSatellite />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Sentinel-1 / Sentinel-2</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaSatellite />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>MODIS NDVI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaGlobe />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>NASA Global Landslide Catalog</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaDatabase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>NetCDF Processing</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <GiArtificialIntelligence />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>GeoAI & Time-Series</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiMongodb />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiFirebase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Firebase</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiSupabase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Supabase</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiArduino />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Arduino</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiRaspberrypi />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Raspberry Pi</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaRobot />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>IoT Sensors & Actuators</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <AiOutlineCloudServer />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Camera-Based Monitoring</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaRobot />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Relay Modules & LEDs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiUnity />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Unity Engine</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiUnity />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>AR/VR & Kiosk Systems</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
