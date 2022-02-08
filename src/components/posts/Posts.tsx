import React from "react";
import "./Posts.css";
import {
  Card,
  Jumbotron,
  Container,
} from "react-bootstrap";

const Posts = () => {
  const postsList = [
    {
      title: "Dealing with Free Remote Access Software during Pandemic Times",
      date: "27/08/2020",
      bodyText: ` I work at a digital marketing/call center company as an "IT guy" - overall handyman. This is my first post and it is my attempt at contributing to the community that has always been very giving to me. This particular situation is almost anecdotal and probably won't help anyone because it's too specific.`,
      source:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png",
    },
  ];

  return (
    <div>
      <Jumbotron
        fluid
        className="bg-light text-dark text-center mb-0 pb-5 pt-0"
      >
        <Container>
          <h1 id="blog" className="font-weight-bold">
            Articles and Posts
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
                  href="https://dev.to/rebertionfire/dealing-with-free-remote-access-software-during-pandemic-times-6mp"
                >
                  <Card className="">
                    <Card.Img
                      variant="top"
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--JiKzMGAq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/kjee7op2fce1vfmlghs3.jpg"
                    />
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
                          alt="dev "
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png"
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
