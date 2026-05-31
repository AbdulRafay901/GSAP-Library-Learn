const cursor = document.querySelector(".cursor");
const color = document.querySelector(".color");
const p = document.querySelector(".cursor p");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power3.out"
  });
});

color.addEventListener("mouseenter", ((e) => {
    cursor.classList.add("cursor-js");
    p.style.display = "block";
}))
color.addEventListener("mouseleave", ((e) => {
    cursor.classList.remove("cursor-js");
    p.style.display = "none";
}))