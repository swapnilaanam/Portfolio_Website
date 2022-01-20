import React, { useState, useEffect } from "react";

const Hire = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzCPld1MHSDp80xU8wGPYpn_g4ihboJI133D939s-Pbk8I_FaMO/exec";
    const form = document.forms["google-sheet"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) =>
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        )
        .catch((error) => console.error("Error!", error.message));
    });
  });
  return (
    <main>
      <section className="container">
        <header className="display-2 text-center border-bottom py-3">
          Order Form
        </header>
        <div id="hire" className="d-flex justify-content-center w-100">
          <form
            method="post"
            name="google-sheet"
            className="py-5 d-flex justify-content-center align-items-center flex-column w-100"
          >
            <div className="row mb-4 w-100">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name:
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-4 w-100">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-4 w-100">
              <label htmlFor="date" className="col-sm-2 col-form-label">
                Date:
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-4 w-100">
              <label htmlFor="service" className="col-sm-2 col-form-label">
                Service:
              </label>
              <div className="col-sm-6">
                <select className="form-select" id="service" name="service">
                  <option selected value="Custom Website">
                    Custom Website
                  </option>
                  <option value="Static Website">Static Website</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success align-self-start mt-4"
              style={{ width: "15rem" }}
            >
              Hire
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Hire;
