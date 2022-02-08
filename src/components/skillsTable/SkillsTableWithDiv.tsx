import React from "react";
import "./SkillsTable.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import frontEndSvg from "../../img/code.svg";
import backEndSvg from "../../img/platform.svg";
import flexSvg from "../../img/flex.svg";
const SkillsTableWithDiv = () => {
  const frontEndSkills: string[] = [
    "HTML",
    "CSS",
    "BootStrap",
    "Jquery",
    "Ajax",
    "React",
    "Angular",
  ];
  const backEndSkills: string[] = [
    "NodeJS",
    "PostgreSQL",
    "MongoDB",
    "Express",
    "Sequelize",
    "PM2",
    "Passport",
  ];
  const otherSkills: string[] = [
    "English",
    "Spanish",
    "Excel",
    "Inkscape",
    "Gimp",
  ];

  return (
    <div>
      <Jumbotron fluid className="bg-light text-center mb-0 pb-1 pt-1">
        <Container>
          <h1 id="aboutme" className="font-weight-bold">
            Full Stack Developer
          </h1>
          <p>
            I strive to deliver the needs of the client in an innovative fashion
            <br />
            With curiosity as my fuel, expect commitment and out of the box
            ideas.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="text-center">
          <Col>
            <Row className="d-flex flex-column">
              <th className="border-top-0">
                <img
                  src={frontEndSvg}
                  className="icons m-4"
                  alt="front end coding"
                />
                <p>
                  <b>Front End</b>
                </p>
                <hr className="line-skills" />
              </th>
              {frontEndSkills.map((skill, index) => {
                return (
                  <div key={index + 1} className="table-cell-hover ">
                    {skill}
                  </div>
                );
              })}
            </Row>
          </Col>
          <Col>
            {" "}
            <Row className="d-flex flex-column">
              <th className="border-top-0">
                <img
                  src={backEndSvg}
                  className="icons m-4"
                  alt="front end coding"
                />
                <p>
                  <b>Back End</b>
                </p>
                <hr className="line-skills" />
              </th>
              {backEndSkills.map((skill, index) => {
                return (
                  <div
                    key={index + 1}
                    className="table-cell-hover border-left "
                  >
                    {skill}
                  </div>
                );
              })}
            </Row>
          </Col>
          <Col>
            {" "}
            <Row className="d-flex flex-column">
              <th className="border-top-0">
                <img
                  src={flexSvg}
                  className="icons m-4"
                  alt="front end coding"
                />
                <p>
                  <b>Other Skills</b>
                </p>
                <hr className="line-skills" />
              </th>
              {frontEndSkills.map((skill, index) => {
                return (
                  <div
                    key={index + 1}
                    className={`border-left ${
                      otherSkills[index] ? "table-cell-hover" : "blank"
                    }`}
                  >
                    {otherSkills[index] ? (
                      otherSkills[index]
                    ) : (
                      <span>&nbsp;&nbsp;</span>
                    )}
                  </div>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillsTableWithDiv;
