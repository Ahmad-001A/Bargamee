const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const path = require('path');

const app = express();

// Настройка приема скриншотов в память (максимум 10 МБ)
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.use(cors());
app.use(express.json());

// Отдаем статические файлы WebApp из папки public
app.use(express.static(path.join(__dirname, 'public')));

// ⚙️ НАСТРОЙКИ TELEGRAM (Вставьте свои данные)
const BOT_TOKEN = '8920396236:AAH74veXNZTanEyw-P-BfEbbwUXI_9z-1W8'; // Токен от @BotFather
const ADMIN_CHAT_ID = '7934934196'; // Ваш Telegram ID или ID группы/канала

// Эндпоинт для приема заказов из WebApp
app.post('/api/send-order', upload.single('screenshot'), async (req, res) => {
  try {
    const { playerId, game, goods, price, payment, region } = req.body;
    const file = req.file;

    // Формируем текст сообщения
    const caption = 
      `🛒 *Новый заказ!*\n\n` +
      `🎮 *Игра:* ${game || 'Не выбрано'}\n` +
      `📦 *Товар:* ${goods || 'Не выбрано'}\n` +
      `💰 *Сумма:* ${price || '0'} руб.\n` +
      `👤 *ID Игрока:* \`${playerId}\`\n` +
      `💳 *Оплата:* ${payment || 'Не выбрано'}\n` +
      `🌍 *Регион:* ${region || 'Стандарт'}`;

    if (file) {
      // Отправка сообщения С ЧЕКОМ (скриншотом)
      const formData = new FormData();
      formData.append('chat_id', ADMIN_CHAT_ID);
      formData.append('caption', caption);
      formData.append('parse_mode', 'Markdown');
      formData.append('photo', file.buffer, {
        filename: file.originalname || 'screenshot.png',
        contentType: file.mimetype,
      });

      await axios.post(
        `https://api.telegram.org/bot${8920396236:AAH74veXNZTanEyw-P-BfEbbwUXI_9z-1W8}/sendPhoto`,
        formData,
        { headers: formData.getHeaders() }
      );
    } else {
      // Отправка сообщения БЕЗ ЧЕКА
      await axios.post(`https://api.telegram.org/bot${8920396236:AAH74veXNZTanEyw-P-BfEbbwUXI_9z-1W8}/sendMessage`, {
        chat_id: ADMIN_CHAT_ID,
        text: caption,
        parse_mode: 'Markdown',
      });
    }

    res.json({ success: true, message: 'Заказ успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error?.response?.data || error.message);
    res.status(500).json({ success: false, message: 'Ошибка при отправке в Telegram' });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});