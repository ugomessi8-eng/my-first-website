let skills = ["HTML", "CSS", "JavaScript"];
let list = document.querySelector("ul");

list.innerHTML = "";

for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  list.appendChild(li);
}