//fadeIn
const els = document.querySelectorAll(".fadeIn");

const options = {
  rootMargin: "0px 0px -30% 0px",
};

const observer = new IntersectionObserver(show, options);

els.forEach((el) => {
  observer.observe(el);
});

function show(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 各 .heading に .active を加える
      entry.target.classList.add("start");
    } else {
      entry.target.classList.remove("start");
    }
  });
}
