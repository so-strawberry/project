// Массив сообщений от бота
const botMessages = [
    "Привет! Давай начнем обучение.",
    "Это первое сообщение. Введите 'далее', чтобы продолжить.",
    "Это второе сообщение. Введите 'далее', чтобы продолжить.",
    "Это последнее сообщение. Введите 'завершить', чтобы закончить."
];

let currentMessageIndex = 0;

// Функция для старта чата
function startChat() {
    // Скрываем кнопку "Начнем"
    document.getElementById("start-button").style.display = "none";
    // Показываем поле ввода
    document.getElementById("input-container").style.display = "flex";
    // Отправляем первое сообщение от бота
    sendBotMessage(botMessages[currentMessageIndex]);
}

// Функция для отправки сообщения от бота
function sendBotMessage(message) {
    const chatWindow = document.getElementById("chat-window");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message-bot");
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    // Прокручиваем окно чата вниз
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Функция для отправки сообщения от пользователя
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    const chatWindow = document.getElementById("chat-window");

    // Добавляем сообщение пользователя
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message-user");
    userMessageElement.textContent = userInput;
    chatWindow.appendChild(userMessageElement);

    // Очищаем поле ввода
    document.getElementById("user-input").value = "";

    // Обрабатываем команды пользователя
    if (userInput.toLowerCase() === "далее") {
        currentMessageIndex++;
        if (currentMessageIndex < botMessages.length) {
            sendBotMessage(botMessages[currentMessageIndex]);
        } else {
            sendBotMessage("Обучение завершено!");
        }
    } else if (userInput.toLowerCase() === "завершить") {
        sendBotMessage("Обучение завершено досрочно!");
        currentMessageIndex = botMessages.length; // Завершаем обучение
    } else {
        sendBotMessage("Неизвестная команда. Введите 'далее' или 'завершить'.");
    }

    // Прокручиваем окно чата вниз
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
