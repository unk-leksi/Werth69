const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Разрешаем кросс-доменные запросы с вашего сайта
app.use(cors());

// Наш эндпоинт-посредник
app.get('/api/stock/:ticker', async (req, res) => {
    const ticker = req.params.ticker;

    try {
        // Идем на официальный API Finmind
        const response = await fetch(`https://finmind.uz/api/v1/public/market/stocks/${ticker}/`);

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Ошибка на стороне Finmind' });
        }

        const data = await response.json();

        // Отдаем полученные данные обратно вашему браузеру
        res.json(data);
    } catch (error) {
        console.error(`Ошибка для ${ticker}:`, error.message);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Сервер запущен! Прокси доступен по адресу: http://localhost:${PORT}/api/stock/URTS`);
});