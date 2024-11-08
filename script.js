//const title = document.querySelectorAll(".questions__title");

// cách 1
// title.forEach((question) => {
//   question.addEventListener("click", () => {
//     const answer = question.nextElementSibling;
//     const icon = question.parentNode;
//     const plus = icon.querySelector(".icon-plus");
//     const mins = icon.querySelector(".icon-mins");

// if (answer.style.display === "block") {
//   answer.style.display = "none";
//   question.style.backgroundColor = "rgb(252, 252, 252)";
//   question.style.color = "black";
//   plus.classList.remove("hide");
//   mins.classList.add("hide");
// } else {
//   answer.style.display = "block";
//   question.style.backgroundColor = "#2a95bf";
//   question.style.color = "#f3f3f3";
//   plus.classList.add("hide");
//   mins.classList.remove("hide");
// }
//   });
// });

// cách 2
const items = document.querySelectorAll(".questions__items");

items.forEach((item) => {
  const title = item.querySelector(".questions__title");
  const answers = item.querySelector(".questions__answer");
  title.addEventListener("click", () => {
    const icons = item.querySelectorAll(".icon-act");
    title.classList.toggle("style");
    answers.classList.toggle("show");
    icons.forEach((icon) => icon.classList.toggle("hide"));
  });
});

// const plus = item.querySelector(".icon-plus");
// const mins = item.querySelector(".icon-mins");

// if (answer.classList.contains("show")) {
//   plus.classList.toggle("hide");
//   mins.classList.toggle("hide");
// }
