import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <div className="container-fluid py-2 px-5">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                Covid-19 API:{" "}
                <a
                  href="https://about-corona.net/documentation"
                  target="_Blank"
                  className="text-white"
                  rel="noopener noreferrer"
                >
                  https://about-corona.net/documentation
                </a>
              </p>
              Created using:
            </div>
            <div className="col-12 col-md-9 mx-auto">
              <div className="row row-cols-2 row-cols-lg-3">
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://www.w3schools.com/html/html5_intro.asp"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-html5 fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">HTML5</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://www.w3schools.com/css/"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-css3-alt fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">CSS3</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-bootstrap fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">Bootstrap</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://sass-lang.com/documentation"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i className="fab fa-sass fa-2x" aria-hidden="true"></i>
                        <p className="card-text">Sass</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://reactjs.org/docs/getting-started.html"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-react fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">React JS</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://recharts.org/en-US/api"
                      className="text-white"
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fas fa-chart-line fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">Recharts</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                href="https://github.com/jimolina/covid19-react-app"
                className="text-white"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <p className="card-text">
                Get the code in{" "}
                <a
                  href="https://github.com/jimolina/covid19-react-app"
                  className="text-white"
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-3 text-center text-md-left logo">
              JM
            </div>
            <div className="col-12 col-md-9 title text-center text-md-right">
              COVID-19 Info: React Example Code |{" "}
              <a
                href="http://josemolinaresume.com"
                target="_Blank"
                className="text-white"
                rel="noopener noreferrer"
              >
                <u>josemolinaresume.com</u>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
