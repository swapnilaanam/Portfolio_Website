import React from "react";

const Features = () => {
  return (
    <section id="feature-container">
      <header className="fs-3 mt-5 ms-3 bg-dark text-light d-inline-block px-4 py2">SERVICES</header>
      <div className="container">
        <div
          className="d-flex flex-wrap justify-content-center align-items-start"
          id="features"
        >
          <div className="feature">
            <i class="fas fa-pencil-ruler"></i>
            <article className="feature-info">
              <h5 className="fs-4">Custom Design Website</h5>
              <p>
                We provide custom design and coding to make an unnique website
                only for you !
              </p>
            </article>
          </div>
          <div className="feature">
            <i class="fas fa-laptop-code"></i>
            <article className="feature-info">
              <h5 className="fs-4">Front-End, Back-End And Deploy</h5>
              <p>
                We design the Front-End, Code the Back-End And Deploy at your
                favourite address ! All the bakeing at the same place, by the
                same chef !
              </p>
            </article>
          </div>
          <div className="feature">
            <i class="fas fa-headset"></i>
            <article className="feature-info">
              <h5 className="fs-4">Client Support 12/5</h5>
              <p>
                We do provide support to our customer for 15 days after
                deploying their website !
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
