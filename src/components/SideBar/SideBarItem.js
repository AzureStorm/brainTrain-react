import React from "react";

const SideBarItem = ({
  hRef,
  viewBox1,
  title1,
  transform1,
  transform2,
  d1,
  d2,
  d3,
  d4,
  routeLabel,
}) => {
  const onClickButton = (event) => {
    event.preventDefault();
    window.history.pushState([], "", hRef);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  const active = hRef === "." + window.location.pathname ? "active" : "";

  return (
    <li class="nav-item">
      <a onClick={onClickButton} class={`nav-link  ${active} `} href={hRef}>
        <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
          <svg
            class="text-dark"
            width="16px"
            height="16px"
            viewBox={viewBox1}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Basic-Elements"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Rounded-Icons"
                transform={transform1}
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g
                  id="Icons-with-opacity"
                  transform="translate(1716.000000, 291.000000)"
                >
                  <g id="icon" transform={transform2}>
                    <path class="color-background" d={d1} id="Path"></path>
                    <path
                      class="color-background"
                      d={d2}
                      id="Path"
                      opacity="0.7"
                    ></path>
                    <path
                      class="color-background"
                      d={d3}
                      id="Path"
                      opacity="0.7"
                    ></path>
                    <path
                      class="color-background"
                      d={d4}
                      id="Path"
                      opacity="0.7"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <span class="nav-link-text ms-1">{routeLabel}</span>
      </a>
    </li>
  );
};

export default SideBarItem;
