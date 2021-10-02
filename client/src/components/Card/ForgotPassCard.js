import React from "react";

const ForgotPassCard = () => {
  return (
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
      <div class="card-plain mt-4">
        <br />
        <br />
        <br />

        <div class="card-body">
          <form role="form text-left">
            <h3 class="text-center text-dark mb-2">Forgot Password?</h3>
            <div class="mb-0">
              <p>
                <small>
                  <center>
                    <b>
                      We'll send you an email to reset your password
                      successfully.
                    </b>
                  </center>
                </small>
              </p>
            </div>

            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email-addon"
              />
              <button
                id="sign-in"
                type="button"
                class="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#efac2e", color: "white" }}
              >
                Send Confirmation Email
              </button>
              <p class="mb-0" id="last-text" style={{ fontSize: "10.5px" }}>
                Don't have an account?{" "}
                <a
                  href="sign-up.html"
                  class="font-weight-bolder"
                  id="flexCheckDefault"
                  target="_blank"
                  style={{ color: "#efac2e" }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassCard;
