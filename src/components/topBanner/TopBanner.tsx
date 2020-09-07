import React from "react";
import "./TopBanner.css";
import fotoPerfil from "../../img/perfil.jpeg";

import { Jumbotron, Button } from "react-bootstrap";
const TopBanner = () => {
  return (
    <div className="container  pt-5">
      <div className="row">
        <Jumbotron className="bg-dark mr-auto text-light  col-xl-6 col-lg-7 col-md-12 col-sm-12">
          <h1 className="my-h1">
            Hello, I'm <b>João Reberti</b>
          </h1>
          <h5 className="my-p-primary">
            I'm here to help you achieve your professional and personal goals.
          </h5>
          <hr className="  bg-light " />

          <p className="my-p-secondary">
            The range of work I've done in just one year includes developing
            landing pages, managing databases and automatizing repetitive
            processes.
          </p>
          <p>
            <Button variant="primary">
              <a href="mailto:joaoreberti@gmail.com">Say Hi!</a>
            </Button>
          </p>
        </Jumbotron>
        <hr className="vertical-line" />
        <figure className=" col-xl-5 col-lg-4 m-1 col-md-12 col-s-12 d-flex flex-column  justify-content-center">
          <picture>
            <source srcSet={fotoPerfil} media="(min-width: 1200px)" />
            <source srcSet={fotoPerfil} media="(min-width: 992px)" />
            <source srcSet={fotoPerfil} media="(min-width: 768px)" />
            <source srcSet={fotoPerfil} media="(min-width: 576px)" />

            <img
              className=" colfigure-img  my-picture img-fluid rounded"
              src={fotoPerfil}
              alt="portrait"
            />
          </picture>
        </figure>
      </div>
    </div>
  );
};

export default TopBanner;
