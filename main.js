document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 750) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const scrollContainer = document.getElementById("s1");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

const scrollContainer2 = document.getElementById("s2");

scrollContainer2.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer2.scrollLeft += evt.deltaY;
});

const scrollContainer3 = document.getElementById("s3");

scrollContainer3.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer3.scrollLeft += evt.deltaY;
});

const scrollContainer4 = document.getElementById("s4");

scrollContainer4.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer4.scrollLeft += evt.deltaY;
});
