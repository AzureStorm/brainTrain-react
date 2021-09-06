import React from "react";

const OverViewCard = ({ text }) => {
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
              <a
                class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                href="categories.html"
              >
                {texts.routeHeader}
                <i
                  class="fas fa-arrow-right text-sm ms-1"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return renderedCard;
};

export default OverViewCard;
