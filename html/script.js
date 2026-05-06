const systemInfo = {
    browser: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

const savedData = localStorage.getItem("systemInfo");

const parsedData = JSON.parse(savedData);

const infoBlock = document.getElementById("system-info");

infoBlock.innerHTML = `
    <h3>Системна інформація</h3>
    <p><strong>Браузер:</strong> ${parsedData.browser}</p>
    <p><strong>Платформа:</strong> ${parsedData.platform}</p>
    <p><strong>Мова:</strong> ${parsedData.language}</p>
`;

fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
    .then(response => response.json())
    .then(data => {
        const commentsBlock = document.getElementById("comments-list");

        data.forEach(comment => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h4>${comment.name}</h4>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
                <hr>
            `;

            commentsBlock.appendChild(div);
        });
    })
    .catch(error => console.error("Помилка:", error));

const modal = document.getElementById("feedback-modal");
const closeBtn = document.getElementById("close-modal");

setTimeout(() => {
    modal.style.display = "block";
}, 10000);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const themeButton = document.getElementById("theme-toggle");

function updateThemeButton() {
    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Увімкнути денну тему";
    } else {
        themeButton.textContent = "Увімкнути нічну тему";
    }
}

const currentHour = new Date().getHours();

if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove("dark");
} else {
    document.body.classList.add("dark");
}

updateThemeButton();

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeButton();
});