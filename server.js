import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware для обработки JSON и CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Маршрут для обработки данных формы
app.post('/send', async (req, res) => {
  const formData = req.body;

  // Формируем сообщение для Telegram
  const message = `
📋 *Nowe zgłoszenie:*
*Imię:* ${formData.name || 'Brak'}
*Telefon:* ${formData.phone || 'Brak'}
*Wiadomość:* ${formData.message || 'Brak wiadomości'}
  `;

  try {
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      res.status(200).send('Wiadomość wysłana do Telegram!');
    } else {
      const errorData = await response.text();
      console.error('Telegram API error:', errorData);
      res.status(500).send('Błąd wysyłania do Telegrama');
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Błąd serwera');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

