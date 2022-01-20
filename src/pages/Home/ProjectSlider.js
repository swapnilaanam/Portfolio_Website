import React, { useState, useEffect } from "react";

import { useFetch } from "../../useFetch";

import { Swiper, SwiperSlide } from "swiper/react";

import "./../../../node_modules/swiper/swiper.min.css";
import "./../../../node_modules/swiper/modules/effect-cards/effect-cards.min.css";

import "./index.css";

import SwiperCore, { EffectCards } from "swiper/core";

SwiperCore.use([EffectCards]);

const ProjectSlider = () => {
  const [works, setWorks] = useState([]);
  const { loading, data } = useFetch(
    "https://api.github.com/users/swapnilaanam/repos"
  );

  useEffect(() => {
    setWorks(data);
  });

  return (
    <div id="work-slider">
      <header className="fs-3 mt-5 ms-3 bg-light text-dark d-inline-block px-4 py2">
        PROJECTS
      </header>
      <section
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <Swiper effect={"cards"} grabCursor={true} className="mySwiper">
          {loading
            ? "loading"
            : works.map((work) => {
                return (
                  <SwiperSlide className="card">
                    <div className="card-body">
                      <h5>{work.name}</h5>
                      <p className="my-4">
                        {work.description
                          ? work.description
                          : "No description available now."}
                      </p>
                      <div
                        id="links"
                        style={{ display: "flex", gap: "0rem 1rem" }}
                      >
                        <a href={work.html_url} className="btn btn-success">
                          Code
                        </a>
                        <a
                          href={`https://swapnilaanam.github.io/${work.name}`}
                          className="btn btn-success"
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </section>
    </div>
  );
};

export default ProjectSlider;
