import React from "react";

const Footer = () => {
  return (
    <div class="row mt-4">
      <footer class="footer pt-3  ">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                © {new Date().getFullYear()}, made with{" "}
                <i class="fa fa-heart"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Creative Tim
                </a>
                for a better web.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
