const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
// console.log(movieLists[0]);

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// dark mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.movie-list-title,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
