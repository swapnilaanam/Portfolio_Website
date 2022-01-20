import React from "react";

import './css/about.css';

const About = () => {
  return (
    <main>
      <section className="container-fluid d-flex justify-centent-center align-items-center" id="about-container">
        <div id="about" className="py-5 d-flex justify-content-evenly align-items-center w-100 text-white">
          <div id="image-container" className="bg-warning p-4 shadow-lg">
            <img src="https://avatars.githubusercontent.com/u/55851991?s=400&u=aa9aa135ae59cb26beec1afee06ef705e8952169&v=4" alt="Swapnil Aanam" />
          </div>
          <div id="about-details">
            <h1>Swapnil Aanam</h1>
            <p>📚 B.Sc In CSE</p>
            <p>👨‍🎓 Metropolitan University, Sylhet</p>
            <p>
              🎯 MERN Stack, Javascript, CSS, Bootstrap, Html., Php, C++,
              Python, SQL database.
            </p>
            <p>
              💼 Freelancer
            </p>
            <a
              href="mailto:swapnilaanam211@gmail.com"
              className="btn btn-success my-4"
            >
              Ping Through Mail <i class="bi bi-envelope"></i>
            </a>
            <div className="d-flex align-items-center mt-4">
              <h5>Find Me On: </h5>
              <span id="social-media" className="d-flex ms-2 align-items-center" style={{gap: "0 1rem"}}>
                <a
                  href="https://www.facebook.com/swapnilaanamZV"
                  className="btn btn-success"
                >
                  Facebook <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://github.com/swapnilaanam"
                  className="btn btn-success"
                >
                  GitHub <i class="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-ashraf-ul-aanam-swapnil/"
                  className="btn btn-success"
                >
                  LinkedIn <i class="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/c/SwapnilAanamYoutubeChannel"
                  className="btn btn-success"
                >
                  Youtube <i class="bi bi-youtube"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
