import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "../Link";

const SignUpCard = () => {
  const [firstName, selectFirstName] = useState("");
  const [lastName, selectLastName] = useState("");
  const [email, selectEmail] = useState("");
  const [password, selectPassword] = useState("");
  const [show, setShow] = useState(false);
  const [statement, selectStatement] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onRegisterSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      selectStatement("Empty field");
    } else {
      selectStatement("Thank you for signing up!");

      axios
        .post(`/api/register`, {
          email: email,
          username: `${firstName} ${lastName}`,
          password: password,
        })
        .then((res) => {});
    }
    handleShow();
  };
  {
  }
  return (
    <>
      <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
        <div className="card-plain mt-4">
          <br />
          <br />
          <br />

          <div className="card-body">
            <form role="form text-left" onSubmit={onRegisterSubmit}>
              <h3 className="font-weight-bolder text-info text-gradient text-center">
                Create an account.
              </h3>
              <br />

              <button
                id="google"
                type="button"
                className="btn w-100 mb-0"
                style={{
                  color: "#4c6bff",
                  border: "1px solid #4c6bff",
                  backgroundColor: "white",
                }}
              >
                <i className="fa fa-google-plus-square">&nbsp;</i> Sign up with
                Google
              </button>
              <div className="mb-3">
                <p>
                  <small>
                    <center>OR</center>
                  </small>
                </p>
              </div>
              <div className="mb-3">
                <input
                  onChange={(event) => {
                    selectFirstName(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="Name"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(event) => {
                    selectLastName(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Name"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(event) => {
                    selectEmail(event.target.value);
                  }}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={(event) => {
                    selectPassword(event.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                />
              </div>
              <div className="form-check form-check-info text-left">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                  style={{ color: "#4c6bff" }}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  I agree to the{" "}
                  <a
                    href="javascript:;"
                    className="font-weight-bolder"
                    id="flexCheckDefault"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                onClick={onRegisterSubmit}
                id="register"
                type="button"
                className="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#4c6bff", color: "white" }}
              >
                REGISTER
              </button>
              <p className="mb-0" id="last-text" style={{ fontSize: "10.5px" }}>
                Already have an account?{" "}
                <a
                  href="sign-in.html"
                  className="font-weight-bolder"
                  id="flexCheckDefault"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n9">
          <img
            src="/img/background/books.png"
            id="books"
            height="658"
            style={{ paddingLeft: "100px" }}
          />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>{statement}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {statement === "Thank you for signing up!" ? (
                <Link href="/">Go back to homepage</Link>
              ) : (
                <>Close</>
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SignUpCard;
