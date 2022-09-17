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

// showing cards
let observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "";
      entry.target.style.transform = "";
    }
  });
}

// hideing elements and setting delay
{
  let j = 0;
  const cards = document.querySelectorAll(".card");
  cards.forEach((ele, ind) => {
    j++;
    if (j === 3) j = 0;
    ele.style.cssText = `opacity:0; transform:translateY(70px); transition-delay:${
      j / 10
    }s;`;

    observer.observe(ele);
  });
}

// like
const like = document.querySelectorAll(".like");
const likesNumber = document.querySelector(".likes-number");
like.forEach((ele) =>
  ele.addEventListener("click", (e) => {
    like.forEach((ele) => ele.classList.toggle("hidden")),
      (likesNumber.textContent = like[0].classList.contains("hidden")
        ? ++likesNumber.textContent
        : --likesNumber.textContent);
  })
);

// highlighting icons
const handleSectionsView = (sections) => {
  let ind;
  sections.forEach((section) => {
    if (section.isIntersecting) {
      sideBarIcons.forEach((ele) => ele.classList.remove("active"));
      ind =
        section.target.id === "home"
          ? 0
          : section.target.id === "products"
          ? 1
          : 2;

      sideBarIcons[ind].classList.add("active");
    }
  });
};
let sectionObsorver = new IntersectionObserver(handleSectionsView, {
  threshold: 0.2,
});
const home = document.getElementById("home");
const products = document.getElementById("products");
const search = document.getElementById("search");

sectionObsorver.observe(home);
sectionObsorver.observe(products);
sectionObsorver.observe(search);
