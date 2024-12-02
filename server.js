const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Импортируем CORS
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors()); // Включаем CORS для всех запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обработчик маршрута
app.post('/send', async (req, res) => {
    const { name, phone, message } = req.body;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    const text = `📩 Новое сообщение:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Сообщение: ${message || 'Нет сообщения'}`;

    try {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: text
        });
        res.status(200).send({ success: true, message: 'Сообщение отправлено!' });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Ошибка отправки сообщения', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

