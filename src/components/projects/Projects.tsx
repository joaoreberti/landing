import React from "react";
import {
  Card,
  CardColumns,
  Button,
  Jumbotron,
  Container,
} from "react-bootstrap";
import gitHubSvg from "../../img/github.svg";
import screenShot from "../../img/Screenshot from 2020-09-07 22-04-55.png";
const Posts = () => {
  const postsList = [
    {
      title: "Source code for this page",
      bodyText: `Project built with React and Bootstrap`,
      source: "https://github.com/joaoreberti/landing",
      date: "07/09/2020",
    },
  ];

  return (
    <div>
      <Jumbotron
        fluid
        className="bg-dark text-light text-center mb-0 pb-5 pt-0"
      >
        <Container>
          <h1 id="blog" className="font-weight-bold">
            Github Projects
          </h1>
        </Container>
      </Jumbotron>
      <Container>
        <div className="row">
          {postsList.map((post, index) => {
            return (
              <div className="col-lg-4 offset-lg-4  offset-md-3 col-md-6 col-sm-12 mb-2 mt-2">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className=""
                  href="https://github.com/joaoreberti/landing"
                >
                  <Card className="">
                    <Card.Img variant="top" src={screenShot} />
                    <Card.Body className="bg-gray ">
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text className="my-p-secondary-2">
                        {post.bodyText.length > 120
                          ? `${post.bodyText.slice(0, 120)} (...).`
                          : `${post.bodyText}`}
                      </Card.Text>
                      <div className=" d-flex flex-row justify-content-between align-items-end">
                        <div className="">{post.date}</div>

                        <img
                          className=" w-25 rounded"
                          alt="github "
                          src={gitHubSvg}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Posts;
