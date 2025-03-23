let messages = [
    "Привет! Давай начнем обучение.",
    "Это первое сообщение. Введите 'далее', чтобы продолжить.",
    "Это второе сообщение. Введите 'далее', чтобы продолжить.",
    "Это последнее сообщение. Введите 'завершить', чтобы закончить."
];

let currentMessageIndex = 0;

function startChat() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("input-container").style.display = "flex";
    displayMessage(messages[currentMessageIndex]);
}

function displayMessage(message) {
    const chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `<p><strong>Бот:</strong> ${message}</p>`;
}

function handleInput() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatLog = document.getElementById("chat-log");

    if (userInput === "далее") {
        currentMessageIndex++;
        if (currentMessageIndex < messages.length) {
            displayMessage(messages[currentMessageIndex]);
        } else {
            chatLog.innerHTML += `<p><strong>Бот:</strong> Обучение завершено!</p>`;
        }
    } else if (userInput === "завершить") {
        chatLog.innerHTML += `<p><strong>Бот:</strong> Обучение завершено досрочно!</p>`;
        currentMessageIndex = messages.length; // Завершаем обучение
    } else {
        chatLog.innerHTML += `<p><strong>Вы:</strong> ${userInput}</p>`;
        chatLog.innerHTML += `<p><strong>Бот:</strong> Неизвестная команда. Введите 'далее' или 'завершить'.</p>`;
    }

    document.getElementById("user-input").value = ""; // Очистка поля ввода
}