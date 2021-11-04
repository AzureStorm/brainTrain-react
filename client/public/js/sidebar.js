function hideItems() {
  const auth = localStorage.getItem("auth");
  console.log("in here at js");
  var list = document.getElementsByClassName("navbar-nav");

  if (auth === "user") {
    list[0].removeChild(list[0].childNodes[13]);

    list[0].removeChild(list[0].childNodes[14]);
  } else if (auth === "guest") {
    list[0].removeChild(list[0].childNodes[11]);
  }
}
