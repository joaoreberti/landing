import React from "react";
import "./SkillsTable.css";
import { Table, Jumbotron, Container } from "react-bootstrap";
import frontEndSvg from "../../img/code.svg";
import backEndSvg from "../../img/platform.svg";
import flexSvg from "../../img/flex.svg";
const SkillsTable = () => {
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
          <h1 className="font-weight-bold">Full Stack Developer</h1>
          <p>
            I strive to deliver the needs of the client in an innovative fashion
            <br />
            With curiosity as my fuel, expect commitment and out of the box
            ideas.
          </p>
        </Container>
      </Jumbotron>
      <Table className=" text-dark  text-center ">
        <thead>
          <tr className="row-tittle  border-none ">
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
            <th className="border-top-0">
              <img src={flexSvg} className="icons m-4" alt="front end coding" />
              <p>
                <b>Other Skills</b>
              </p>
              <hr className="line-skills" />
            </th>
          </tr>
        </thead>
        <tbody className="border-none">
          {frontEndSkills.length >= backEndSkills.length &&
            frontEndSkills.map((skill: string, index: number) => {
              return (
                <tr key={index / 3} className="">
                  <td key={index + 1} className="table-cell-hover ">
                    {skill}
                  </td>

                  <td key={-index} className="table-cell-hover border-left">
                    {backEndSkills[index]}
                  </td>
                  <td key={-index} className="table-cell-hover border-left">
                    {otherSkills[index]}
                  </td>
                </tr>
              );
            })}
          {backEndSkills.length > frontEndSkills.length &&
            backEndSkills.map((skill: string, index: number) => {
              return (
                <tr>
                  <td key={index + 1} className="table-cell-hover ">
                    {frontEndSkills[index]}
                  </td>
                  <td key={-index} className="table-cell-hover border-left">
                    {skill}
                  </td>
                  <td key={-index} className="table-cell-hover border-left">
                    {otherSkills[index]}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default SkillsTable;
