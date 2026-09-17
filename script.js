// База данных рекомендаций с 2 изображениями на каждую категорию
const data = {
    "пляж": {
        title: "Лучшие пляжи мира",
        description: "Насладитесь солнцем и морем на этих великолепных пляжах.",
        images: ["beach1.jpg", "beach2.jpg"] // Убедись, что эти файлы есть в папке
    },
    "храм": {
        title: "Исторические храмы",
        description: "Погрузитесь в историю и культуру древних цивилизаций.",
        images: ["temple1.jpg", "temple2.jpg"]
    },
    "страна": {
        title: "Популярные страны",
        description: "Откройте для себя новые культуры и традиции.",
        images: ["country1.jpg", "country2.jpg"]
    }
};

function searchDestinations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Очищаем старые результаты

    // Ищем совпадения (поддерживаем склонения, например, если введут "пляжи")
    let matchKey = null;
    if (input.includes("пляж")) matchKey = "пляж";
    else if (input.includes("храм")) matchKey = "храм";
    else if (input.includes("стран")) matchKey = "страна";

    if (matchKey) {
        const item = data[matchKey];
        // Генерируем HTML с заголовком и 2 картинками
        resultsContainer.innerHTML = `
            <div class="result-card">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <img src="${item.images[0]}" alt="${matchKey} 1">
                <img src="${item.images[1]}" alt="${matchKey} 2">
            </div>
        `;
    } else {
        resultsContainer.innerHTML = "<p>Пожалуйста, введите 'пляж', 'храм' или 'страна'.</p>";
    }
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results-container").innerHTML = "";
}

// Предотвращение перезагрузки страницы при отправке формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Спасибо! Ваше сообщение отправлено.");
});
