import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const Recover = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email_forgot"));
  const [password, setPassword] = useState("");

  const handleClose = () => (setShow(false), window.location.assign("/"));
  const handleShow = () => setShow(true);

  const onButtonClick = () => {
    axios
      .post("api/new_password", { email: email, password: password })
      .then((res) => {
        localStorage.removeItem("email_forgot");
        handleShow();
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onButtonClick();
  };

  return (
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
      <div class="card-plain mt-4">
        <div class="card-body">
          <form role="form text-left" onSubmit={(e) => onFormSubmit(e)}>
            <h3 class="text-center text-dark mb-2">Change Password</h3>
            <div class="mb-0">
              <p>
                <small>
                  <center>
                    <b>Change Password of Brain Train Account: {email}</b>
                  </center>
                </small>
              </p>
            </div>

            <div class="mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                class="form-control"
                placeholder="New Password"
                aria-label="Email"
                aria-describedby="email-addon"
              />
              <button
                onClick={() => onButtonClick()}
                id="sign-in"
                type="button"
                class="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#efac2e", color: "white" }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We have changed your account's password successfully.</p> Please
          log-in to Brain Train
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recover;
