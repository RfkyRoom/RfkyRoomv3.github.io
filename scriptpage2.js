const toggleDarkMode = document.createElement("button");
toggleDarkMode.textContent = "Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.bottom = "20px";
toggleDarkMode.style.right = "20px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.borderRadius = "5px";
toggleDarkMode.style.backgroundColor = "#007acc";
toggleDarkMode.style.color = "white";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});