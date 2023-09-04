const container = document.querySelector(".container");
const movies = [
    { name: "Gadar-2", image: "gadar2.jpg" },
    { name: "fast&furious10", image: "fast.jpg" },
    { name: "The dark-knight", image: "dark.jpg" },
];

const showmovies = () => {
    let output = "";
    movies.forEach(({ name, image }) => {
        output += `
            <div class="card">
                <img class="card-avatar" src="${image}"/>
                <h1 class="card-title">${name}</h1>
            </div>
        `;
    });
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showmovies);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("Service worker registered"))
            .catch((err) => console.error("Service worker registration failed:", err));
    });
}
