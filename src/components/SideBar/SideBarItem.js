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

  return (
    <li class="nav-item">
      <a onClick={onClickButton} class={`nav-link   `} href={hRef}>
        <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
          <svg
            width="12px"
            height="12px"
            viewBox={viewBox1}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>{title1}</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform={transform1} fill="#FFFFFF" fillRule="nonzero">
                <g transform="translate(1716.000000, 291.000000)">
                  <g id="office" transform={transform2}>
                    <path class="color-background opacity-6" d={d1}></path>
                    <path class="color-background" d={d2}></path>
                    <path class="color-background opacity-6" d={d3}></path>
                    <path class="color-background opacity-6" d={d4}></path>
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
