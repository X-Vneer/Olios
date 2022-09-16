// side bar items
const sideBarIcons = document.querySelectorAll("svg");
sideBarIcons.forEach((ele, ind) => {
  ele.addEventListener("click", (e) => {
    sideBarIcons.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

// right bar
const btn = document.getElementById("menu-btn");
const sideMenuItems = document.getElementById("side-menu-items");
const sideMenu = document.getElementById("side-menu");
const layout = document.getElementById("layout");

// const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  sideMenuItems.classList.toggle("open");
  layout.classList.toggle("open");

  if (sideMenu.classList.contains("open")) {
    setTimeout(() => {
      sideMenu.classList.remove("open");
    }, 900);
  }
  sideMenu.classList.add("open");

  // nav.classList.toggle("h-[240px]");
});
