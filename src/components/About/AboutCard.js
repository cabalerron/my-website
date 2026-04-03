import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Erron Monteverde </span>
            from <span className="purple">  Montalban, Rizal</span>
            <br />I have experience in <strong>software development</strong> and
            a strong passion for coding and creating meaningful applications.
            <br />
            <br />I have worked on various projects across different domains,
            using tools and technologies such as
            <span className="purple">
              {" "}
              Java Spring Boot, React, TypeScript, Redux, PostgreSQL, MySQL, SQL
              Server, Postman, Git, CI/CD, RESTful API integration, unit
              testing, integration testing
            </span>
            , and more. I have applied these skills in all aspects of the
            projects I handle.
            <br />
            <br />
            I’m looking to connect with people who are interested in my{" "}
            <strong>skill set</strong> and open to{" "}
            <strong>collaborations on projects</strong>. I have handled numerous
            projects; however, most of them are confidential. You can view some
            of my work on my GitHub profile:
            <a
              href="https://github.com/cabalerron"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
            >
              https://github.com/cabalerron
            </a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
            <br />
            - Playing games
            <br />
            - Riding motorcycles
            <br />
            - Traveling
            <br />- Social gatherings and parties
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Rides
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Party
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We have to live a life of no regrets."{" "}
          </p>
          <footer className="blockquote-footer">Portgas D. Ace </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
