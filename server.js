const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Замените на ваш Telegram Bot Token и Chat ID
const TELEGRAM_TOKEN = '8081439320:AAGJmFOuwvllL6q4U9GcZi2gtRocWg3YYu4';
const CHAT_ID = '5884865975';

// Middleware для обработки JSON данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Обработка POST запроса от формы
app.post('/send-message', async (req, res) => {
  const { name, phone, message } = req.body;
  
  // Формируем сообщение для отправки в Telegram
  const telegramMessage = `📩 Новое сообщение с формы:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Сообщение: ${message || 'Нет сообщения'}`;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: telegramMessage }),
    });
    res.status(200).send('Сообщение отправлено в Telegram');
  } catch (error) {
    res.status(500).send('Ошибка отправки сообщения');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
