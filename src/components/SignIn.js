import React from "react";
import SignInCard from "./Card/SignInCard";
import SignUpCard from "./Card/SignUpCard";
import Link from "./Link";

const SignIn = () => {
  const navItems = [
    { hRef: "./", route: "Home", icon: "fa fa-home opacity-6 text-dark me-1" },
    {
      hRef: "./modules",
      route: "Modules",
      icon: "fa fa-book opacity-6 text-dark me-1",
    },
    {
      hRef: "./assessments",
      route: "Practice Assessments",
      icon: "fa fa-pencil-square-o opacity-6 text-dark me-1",
    },
    {
      hRef: "./sign-up",
      route: "Sign Up",
      icon: "fas fa-user-circle opacity-6 text-dark me-1",
    },
    {
      hRef: "./sign-in",
      route: "Sign In",
      icon: "fas fa-key opacity-6 text-dark me-1",
    },
  ];

  const hRef =
    document.location.pathname === "/sign-in" ? "./sign-in" : "./sign-up";

  const renderedItems = navItems.map((item) => {
    const onNavClick = (event) => {
      event.preventDefault();
      window.history.pushState([], "", item.hRef);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
    };
    return (
      <li class="nav-item">
        <a
          onClick={(e) => onNavClick(e)}
          class="nav-link d-flex align-items-center me-2 active"
          href={item.hRef}
        >
          <i class={item.icon}></i>
          {item.route}
        </a>
      </li>
    );
  });
  return (
    <div>
      <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            {/*  <!-- Navbar -->*/}
            <nav class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div class="container-fluid">
                <Link
                  class="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                  href="./"
                >
                  Brain Train
                </Link>
                <button
                  class="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div class="collapse navbar-collapse" id="navigation">
                  <ul class="navbar-nav mx-auto">{renderedItems}</ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar -->*/}
          </div>
        </div>
      </div>
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-75">
            <div class="container">
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  {window.location.pathname === "/sign-in" ? (
                    <SignInCard />
                  ) : (
                    <SignUpCard />
                  )}
                </div>
                <div class="col-md-6">
                  <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{ backgroundImage: `url(./curved6.jpg)` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
