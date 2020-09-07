import React from "react";
import "./MyFooter.css";
import { Jumbotron, Container } from "react-bootstrap";

import linkedinSVG from "../../img/145807.svg";
import githubSVG from "../../img/github.svg";
import devSVG from "../../img/dev-badge.svg";
import gmailSVG from "../../img/gmail.svg";

const MyFooter = () => {
  return (
    <Container>
      <div id="contact" className="main-footer">
        <div className="container">
          <div className="">
            <Jumbotron
              fluid
              className=" text-light bg-dark text-center mb-0 pb-5 pt-0"
            >
              <Container>
                <h1 className="font-weight-bold">Get in Touch</h1>
                <p>Page built with React and Bootstrap</p>
              </Container>
            </Jumbotron>
            <div className="">
              <ul className="list-unstyled row justify-content-center">
                <li>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/joaoreberti/"
                  >
                    {" "}
                    <img
                      src={linkedinSVG}
                      alt="linkedin profile"
                      className="icons"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/joaoreberti"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      src={githubSVG}
                      alt="github profile"
                      className="icons"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.to/rebertionfire"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img src={devSVG} alt="dev.to profile" className="icons" />
                  </a>
                </li>
                <li>
                  <a href="mailto:joaoreberti@gmail.com">
                    {" "}
                    <img src={gmailSVG} alt="email" className="icons" />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="footer-bottom text-center">
            <p className="text-xs-center pb-4 mb-0">
              All Rights Reserved &copy;{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyFooter;
