import React from "react";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner-container" className="d-flex container-fluid m-0 p-0">
      <img src="assets/navdesign.png" className="position-absolute" />
      <img src="assets/dot.png" className="position-absolute" id="banner-dot" />
      <div
        id="banner-left"
        className="bg-white d-flex justify-content-center align-items-center"
      >
        <div
          id="banner-left-name"
          className="d-flex flex-column justify-content-center align-items-start mt-5"
        >
          <p className="fs-1">Oh Hii 😉 </p>
          <div className="d-flex justify-content-center ms-5">
            <p className="fs-2">I'm </p>
            <div id="name-placer" className="ps-3">
              <div className="name">
                <p className="fs-2">Swapnil Aanam</p>
              </div>
              <div className="name">
                <p className="fs-2">Full Stack Developer</p>
              </div>
              <div className="name">
                <p className="fs-2">Developer By 🤯, Dreamer By 💙</p>
              </div>
              <div className="name">
                <p className="fs-2">Swapnil Aanam</p>
              </div>
            </div>
          </div>
          <p className="fs-2 mt-4">Most beatiful things are built simply !</p>
          <p className="fs-5">
            I prefer building complex and beatiful solutions in the most simple
            way !
          </p>
          <Link
            to="/hire"
            className="btn btn-lg bg-success px-4 mt-3 text-white"
          >
            Hire
            <span className="ms-2">
              <i class="bi bi-arrow-right-square-fill"></i>
            </span>
          </Link>
        </div>
      </div>
      <div id="banner-right" className="d-flex position-relative">
        <img src="assets/man.png" width={500} height={470} alt="man" />
        <img
          src="assets/mern.png"
          width={150}
          height={100}
          alt="mern stack"
          className="position-absolute"
        />
        <img
          src="assets/code.png"
          width={200}
          height={160}
          alt="code"
          className="position-absolute"
        />
        <img
          src="assets/react.png"
          width={150}
          height={150}
          alt="react"
          className="position-absolute"
        />
        <img
          src="assets/html.png"
          width={140}
          height={55}
          alt="html"
          className="position-absolute"
        />
        <img
          src="assets/js.png"
          width={70}
          height={70}
          alt="js"
          className="position-absolute"
        />
        <img
          src="assets/polygon.png"
          height={500}
          alt="polygon"
          className="position-absolute"
        />
      </div>
    </section>
  );
};

export default Banner;
