import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import jwtGif from "../../Assets/projects/jwt-auth-erron.gif";

function ProjectShowcase() {
  const [showModal, setShowModal] = useState(false);
  const [activeGif, setActiveGif] = useState(null);

  const projects = [
    {
      title: "JWT Authentication System",
      gif: jwtGif,
      github: "https://github.com/cabalerron/jwt-auth-logins",
      link: "#",
      description:
        "Spring Boot + JWT authentication with login and security features.",
    },
  ];

  const handleOpenModal = (gif) => {
    setActiveGif(gif);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveGif(null);
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="justify-content-center mb-4">
        <h2 className="text-center">🚀 My Personal Projects</h2>
      </Row>

      {/* ✅ GRID FIX */}
      <Row >
        {projects.map((proj, index) => (
          <Col md={6} lg={4} key={index} className="mb-4 d-flex">
            
            {/* ✅ CARD FULL HEIGHT */}
            <Card
              className="bg-dark text-light"
              style={{
                width: "300px", // slightly bigger than GIF
                height: "350px", // full height of column
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
              }}
            >
              <Card.Body
                style={{
                  padding: "0.9rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <p style={{ margin: 0 }}>{proj.title}</p>

                  <div className="d-flex gap-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                      style={{ fontSize: "1.2rem" }}
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>

                {/* ✅ GIF PREVIEW */}
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenModal(proj.gif)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.firstChild.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.firstChild.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={proj.gif}
                    alt={proj.title}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* DESCRIPTION */}
                <Card.Text
                  style={{
                    fontSize: "0.9rem",
                    color: "#ccc",
                    marginTop: "10px",
                    flexGrow: 1, // ✅ pushes layout evenly
                  }}
                >
                  {proj.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ✅ MODAL (FULL VIEW) */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body style={{ background: "#111", padding: "10px" }}>
          {activeGif && (
            <img
              src={activeGif}
              alt="Preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ProjectShowcase;