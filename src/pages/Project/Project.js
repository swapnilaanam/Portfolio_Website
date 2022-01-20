import React from "react";
import { useFetch } from "../../useFetch";

const Project = () => {
  let { loading, data } = useFetch(
    "https://api.github.com/users/swapnilaanam/repos"
  );
  console.log(data);
  return (
    <main>
      <section className="container-fluid" id="project-container">
        <div
          className="w-100 d-flex flex-wrap justify-content-center align-items-start my-5"
          style={{ gap: "3rem 2rem" }}
          id="projects"
        >
          {loading
            ? "loading"
            : data.map((user) => {
                return (
                  <div className="project card bg-secondary text-white" style={{ width: "30%" }}>
                    <div className="card-body">
                      <h4 className="border-bottom pb-2">{user.name}</h4>
                      <p>
                        {user.description
                          ? user.description
                          : "No description available now."}
                      </p>
                      <div className="d-flex mt-4" style={{gap: "0rem 1rem"}}>
                        <a
                          className="btn bg-success text-light"
                          target="_blank"
                          href={user.html_url}
                        >
                          See the code
                        </a>
                        <a
                          className="btn bg-success text-light"
                          target="_blank"
                          href={`https://swapnilaanam.github.io/${user.name}`}
                        >
                          Live Preview
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </main>
  );
};

export default Project;
