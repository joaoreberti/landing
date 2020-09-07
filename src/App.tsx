import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TopBanner from "./components/topBanner/TopBanner";
import SkillsTableWithDiv from "./components/skillsTable/SkillsTableWithDiv";

import Posts from "./components/posts/Posts";
import Projects from "./components/projects/Projects";
import MyFooter from "./components/footer/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUpCircle } from "react-bootstrap-icons";

function App() {
  let [useScrollToTop, setScrollToTop] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  useEffect(() => {
    window.addEventListener("scroll", () => scrollFunction());

    return () => {
      window.removeEventListener("scroll", () => scrollFunction());
    };
  }, []);

  return (
    <div className="wrapper bg-light">
      <button
        onClick={topFunction}
        id="myBtn"
        className="btn btn-primary"
        style={{ display: `${useScrollToTop ? "block" : "none"}` }}
        title="Go to top"
      >
        {" "}
        <ArrowUpCircle className="arrow-resize" />
      </button>
      <section className="bottom-separator mb-3 ">
        <div className="container fix-container-mobile  ">
          <Navbar />

          <TopBanner />
        </div>
      </section>
      <div className=" bg-dark  wrapper-boddy ">
        <section className="bottom-separator-2 bg-light ">
          <div className=" container ">
            <SkillsTableWithDiv />
          </div>
        </section>
        <section className="  bg-dark pt-4 border-top-0">
          <div className="bg-dark container border-top-0">
            <Projects />
          </div>
        </section>
        <div className="help bg-light"></div>
        <section className="bottom-separator-4 bg-light">
          <section className=" bottom-separator-2  bg-light pt-4 border-top-0">
            <div className="bg-light container border-top-0">
              <Posts />
            </div>
          </section>
        </section>
        {/*         <div className="help-2 bg-light"></div>
         */}
        <section className=" text-light bg-dark pt-4 border-top-0">
          <div className="bg-dark container border-top-0">
            <MyFooter />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
