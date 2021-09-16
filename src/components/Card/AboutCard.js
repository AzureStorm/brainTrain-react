import React from "react";

const AboutCard = ({ devInfo }) => {
  const renderedInfo = devInfo.map((info) => {
    return (
      <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
        <div class="card card-blog card-plain">
          <div class="position-relative">
            <a class="d-block shadow-xl border-radius-xl">
              <img
                src="./home-decor-1.jpg"
                alt="img-blur-shadow"
                class="img-fluid shadow border-radius-xl"
              />
            </a>
          </div>
          <div class="card-body px-1 pb-0">
            <p class="text-gradient text-dark mb-2 text-sm">{info.workTitle}</p>
            <a href="javascript:;">
              <h5>{info.name}</h5>
            </a>
            <p class="mb-4 text-sm">{info.userInfo}</p>
          </div>
        </div>
      </div>
    );
  });

  return renderedInfo;
};

export default AboutCard;
