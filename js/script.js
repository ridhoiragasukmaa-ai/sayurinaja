const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#dashbord").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#dashbord");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
