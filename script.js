let skills = ["HTML", "CSS", "JavaScript"];
let list = document.querySelector("ul");

list.innerHTML = "";

for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  list.appendChild(li);
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
function changeBackground() {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#bdb2ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}