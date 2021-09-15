import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "../Link";

const OverViewCard = ({ text, selectedRoute }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedPath = (texts) => {
    if (selectedRoute === "./categories") {
      return (
        <Button variant="warning" onClick={handleShow}>
          <Link
            class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
            href={selectedRoute}
          >
            {texts.routeHeader}
            <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
          </Link>
        </Button>
      );
    } else {
      return (
        <Button variant="warning" onClick={handleShow}>
          {texts.routeHeader}
          <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
        </Button>
      );
    }
  };

  const renderedCard = text.map((texts) => {
    return (
      <div class="col-lg-6 mt-4">
        <div class="card h-100 p-3">
          <div
            class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            style={{ backgroundImage: `url(${texts.pic}.png)` }}
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
              <h5 class="text-white font-weight-bolder mb-4 pt-2">
                {texts.head}
              </h5>
              <p class="text-white">{texts.details}</p>
              {selectedPath(texts)}
            </div>
          </div>
        </div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select Difficulty</Modal.Title>
            </Modal.Header>
            <Modal.Body>Choose Easy, Medium, or Hard!</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                <Link
                  class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                  href={selectedRoute}
                >
                  Easy
                  <i
                    class="fas fa-arrow-right text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Medium
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Hard
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  });

  /**
   *
   */

  return renderedCard;
};

export default OverViewCard;
