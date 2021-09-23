import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Link from "../Link";
import Modal from "react-bootstrap/Modal";

const SignInCard = () => {
  const [email, selectEmail] = useState("");
  const [password, selectPassword] = useState("");
  const [show, setShow] = useState(false);
  const [statement, selectStatement] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginSubmit = () => {
    if (email === "" || password === "") {
      selectStatement("Empty field");
      handleShow();
    } else {
      axios
        .post(`/api/login`, { username: email, password: password })
        .then((res) => {
          console.log("Hello");
          console.log(res);
        });
    }
  };

  return (
    <div class="card card-plain mt-8">
      <div class="card-header pb-0 text-left bg-transparent">
        <h3 class="font-weight-bolder text-info text-gradient">Sign in</h3>
        <p class="mb-0">Login using your Brain Train account</p>
      </div>
      <div class="card-body">
        <div class="text-center">
          <form action="/auth/google">
            <button type="submit" class="btn w-100 mt-4 mb-0">
              <i class="fa fa-google-plus"> </i> Sign in with Google
            </button>
          </form>
        </div>
        <div class="mt-2 position-relative text-center">
          <p class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
            or
          </p>
        </div>
        <form role="form">
          <label>Email</label>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectEmail(event.target.value);
              }}
              id="username"
              type="email"
              name="username"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email-addon"
            />
          </div>
          <label>Password</label>
          <div class="mb-3">
            <input
              onChange={(event) => {
                selectPassword(event.target.value);
              }}
              type="text"
              id="password"
              name="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="password-addon"
            />
          </div>
          {/**  <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="rememberMe"
              checked=""
            />
            <label class="form-check-label" for="rememberMe">
              Remember me
            </label>
          </div>*/}
          <div class="text-center">
            <input
              onClick={(e) => {
                onLoginSubmit();
              }}
              type="button"
              class="btn bg-gradient-info w-100 mt-4 mb-0"
              value="Log-In"
            />
          </div>
        </form>
      </div>
      <div class="card-footer text-center pt-0 px-lg-2 px-1">
        <p class="mb-4 text-sm mx-auto">
          <a
            href="javascript:;"
            class="text-info text-gradient font-weight-bold"
          >
            Forgot Password?
          </a>
        </p>
        <p class="mb-4 text-sm mx-auto">
          Don't have an account?
          <a href="/sign-up" class="text-info text-gradient font-weight-bold">
            Sign up
          </a>
        </p>
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

export default SignInCard;
