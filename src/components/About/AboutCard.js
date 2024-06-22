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
            from <span className="purple"> Montalban Rizal </span>
            <br />
            I am currently employed as a software design engineer II at Tsukiden Global Solution Inc.
            <br />
            <br />
            I completed my Bachelor's degree in Information Technology at Colegio de Montalban from 2015 to 2019.
            <br />
            <br />
            I am aspiring to become a freelance software developer and am seeking clients interested in my skill set. 
            <br />
            I have handled numerous projects, but they are too confidential to post on my personal website.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
