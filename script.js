// Обновленная база данных: теперь у каждого места свое название и описание
const data = {
    "пляж": [
        { name: "Копакабана, Бразилия", description: "Самый известный пляж Рио-де-Жанейро с белоснежным песком.", image: "beach1.jpg" },
        { name: "Майя Бэй, Таиланд", description: "Тропический рай с кристально чистой водой и скалами.", image: "beach2.jpg" }
    ],
    "храм": [
        { name: "Ангкор-Ват, Камбоджа", description: "Крупнейший в мире храмовый комплекс, посвященный богу Вишну.", image: "temple1.jpg" },
        { name: "Парфенон, Греция", description: "Античный храм в Афинах, символ древнегреческой архитектуры.", image: "temple2.jpg" }
    ],
    "страна": [
        { name: "Токио, Япония", description: "Ультрасовременный мегаполис, бережно хранящий древние традиции.", image: "country1.jpg" },
        { name: "Париж, Франция", description: "Столица романтики, искусства и знаменитой Эйфелевой башни.", image: "country2.jpg" }
    ]
};

function searchDestinations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Очищаем старые результаты

    let matchKey = null;
    if (input.includes("пляж") || input.includes("beach")) matchKey = "пляж";
    else if (input.includes("храм") || input.includes("temple")) matchKey = "храм";
    else if (input.includes("стран") || input.includes("country")) matchKey = "страна";

    if (matchKey) {
        // Проходимся по массиву и создаем карточку для каждого конкретного места
        data[matchKey].forEach(item => {
            resultsContainer.innerHTML += `
                <div class="result-card" style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 300px; height: 200px; object-fit: cover; margin-right: 20px; border-radius: 8px;">
                    <div>
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
    } else {
        resultsContainer.innerHTML = "<p>Пожалуйста, введите 'пляж', 'храм' или 'страна'.</p>";
    }
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results-container").innerHTML = "";
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Спасибо! Ваше сообщение отправлено.");
});
