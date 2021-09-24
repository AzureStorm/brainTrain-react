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
  const [confirmPassword, selectConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [statement, selectStatement] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onRegisterSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      selectStatement("Empty field");
    } else if (password != confirmPassword) {
      selectStatement("Password do not match!");
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

  return (
    <div class="card card-plain mt-8">
      <div class="card-header pb-0 text-left bg-transparent">
        <h3 class="font-weight-bolder">Sign up</h3>
        <p class="mb-0">Create a Brain Train account</p>
      </div>
      <div class="card-body">
        <form role="form text-left" onSubmit={onRegisterSubmit}>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectFirstName(event.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="Name"
              aria-describedby="email-addon"
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectLastName(event.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Name"
              aria-describedby="email-addon"
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectEmail(event.target.value);
              }}
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email-addon"
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectPassword(event.target.value);
              }}
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="password-addon"
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectConfirmPassword(event.target.value);
              }}
              type="password"
              class="form-control"
              placeholder="Confirm password"
              aria-label="Password"
              aria-describedby="password-addon"
            />
          </div>
          <div class="form-check form-check-info text-left">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
            />
            <label class="form-check-label" for="flexCheckDefault">
              I agree to the{" "}
              <a href="javascript:;" class="text-dark font-weight-bolder">
                Terms and Conditions
              </a>
            </label>
          </div>
          <div class="text-center">
            <button
              type="submit"
              onClick={onRegisterSubmit}
              type="button"
              class="btn bg-gradient-dark w-100 my-4 mb-2"
            >
              Sign up
            </button>
          </div>
          <div class="mt-2 position-relative text-center">
            <p class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
              or
            </p>
          </div>
          <div class="text-center">
            <a href="/auth/google">
              <button type="button" class="btn w-100 mt-4 mb-0">
                <i class="fa fa-google-plus"> </i> Sign up with Google
              </button>
            </a>
          </div>
          <p class="text-sm mt-3 mb-0">
            Already have an account?
            <a href="javascript:;" class="text-dark font-weight-bolder">
              Sign in
            </a>
          </p>
        </form>
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
  );
};

export default SignUpCard;
