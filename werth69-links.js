const PLATFORMS = [
    {
        label: 'Binance',
        url: 'https://www.binanceuz.co/register?ref=WERTH69',
        description: 'Крупнейшая криптобиржа: покупка, продажа, стейкинг и торговля криптовалютами.',
        color: '#F0B90B', light: '#FFD84D', dark: '#A67C00',
        pattern: `<svg viewBox="0 0 24 24"><path d="M12 2 8 6l4 4 4-4-4-4zM2 12l4 4 4-4-4-4-4 4zm10 0 4 4 4-4-4-4-4 4zm-10 6 4 4 4-4-4-4-4 4zm10 0 4 4 4-4-4-4-4 4z"/></svg>`,
        icon: `<img src="icons/binance.png" alt="Binance" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">`,
        fallback: `<svg viewBox="0 0 24 24" style="display:none"><path d="M12 2 8 6l4 4 4-4-4-4zM2 12l4 4 4-4-4-4-4 4zm10 0 4 4 4-4-4-4-4 4zm-10 6 4 4 4-4-4-4-4 4zm10 0 4 4 4-4-4-4-4 4z"/></svg>`
    },
    {
        label: 'GoInvest',
        url: 'https://play.google.com/store/apps/details?id=org.uicgroup.goinvest',
        description: 'Покупка акций и облигаций Узбекистана. Инвестиции в ценные бумаги через мобильное приложение.',
        color: '#FFD400', light: '#FFE766', dark: '#B39500',
        pattern: `<svg viewBox="0 0 24 24"><path d="M3 20h18v-2H5V4H3v16zm4-3h2v-5H7v5zm4 0h2v-8h-2v8zm4 0h2V6h-2v11z"/></svg>`,
        icon: `<img src="icons/goinvest.png" alt="GoInvest" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">`,
        fallback: `<svg viewBox="0 0 24 24" style="display:none"><path d="M3 20h18v-2H5V4H3v16zm4-3h2v-5H7v5zm4 0h2v-8h-2v8zm4 0h2V6h-2v11z"/></svg>`
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-%D1%87%D0%B8%D0%BA%D0%B8%D1%80%D0%BE%D0%B2-b16032189/',
        description: 'Социальная сеть для профессионалов. Новости рынка, деловые контакты и экспертные мнения.',
        color: '#0A66C2', light: '#4A90D9', dark: '#053F7A',
        pattern: `<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`,
        icon: `<img src="icons/linkedin.png" alt="LinkedIn" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">`,
        fallback: `<svg viewBox="0 0 24 24" style="display:none"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`
    },
    {
        label: 'Telegram',
        url: 'https://t.me/werth_69',
        description: 'Канал с обучающим контентом: разборы сделок, аналитика и полезные материалы по инвестициям.',
        color: '#0088CC', light: '#33AAEE', dark: '#005A88',
        pattern: `<svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
        icon: `<img src="icons/telegram.png" alt="Telegram" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">`,
        fallback: `<svg viewBox="0 0 24 24" style="display:none"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`
    },
    {
        label: 'TradingView',
        url: 'https://ru.tradingview.com/pricing/?share_your_love=cikirovkonstantin',
        description: 'Анализ графиков, идеи по рынку и технический анализ акций, криптовалют и других активов.',
        color: '#131722', light: '#5A6A9A', dark: '#05070D',
        pattern: `<svg viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM5 13h2v5H5v-5zm4-3h2v8H9v-8zm4-3h2v11h-2V7zm4-4h2v15h-2V3z"/></svg>`,
        icon: `<img src="icons/tradingview.png" alt="TradingView" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">`,
        fallback: `<svg viewBox="0 0 24 24" style="display:none"><path d="M3 21h18v-2H3v2zM5 13h2v5H5v-5zm4-3h2v8H9v-8zm4-3h2v11h-2V7zm4-4h2v15h-2V3z"/></svg>`
    },
];

const CRYPTO_POSTS = [
    {
        title: 'Что такое Блокчейн?',
        excerpt: 'Блокчейн — это распределенный цифровой реестр, который фиксирует транзакции в сети компьютеров.',
        fullText: `Блокчейн — это распределенный цифровой реестр, который фиксирует транзакции в сети компьютеров. В отличие от традиционного банковского реестра, блокчейн децентрализован, то есть поддерживается несколькими пользователями, а не центральным органом.

Данные хранятся в «блоках», которые связаны друг с другом в хронологическую «цепь». После записи данных в блокчейн изменить их чрезвычайно сложно. Это обеспечивает прозрачность системы и ее защиту от несанкционированного вмешательства.

Каждый блок содержит набор транзакций, временную метку и хеш предыдущего блока. Именно эта связь через хеши и создает «цепь», делая данные практически неизменяемыми.`,
        image: 'icons/picture_1.jpg',
        color: '#F7931A',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 0-5 5v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 6V7a3 3 0 1 1 6 0v1H9z"/></svg>`,
        url: 'https://t.me/werth_69/368'
    },
    {
        title: 'Что такое децентрализация?',
        excerpt: 'Децентрализация — это переход управления и полномочий от централизованного субъекта к распределенной сети.',
        fullText: `Децентрализация — это переход управления и полномочий по принятию решений от централизованного субъекта (отдельного лица, организации или группы) к распределенной сети.

В сфере криптовалют децентрализация помогает решить проблему доверия и повысить безопасность. Например, Bitcoin дает возможность совершать одноранговые транзакции без посредников, таких как банки.

Однако существуют разные уровни децентрализации: одни сети более децентрализованы, чем другие. Важно понимать, где находится конкретный проект на этом спектре.`,
        image: 'icons/picture_2.jpg',
        color: '#16a34a',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5zm0 9-10 5 10 5 10-5-10-5z"/></svg>`,
        url: 'https://t.me/werth_69/369'
    },
    {
        title: 'Что такое смарт-контракты?',
        excerpt: 'Смарт-контракты — это самоисполняющиеся контракты, условия которых прописаны в коде.',
        fullText: `Смарт-контракты — это самоисполняющиеся контракты, условия которых прописаны в коде. Наиболее популярные смарт-контракты работают на высокопрограммируемых блокчейнах, например Ethereum, BNB Chain и Solana.

Смарт-контракт работает как торговый автомат: вы кладете нужную сумму, выбираете продукт — и автомат сам выдает вам товар. Никакой продавец не нужен.

Благодаря такой автоматизации можно создавать любые децентрализованные приложения (DApps).`,
        image: 'icons/picture_3.jpg',
        color: '#0A66C2',
        icon: `<svg viewBox="0 0 24 24"><path d="M9 2v2H7a3 3 0 0 0-3 3v3a3 3 0 0 1-1.5 2.6A3 3 0 0 1 4 13v3a3 3 0 0 0 3 3h2v2h2v-2h2v2h2v-2h2a3 3 0 0 0 3-3v-3a3 3 0 0 1 1.5-2.6A3 3 0 0 1 20 10V7a3 3 0 0 0-3-3h-2V2h-2v2h-2V2H9zm0 11v2h6v-2H9z"/></svg>`,
        url: 'https://t.me/werth_69/371'
    },
    {
        title: 'Механизмы консенсуса',
        excerpt: 'Proof of Work (PoW) и Proof of Stake (PoS) — два основных механизма защиты блокчейнов.',
        fullText: `Proof of Work (PoW) и Proof of Stake (PoS) — это два наиболее распространенных механизма консенсуса, используемых для защиты блокчейнов и подтверждения транзакций.

Proof of Work (PoW): используется в Bitcoin. Здесь майнерам нужно с помощью мощного оборудования решать сложные математические задачи. Этот процесс потребляет много энергии, но обеспечивает высокий уровень безопасности.

Proof of Stake (PoS): используется в Ethereum (начиная с The Merge). Здесь безопасность сети обеспечивают валидаторы, которые «размещают в стейкинге» криптовалюту. PoS намного экономичнее по энергии, чем PoW.`,
        image: 'icons/picture_4.jpg',
        color: '#627EEA',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2 5 12l7 4 7-4-7-10zm0 15-7-4 7 10 7-10-7 4z"/></svg>`,
        url: 'https://t.me/werth_69/373'
    },
    {
        title: 'Децентрализованные финансы (DeFi)',
        excerpt: 'DeFi — экосистема финансовых приложений на блокчейне без центрального управления.',
        fullText: `DeFi — это экосистема финансовых приложений, созданных на блокчейне. Цель DeFi — создать открытую, общедоступную и прозрачную финансовую систему с открытым кодом, которая работает без какого-либо центрального органа.

В DeFi можно давать в долг, брать займы и обмениваться активами — напрямую с другими пользователями или через смарт-контракты. Никаких банков и посредников.

DeFi дает доступ к финансовым услугам любому человеку с интернетом, независимо от страны и гражданства.`,
        image: 'icons/picture_5.jpg',
        color: '#9945FF',
        icon: `<svg viewBox="0 0 24 24"><path d="M20 7h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-10-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h-4V5z"/></svg>`,
        url: 'https://t.me/werth_69/376'
    },
    {
        title: 'Токеномика',
        excerpt: 'Токеномика — экономическая структура криптовалюты, определяющая спрос и предложение токена.',
        fullText: `Токеномика (сочетание слов «токен» и «экономика») — это экономическая структура криптовалюты, NFT или любого другого цифрового актива. Она связана с характеристиками спроса и предложения токена.

К ключевым аспектам токеномики относятся: общее предложение, количество в обращении, полезность и распределение токенов между командой, инвесторами и сообществом.

Понимание токеномики помогает инвесторам оценить устойчивость проекта в долгосрочной перспективе.`,
        image: 'icons/picture_6.jpg',
        color: '#dc2626',
        icon: `<svg viewBox="0 0 24 24"><path d="M4 4h16v3H4V4zm2 5h12v3H6V9zm-2 5h16v3H4v-3zm2 5h12v3H6v-3z"/></svg>`,
        url: 'https://t.me/werth_69/380'
    },
    {
        title: 'Приватные и публичные ключи',
        excerpt: 'Эти ключи — криптографический инструмент для отправки и получения криптовалюты.',
        fullText: `Эти ключи — криптографический инструмент для отправки и получения криптовалюты.

Публичный ключ: работает как номер банковского счета или адрес электронной почты. Вы делитесь им с пользователями, чтобы они могли отправлять вам средства.

Приватный ключ: работает как пароль или PIN-код. Он подтверждает право собственности на средства. Этот ключ нельзя никому сообщать. Если кто-то получит доступ к вашему приватному ключу, он сможет украсть ваши активы.

Храните приватные ключи в надежном месте: аппаратные кошельки, бумажные копии в сейфе или зашифрованные файлы.`,
        image: 'icons/picture_7.jpg',
        color: '#22c55e',
        icon: `<svg viewBox="0 0 24 24"><path d="M14 2a6 6 0 0 0-5.7 8H2v4h2v3h4v-3h2v-3h.3A6 6 0 1 0 14 2zm2 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>`,
        url: 'https://t.me/werth_69/382'
    },
    {
        title: 'Сид-фраза',
        excerpt: 'Сид-фраза — последовательность из 12–24 слов, восстанавливающая весь криптокошелек.',
        fullText: `Сид-фраза (также известная как фраза восстановления или мнемоническая фраза) — это последовательность из 12–24 случайных слов, которая генерируется при создании криптовалютного кошелька. Она служит главной резервной копией всего кошелька.

Сид-фраза — это единственный способ вернуть доступ к кошельку в случае потери устройства или забытого пароля. Но если кто-то узнает вашу сид-фразу, он получит полный доступ ко всем аккаунтам.

Поэтому храните фразу в надежном месте и ни с кем не делитесь ею.`,
        image: 'icons/picture_8.jpg',
        color: '#627EEA',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 6a3 3 0 0 1 3 3c0 1.3-.8 2.4-2 2.8V16h-2v-3.2c-1.2-.4-2-1.5-2-2.8a3 3 0 0 1 3-3z"/></svg>`,
        url: 'https://t.me/werth_69/386'
    },
    {
        title: 'Стейблкоины',
        excerpt: 'Стейблкоины — криптовалюта со стабильной ценой, привязанной к фиату или другому активу.',
        fullText: `Стейблкоины — это криптовалюта, созданная для поддержания стабильной цены. Обычно ее привязывают к фиату, например к доллару США (курс держится примерно на уровне 1 доллара). Многие используют стейблкоины для перевода средств между биржами, защиты от краткосрочных колебаний цен или хранения средств в блокчейне.

Существуют разные способы, с помощью которых стейблкоины поддерживают стабильность цены: фиатные (обеспечены резервами), криптовалютные (обеспечены криптой с избыточным обеспечением), алгоритмические (корректируют предложение).

Хотя эти стейблкоины называют «стабильными», риск все равно есть — отвязка от доллара, проблемы с ликвидностью, регуляторные риски.`,
        image: 'icons/picture_9.jpg',
        color: '#eab308',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/><path d="M12 8v8m-3-5h6m-6 3h6" stroke="#0a1310" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,
        url: 'https://t.me/werth_69/389'
    },
];

const ASSETS = [
    { symbol: 'BTC',  name: 'Bitcoin',  price: 67432.12, change:  2.48, icon: '₿', color: '#F7931A' },
    { symbol: 'ETH',  name: 'Ethereum', price: 3245.67,  change:  3.12, icon: 'Ξ', color: '#627EEA' },
    { symbol: 'SOL',  name: 'Solana',   price: 142.08,   change:  4.12, icon: '◎', color: '#9945FF' },
    { symbol: 'AAPL', name: 'Apple',    price: 188.32,   change:  1.56, icon: 'A', color: '#A2AAAD' },
    { symbol: 'TSLA', name: 'Tesla',    price: 242.16,   change: -2.87, icon: 'T', color: '#E31937' },
];

const MYPATH = {
    hero: {
        line1: 'Мой',
        line2: 'путь',
        text: 'Это не просто путь, это моя история, мои идеи, мечты и шаги к ним. Здесь я делюсь тем, что вдохновляет, и тем, что создаю.',
        image: 'icons/my_way.png',
    },
    cards: [
        {
            title: 'Посты',
            text: 'Мысли, заметки, идеи и истории, которые рождаются в голове и превращаются в слова.',
            image: 'icons/my_way.png',
            icon: 'doc',
            soon: false,
            link: 'posts',
        },
        {
            title: 'Комикс',
            text: 'Визуальные истории, где каждая страница — новая глава.',
            image: 'icons/comic.png',
            icon: 'comic',
            soon: true,
            link: '#',
        },
        {
            title: 'Мультик / Фильм',
            text: 'Короткие истории, которые оживают в движении.',
            image: 'icons/movie.png',
            icon: 'film',
            soon: true,
            link: '#',
        },
    ],
    posts: [
        {
            tag: '#Мой путь',
            title: 'МОЯ СТРАТЕГИЯ. Как $10 в месяц превратились в доход.',
            text: `Хочу поделиться своей историей. Не хвастовства ради, а чтобы показать: начать можно с ЛЮБОЙ суммы.

Старт: март 2024. Инструмент: Binance. Актив: TRX.
Каждый месяц я покупал монеты на $10. Иногда — больше, но никогда — меньше. Система — это главное.

Итог за год:
• 242 монеты
• Средняя цена входа — $0.1457
• Текущий рост — 123.88%

Дальше — больше. Перевел всё в стейкинг. Для тех, кто не знает: стейкинг — это когда твои монеты работают на тебя. Ты их блокируешь, а они приносят доход. Никакой магии — просто математика.

Мой прогноз: через 3-4 года TRX вырастет в 10+ раз. Тогда и увидим, кто тут правильно мыслил.

2026 год — год активных действий. Я не останавливаюсь на крипте, осваиваю новые горизонты. Подробности — в следующих постах.

Продолжение следует...`,
            image: 'icons/my_way1.jpg',
            url: 'https://t.me/werth_69/286',
        },
        {
            tag: '#Мой путь',
            title: 'ПРОДОЛЖЕНИЕ. Как я потерял 70% и вывел свои уроки.',
            text: `Помните мой первый пост про старт с $10 на Binance? Тогда всё выглядело красиво: +123%, стейкинг, планы на х10.

А теперь — честная часть. Та, о которой мало кто говорит.

Дальше — больше. Я увлекся. Мне казалось: раз TRX вырос, значит и другие монеты будут так же расти. Я начал вкладывать в разные активы, не особо разбираясь. Думал: "Залетай, рынок растёт — я заработаю кучу денег!"

Весь 2025 год я активно закидывал деньги в крипту. В итоге — зашёл на сумму около $3000. Без стратегии, без анализа, без риск-менеджмента.

Итог? Жесткая просадка. На сегодняшний день мой портфель упал на 60-70%. Да, вы не ослышались. От $3000 осталось совсем немного. Было больно. Очень.

Но я сделал выводы. Я осознал простую истину: каждый актив нужно изучать. Нельзя покупать "на всю котлету". Нельзя верить, что всё будет вечно расти.

2026 год — полная перезагрузка. С января я полностью пересмотрел подход:
✅ Начал покупать только фундаментальные активы.
✅ Ввёл риск-менеджмент.
✅ Захожу маленькими суммами, постепенно накапливая позиции.
✅ Анализирую каждый шаг.

И результат не заставил ждать. С января по сентябрь 2026 года я уже в плюсе на 50%. Да, рынок волатильный — то вверх, то вниз. Но я на этом почти не нервничаю, потому что сижу в надёжных активах, где просадка максимум 20%.

А в конце августа рынок дал хороший рост — и я смог покрыть свои прошлогодние убытки.

Теперь я точно знаю: лёгких денег не бывает. Только дисциплина, анализ и терпение.

Продолжение следует...`,
            image: 'icons/my_way2.png',
            url: 'https://t.me/werth_69/289',
        },
        {
            tag: '#Мой путь',
            title: 'КАК ФИЛЬМ "ИГРА НА ПОНИЖЕНИЕ" ПРИВЕЛ МЕНЯ К IPO УЗБЕКИСТАНА?',
            text: `Помните, я рассказывал про старт в крипте? А теперь — предыстория. То, с чего всё НА САМОМ ДЕЛЕ началось.

2024 год. Первый раз в жизни я посмотрел фильм «Игра на понижение». Очень рекомендую к просмотру! Фильм крутой — про то, как умные люди зарабатывают на кризисе. И он перевернул моё мышление.

Я начал углубляться: что такое фондовый рынок? Акции? Облигации? Почему вокруг всего этого ажиотаж?

И тут — судьба. Сентябрь 2024 года. Я впервые услышал о брокере JEТТ (Узбекистан). Решил попробовать — закинул 100 000 сум, просто чтобы посмотреть, как всё работает.

И тогда я наткнулся на новость: «Ипотека-банк планирует листинг на Мосбирже». Я сел, почитал, что такое Мосбиржа. Огромный рынок РФ. И понял: если банк выходит на такой уровень, строит интеграции — значит, спрос будет. Акции будут расти.

Логика простая: строят структуру → будет листинг → будет спрос → цена растёт.

Я начал покупать акции Ипотека-банка. По 20 000 сум в течение всего сентября. Тогда курс был копеечный — около 1.1 сум за акцию. Казалось смешно: банк, такая организация, а акции дармовые. Но я купил и... забыл.

И вот — апрель 2026 года. Я открываю портфель и вижу: курс акций Ипотека-банка — 3.34 сум за акцию! Рост в 3.3 раза!

Я сижу и думаю: "Блин, это намного круче, чем я ожидал. Надо было сюда вкладываться, а не шататься по крипте!"

Но я не расстроился. Я сделал вывод: если акции Узбекистана дают такой рост, значит и другие компании могут выстрелить.

С этого момента я начал глубоко изучать экономику Узбекистана. Смотрел, какие компании есть, что покупать, как всё устроено. И постепенно пришел к тому, что...

Май 2026 года. Go Invest. Почему я выбрал именно эту платформу?
✅ Не нужно покупать подписки, чтобы получать дивиденды.
✅ Дивиденды автоматически падают на депозитарий Uz CSD.
✅ Приемлемые комиссии.

Теперь я инвестирую в акции и облигации Узбекистана. Кстати, про облигации: рекомендую брать те, где годовые купоны. Они выплачивают дивиденды, а по окончании срока возвращают вложенную сумму. За год или полгода можно заработать 20-30% годовых. Акции же приносят дивиденды ежемесячно, квартально или ежегодно — зависит от компании.

Я уже пришёл к осознанному выбору. А вы?

Продолжение следует...`,
            image: 'icons/my_way3.png',
            url: 'https://t.me/werth_69/290',
        },
        {
            tag: '#Мой путь',
            title: 'КАК Я СОБРАЛ МИЛЛИОН PEPE БЕЗ ВЛОЖЕНИЙ',
            text: `Продолжаю свою историю. Сегодня расскажу, с чего всё начиналось — до того, как я пришёл на серьёзный рынок.

Раньше я выполнял задания. Подписки, лайки, комментарии. Платили копейки — где-то 5-10 копеек, иногда рубль, иногда 5 рублей. Сидишь пару часов в день, набегает приличная сумма за месяц.

Потом начал искать другие варианты пассивного дохода без вложений. И наткнулся на крипто-краны.

Что это такое?

Регистрируешься на кошельке. Заходишь на платформу крана. Вводишь адрес почты, на который зарегистрирован кошелёк. И каждую минуту или каждые 5 минут нажимаешь кнопку «Кран» — тебе на кошелёк падает какая-то часть криптовалюты.

Я начал собирать PEPE🤣 — ту самую зелёную лягушку, нашумевший мемкоин.

За одно задание платили около 500 PEPE. Потом появились короткие ссылки — там уже платили 1000-2000 PEPE за задание.

Я загорелся. Думаю: «Реально можно собирать крипту бесплатно, за простые действия, которые не занимают много времени!»

Причём я совмещал с работой. У меня было свободное время — и я параллельно выполнял задания.

Поставил цель: накопить 1 000 000 PEPE.

Загорелся этим в 2024 году в начале весны. Ближе к концу лета — где-то в августе — я достиг цели. Собрал миллион! И... забыл про них.

Прошло 2-3 месяца. Я не заходил на кошелёк.

И вот — ноябрь 2024 года. Пик роста PEPE.

Захожу на кошелёк. Смотрю — $28.

Я такой: «Что-то сломалось, наверное». Перезагружаю страницу. Не работает?

А на самом деле эти PEPE, которые я собирал за простые задания, превратились в 28 долларов.

За 3-4 месяца без вложений. Просто за действия, которые я делал параллельно с работой.

Для меня это было приятно. Блин, как же это круто! Оказывается, есть такие возможности — пособирать вот так.

И вот — сентябрь 2026 года.

Я снова зашёл на свой старый аккаунт этих кранов и бирж заданий. И думаю: «А почему бы не запустить челлендж снова?»

Цель: собрать миллион PEPE до конца 2026 года.

Интересно, что получится в этот раз? Сколько будет на кошельке?

К тому же рынок сейчас — эти качели. Если соберу к концу года и оставлю на год — может, будет $30-40. А может, и больше.

Продолжение следует...`,
            image: 'icons/my_way4.jpg',
            url: 'https://t.me/werth_69/372',
        },
        {
            tag: '#Мой путь',
            title: 'КАК Я ПОЛУЧИЛ ПЕРВЫЙ ДРОП В КРИПТЕ. История с Notcoin',
            text: `Продолжаю свою историю. Сегодня расскажу, как я впервые получил свой первый дроп в криптовалюте.

Что такое дроп?

Дроп (airdrop) — это когда ты приходишь, тестируешь продукт разработчика, а в конце он вознаграждает тебя токенами. Эти токены листятся на биржах — их можно продать и получить деньги.

Всё началось с Notcoin.

В Telegram появилась такая штука: тапаешь по монетке, получаешь поинты. Тогда это было не особо на хайпе — просто забавная игрушка.

Я кликал какое-то время, достиг золотого уровня, накопил кучу монет. Выполнял задания.

И в один момент мне это надоело.

Плюс все вокруг начали говорить: «Это скам. Миллионы пользователей, всем нужно будет раздать деньги — так не бывает».

Я забросил это дело на полгода.

Проходит полгода. И начинается хайп вокруг Notcoin.

«Airdrop скоро! Дроп! Тапайте больше!»

Мы с ребятами начинаем тапать, получать уровни. И в моменте получается то, чего никто не ожидал: компания действительно выпускает продукт, листит монету на биржах и раздаёт пользователям эти монеты.

Для меня это было шоком.

Казалось бы: просто тапал, кликал по экрану — и получил за это вознаграждение. Точное количество не помню, но примерно $70 на тот момент, когда монета залистилась.

Тут был вариант оставить в стейкинге.

В приложении можно было застейкать монеты на месяц или три месяца, и в конце срока давали дополнительное вознаграждение.

Но я тогда был зелёный. Думал: «Стейкинг? Цена упадёт — и я ничего не получу».

В итоге вывел на Telegram-кошелёк. Проходит время, цена немного падает. На балансе — $50.

Думаю: «Ладно, давай ещё подождём».

И тут начались эмоции🥵😁😂☺️

Продай! Сейчас продай! Лучший момент! Если не продашь — монета обесценится!

Месяц, два держу. Цена начинает расти. Смотрю на баланс — $98.

Я такой: «Всё. Это тот момент, когда нужно продать».

Продаю. Получаю $98.

И проходит буквально 2-3 месяца.

Notcoin начинает жёстко откатываться. Прям на самое дно.

И я такой: «Хорошо, что я тогда продал!»

Да, я был на эмоциях. Да, я не знал, что делаю. Но я получил свою первую выплату с дропа.

Это был мой первый опыт. И он многому меня научил.

Продолжение следует...`,
            image: 'icons/my_way5.jpg',
            url: 'https://t.me/werth_69/402',
        },
    ],
};

const MYPATH_ICONS = {
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="16 8 14 14 8 16 10 10 16 8" fill="currentColor" fill-opacity="0.15"/></svg>`,
    doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="14 3 14 9 20 9"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>`,
    comic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18v14H7l-4 4z"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="13" y2="13"/></svg>`,
    film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="7" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="17" y2="21"/><line x1="2" y1="9" x2="7" y2="9"/><line x1="2" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="22" y2="9"/><line x1="17" y1="15" x2="22" y2="15"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    hourglass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12M6 2v6a6 6 0 0 0 6 6 6 6 0 0 0 6-6V2M6 22v-6a6 6 0 0 1 6-6 6 6 0 0 1 6 6v6"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
    arrowSmall: `<svg class="arrow" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    compassBig: `<svg viewBox="0 0 200 200" fill="none" stroke="rgba(168,255,62,0.5)" stroke-width="0.8">
        <circle cx="100" cy="100" r="88" stroke-dasharray="2 6"/>
        <circle cx="100" cy="100" r="70" stroke-dasharray="1 10"/>
        <circle cx="100" cy="100" r="50" stroke-dasharray="3 8"/>
        <line x1="100" y1="10" x2="100" y2="190" stroke-dasharray="2 4"/>
        <line x1="10" y1="100" x2="190" y2="100" stroke-dasharray="2 4"/>
        <polygon points="100,35 105,100 100,165 95,100" fill="rgba(168,255,62,0.15)" stroke="rgba(168,255,62,0.5)" stroke-width="0.6"/>
        <polygon points="35,100 100,95 165,100 100,105" fill="rgba(168,255,62,0.08)" stroke="rgba(168,255,62,0.3)" stroke-width="0.6"/>
        <circle cx="100" cy="100" r="4" fill="rgba(168,255,62,0.7)"/>
    </svg>`,
};

const BUBBLE_SIZE = 180;
const CARD_RADIUS = 380;

class Bubble {
    constructor(data, arena) {
        this.data = data;
        this.arena = arena;
        this.size = BUBBLE_SIZE;
        this.x = Math.random() * (arena.clientWidth - this.size - 40) + this.size / 2 + 20;
        this.y = Math.random() * (arena.clientHeight - this.size - 40) + this.size / 2 + 20;
        const speedBase = 0.7;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speedBase;
        this.vy = Math.sin(angle) * speedBase;
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.6 + Math.random() * 0.4;
        this.el = document.createElement('a');
        this.el.className = 'bubble';
        this.el.href = data.url;
        this.el.target = '_blank';
        this.el.rel = 'noopener';
        this.el.style.width = this.size + 'px';
        this.el.style.height = this.size + 'px';
        this.el.style.setProperty('--bubble-color', data.color);
        this.el.style.setProperty('--bubble-light', data.light);
        this.el.style.setProperty('--bubble-dark',  data.dark);
        this.el.style.setProperty('--bubble-glow',  this.hexToRgba(data.color, 0.55));
        this.el.innerHTML = `
            <div class="bubble-icon">
                ${data.icon}
                ${data.fallback}
            </div>
            <div class="bubble-label">${data.label}</div>
        `;
        arena.appendChild(this.el);
        setTimeout(() => { this.el.style.opacity = '1'; }, Math.random() * 400);
    }

    hexToRgba(hex, alpha) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
        const n = parseInt(hex, 16);
        const r = (n >> 16) & 0xff;
        const g = (n >> 8) & 0xff;
        const b = n & 0xff;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    update(dt, width, height) {
        this.x += this.vx;
        this.y += this.vy;
        this.wobblePhase += this.wobbleSpeed * 0.05;
        const wobbleX = Math.sin(this.wobblePhase) * 4;
        const wobbleY = Math.cos(this.wobblePhase * 1.3) * 4;
        const r = this.size / 2;
        const mx = this.x + wobbleX;
        const my = this.y + wobbleY;
        if (mx - r < 0) { this.x = r; this.vx = Math.abs(this.vx); }
        else if (mx + r > width) { this.x = width - r; this.vx = -Math.abs(this.vx); }
        if (my - r < 0) { this.y = r; this.vy = Math.abs(this.vy); }
        else if (my + r > height) { this.y = height - r; this.vy = -Math.abs(this.vy); }
        this.el.style.transform = `translate(${this.x - r + wobbleX}px, ${this.y - r + wobbleY}px)`;
    }
}

function buildPatternDataUrl(svg, color) {
    const size = 90;
    const iconSize = 26;
    const offset = (size - iconSize) / 2;
    const wrapped = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
            <g transform="translate(${offset}, ${offset})" fill="${color}" opacity="0.65">
                <g transform="scale(${iconSize / 24})">
                    ${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}
                </g>
            </g>
        </svg>
    `;
    return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(wrapped)}")`;
}

function renderCards() {
    const container = document.getElementById('cards');
    container.innerHTML = '';
    PLATFORMS.forEach(data => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = data.url;
        card.target = '_blank';
        card.rel = 'noopener';
        card.style.setProperty('--card-color', data.color);
        card.style.setProperty('--card-light', data.light);
        card.style.setProperty('--card-dark',  data.dark);
        card.innerHTML = `
            <div class="card-pattern" style="background-image: ${buildPatternDataUrl(data.pattern, data.color)};"></div>
            <div class="card-icon">
                <div class="card-icon-inner">
                    ${data.icon}
                    ${data.fallback}
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${data.label}</h3>
                <p class="card-desc">${data.description}</p>
            </div>
            <div class="card-arrow">→</div>
        `;
        container.appendChild(card);
    });
}

function buildRotorSVG() {
    const cx = 190;
    const cy = 190;
    const dots = 12;
    let items = '';

    items += `<circle cx="${cx}" cy="${cy}" r="140" fill="none" stroke="rgba(247, 147, 26, 0.35)" stroke-width="1.5" stroke-dasharray="4 8"/>`;
    items += `<circle cx="${cx}" cy="${cy}" r="165" fill="none" stroke="rgba(247, 147, 26, 0.20)" stroke-width="1" stroke-dasharray="2 10"/>`;
    items += `<circle cx="${cx}" cy="${cy}" r="115" fill="none" stroke="rgba(247, 147, 26, 0.25)" stroke-width="1" stroke-dasharray="3 6"/>`;

    for (let i = 0; i < dots; i++) {
        const a = (i / dots) * Math.PI * 2;
        const x = cx + Math.cos(a) * 140;
        const y = cy + Math.sin(a) * 140;
        items += `<circle cx="${x}" cy="${y}" r="3" fill="rgba(247, 147, 26, 0.95)" filter="url(#glowDot)"/>`;
    }

    for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const x = cx + Math.cos(a) * 165;
        const y = cy + Math.sin(a) * 165;
        items += `<circle cx="${x}" cy="${y}" r="2" fill="rgba(168, 255, 62, 0.85)"/>`;
    }

    return `
        <svg viewBox="0 0 380 380" preserveAspectRatio="xMidYMid meet">
            <defs>
                <filter id="glowDot" x="-200%" y="-200%" width="500%" height="500%">
                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            ${items}
        </svg>
    `;
}

function renderCryptoView() {
    const container = document.getElementById('crypto-view');
    if (!container || container.dataset.rendered === 'true') return;
    container.dataset.rendered = 'true';

    const cardsHTML = CRYPTO_POSTS.map((p, i) => `
        <div class="crypto-card crypto-card-${i + 1}"
             data-crypto-index="${i}"
             role="button"
             tabindex="0"
             aria-label="Открыть пост: ${p.title}">
            <div class="crypto-card-image"
                 style="background-image: url('${p.image}'); background-color: ${p.color};">
                <div class="crypto-card-glass-icon">
                    ${p.icon}
                </div>
            </div>
            <div class="crypto-card-body">
                <h3>${p.title}</h3>
                <p>${p.excerpt}</p>
            </div>
        </div>
    `).join('');

    const assetsHTML = ASSETS.map(a => `
        <div class="crypto-asset-card">
            <div class="crypto-asset-head">
                <div class="crypto-asset-icon" style="background: ${a.color}25; color: ${a.color}; border-color: ${a.color}50;">
                    ${a.icon}
                </div>
                <div class="crypto-asset-info">
                    <strong>${a.name}</strong>
                    <span class="crypto-asset-price">$ ${a.price.toFixed(2)}</span>
                </div>
            </div>
            <div class="crypto-asset-sparkline">
                ${a.change >= 0
                    ? `<svg viewBox="0 0 100 30" preserveAspectRatio="none">
                        <polyline points="0,22 15,20 30,23 45,17 60,18 75,12 90,13 100,10"
                                  fill="none" stroke="#16a34a" stroke-width="1.8"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`
                    : `<svg viewBox="0 0 100 30" preserveAspectRatio="none">
                        <polyline points="0,10 15,12 30,9 45,14 60,13 75,17 90,18 100,20"
                                  fill="none" stroke="#dc2626" stroke-width="1.8"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`
                }
            </div>
            <span class="crypto-asset-change ${a.change >= 0 ? 'up' : 'down'}">
                ${a.change >= 0 ? '+' : ''}${a.change.toFixed(2)}%
            </span>
        </div>
    `).join('');

    const cx = 750, cy = 550;
    const raysHTML = CRYPTO_POSTS.map((p, i) => {
        const angleDeg = i * 40 - 90;
        const angleRad = angleDeg * Math.PI / 180;
        const startR = 110;
        const endR = CARD_RADIUS - 20;
        const x1 = cx + Math.cos(angleRad) * startR;
        const y1 = cy + Math.sin(angleRad) * startR;
        const x2 = cx + Math.cos(angleRad) * endR;
        const y2 = cy + Math.sin(angleRad) * endR;
        return `
            <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />
            <circle cx="${x2}" cy="${y2}" r="3" />
        `;
    }).join('');

    container.innerHTML = `
        <div class="crypto-stage posts-hidden">
            <div class="crypto-posts-hint">Нажмите на криптоконцепции</div>
            <div class="crypto-rays">
                <svg viewBox="0 0 1500 1100" preserveAspectRatio="xMidYMid meet">
                    ${raysHTML}
                </svg>
            </div>

            <div class="crypto-center">
                <div class="crypto-center-glow"></div>

                <div class="crypto-rotor">
                    ${buildRotorSVG()}
                </div>

                <div class="crypto-coin" role="button" tabindex="0" aria-label="Показать посты вокруг Bitcoin">
                    <img src="icons/c_w.png" alt="Bitcoin"
                         onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                    <div class="crypto-coin-fallback" style="display:none;">₿</div>
                </div>
            </div>
            ${cardsHTML}
        </div>
        <div class="crypto-secondary-coin" role="button" tabindex="0" aria-label="Будущая монета для новых постов">
            <img src="icons/b_w.png" alt="Новая монета"
                 onerror="this.style.display='none';">
        </div>
        <div class="crypto-assets">
            <h2>Актуальные активы</h2>
            <div class="crypto-assets-list">
                ${assetsHTML}
            </div>
        </div>
    `;

    const modal         = document.getElementById('crypto-modal');
    const modalImage    = document.getElementById('crypto-modal-image');
    const modalImg      = document.getElementById('crypto-modal-img');
    const modalTitle    = document.getElementById('crypto-modal-title');
    const modalText     = document.getElementById('crypto-modal-text');
    const modalTelegram = document.getElementById('crypto-modal-telegram');

    const openCryptoModal = (index) => {
        const post = CRYPTO_POSTS[index];
        if (!post || !modal) return;

        modalImg.src = post.image;
        modalImg.alt = post.title;
        modalImage.style.backgroundColor = post.color;

        modalTitle.textContent = post.title;
        modalText.textContent  = post.fullText;
        modalTelegram.href     = post.url;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('crypto-modal-open');
        modal.querySelector('.crypto-modal-close').focus();
    };

    const closeCryptoModal = () => {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('crypto-modal-open');
    };

    const cryptoStage = container.querySelector('.crypto-stage');
    const cryptoCoin = container.querySelector('.crypto-coin');

    const toggleCryptoPosts = () => {
        if (!cryptoStage) return;

        const willOpen = cryptoStage.classList.contains('posts-hidden');
        const cards = Array.from(cryptoStage.querySelectorAll('.crypto-card'));

        if (willOpen) {
            cryptoStage.classList.remove('posts-hidden');

            cards.forEach((card) => {
                card.classList.remove('roulette-in');
                card.style.animation = '';
                card.style.animationDelay = '';
                void card.offsetWidth;
            });

            cryptoStage.classList.add('roulette-active');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.42}s`;
                card.classList.add('roulette-in');
            });
        } else {
            cards.forEach((card) => {
                card.classList.remove('roulette-in');
                card.style.animation = '';
                card.style.animationDelay = '';
            });
            cryptoStage.classList.remove('roulette-active');
            cryptoStage.classList.add('posts-hidden');
        }
    };

    if (cryptoCoin) {
        cryptoCoin.addEventListener('click', toggleCryptoPosts);
        cryptoCoin.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleCryptoPosts();
            }
        });
    }

    container.querySelectorAll('.crypto-card').forEach((card) => {
        const index = Number(card.dataset.cryptoIndex);

        card.addEventListener('click', () => openCryptoModal(index));

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openCryptoModal(index);
            }
        });
    });

    modal.querySelectorAll('[data-close-crypto-modal]').forEach((element) => {
        element.addEventListener('click', closeCryptoModal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal?.classList.contains('open')) {
            closeCryptoModal();
        }
    });
}

function buildSidePanels() {
    const leftHTML = `
        <aside class="mypath-side-left">
            <div class="side-label">Путь · Шаги · Рост</div>
            <div class="side-track">
                <div class="side-track-line"></div>
                <div class="side-step side-step-active"></div>
                <div class="side-step"></div>
                <div class="side-step"></div>
                <div class="side-step"></div>
                <div class="side-step"></div>
                <div class="side-step"></div>
                <div class="side-compass">
                    ${MYPATH_ICONS.compassBig}
                </div>
            </div>
        </aside>
    `;

    const coins = [
        { cls: 'side-coin-1', sym: '₿' },
        { cls: 'side-coin-2', sym: 'Ξ' },
        { cls: 'side-coin-3', sym: '◎' },
        { cls: 'side-coin-4', sym: '$' },
        { cls: 'side-coin-5', sym: '₽' },
        { cls: 'side-coin-6', sym: '¥' },
        { cls: 'side-coin-7', sym: '€' },
    ];

    const coinsHTML = coins.map(c => `
        <div class="side-coin ${c.cls}">${c.sym}</div>
    `).join('');

    let particlesHTML = '';
    for (let i = 0; i < 18; i++) {
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 8;
        const delay = Math.random() * 8;
        const size = 1 + Math.random() * 2;
        particlesHTML += `<span class="side-particle" style="left: ${left}%; bottom: -20px; width: ${size}px; height: ${size}px; animation-duration: ${duration}s; animation-delay: ${delay}s;"></span>`;
    }

    const rightHTML = `
        <aside class="mypath-side-right">
            <div class="side-floaters">
                ${coinsHTML}
                <div class="side-particles">
                    ${particlesHTML}
                </div>
            </div>
        </aside>
    `;

    return { leftHTML, rightHTML };
}

function renderMypathView() {
    const container = document.getElementById('mypath-view');
    if (!container || container.dataset.rendered === 'true') return;
    container.dataset.rendered = 'true';

    const hero = MYPATH.hero;
    const { leftHTML, rightHTML } = buildSidePanels();

    const postsCard = MYPATH.cards.find(c => c.icon === 'doc');
    const comicCard = MYPATH.cards.find(c => c.icon === 'comic');
    const filmCard  = MYPATH.cards.find(c => c.icon === 'film');

    // Горизонтальная лента постов
    const postsHTML = MYPATH.posts.map((post, i) => {
        const shortText = post.text.length > 180
            ? post.text.slice(0, 160).trim() + '…'
            : post.text;
        return `
        <div class="mypath-post" data-post-index="${i}">
            <div class="mypath-post-image" style="background-image: url('${post.image}');"></div>
            <div class="mypath-post-body">
                <span class="mypath-post-tag">${post.tag}</span>
                <h3 class="mypath-post-title">${post.title}</h3>
                <p class="mypath-post-text">${shortText}</p>
                <div class="mypath-post-dots">• • •</div>
            </div>
        </div>
        `;
    }).join('');

    // Панель постов
    const postsPanelHTML = `
        <section class="mypath-panel mypath-posts-panel-inline" id="mypath-posts-panel">
            <div class="mypath-panel-header">
                <div class="mypath-panel-header-title">
                    <span class="mypath-panel-badge">Посты</span>
                    <span class="mypath-panel-hint">Листайте вправо →</span>
                </div>
                <button class="mypath-panel-close" type="button" aria-label="Свернуть посты">×</button>
            </div>
            <div class="mypath-posts-row" id="mypath-posts">
                ${postsHTML}
            </div>
        </section>
    `;

    // Универсальная панель «Скоро» для Комикса / Мультика
    const buildSoonPanelHTML = (id, title, subtitle, iconKey) => `
        <section class="mypath-panel mypath-soon-panel-inline" id="${id}">
            <div class="mypath-soon-inner">
                <div class="mypath-soon-icon">
                    ${MYPATH_ICONS[iconKey] || MYPATH_ICONS.doc}
                </div>
                <div class="mypath-soon-text">
                    <span class="mypath-soon-badge">${title}</span>
                    <h3 class="mypath-soon-title">Скоро</h3>
                    <p class="mypath-soon-subtitle">${subtitle}</p>
                    <div class="mypath-soon-loader" aria-hidden="true">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <button class="mypath-panel-close" type="button" aria-label="Свернуть">×</button>
            </div>
        </section>
    `;

    const comicPanelHTML = buildSoonPanelHTML(
        'mypath-comic-panel',
        'Комикс',
        'Визуальные истории уже рисуются. Загляните позже — каждая страница станет новой главой.',
        'comic'
    );

    const filmPanelHTML = buildSoonPanelHTML(
        'mypath-film-panel',
        'Мультик / Фильм',
        'Короткие истории оживают в движении. Премьера не за горами — следите за обновлениями.',
        'film'
    );

    container.innerHTML = `
        <div class="mypath-layout">
            ${leftHTML}
            <div class="mypath-main">

                <section class="mypath-hero">
                    <div class="mypath-hero-text">
                        <h1 class="mypath-hero-title">
                            <span class="line1">${hero.line1}</span>
                            <span class="line2">${hero.line2}</span>
                        </h1>
                        <p>${hero.text}</p>
                    </div>
                </section>

                <section class="mypath-section">
                    <div class="mypath-section-title">
                        <div class="mypath-section-icon">
                            ${MYPATH_ICONS.compass}
                        </div>
                        <h2>Мой путь</h2>
                        <div class="line"></div>
                    </div>
                    <p class="mypath-section-subtitle">Разделы моего пути. Здесь — то, что формирует меня.</p>

                    <div class="mypath-cards">

                        <!-- 1. Посты + панель под ними -->
                        <a href="posts" class="mypath-card" data-card-link="posts" data-panel="mypath-posts-panel" onclick="event.preventDefault();">
                            <div class="mypath-card-info">
                                <div class="mypath-card-icon">${MYPATH_ICONS.doc}</div>
                                <h3>${postsCard.title}</h3>
                                <p>${postsCard.text}</p>
                                <span class="mypath-card-btn">
                                    <span>Открыть</span>
                                    <span class="btn-arrow">${MYPATH_ICONS.arrow}</span>
                                </span>
                            </div>
                            <div class="mypath-card-visual" style="background-image: url('${postsCard.image}');"></div>
                        </a>
                        ${postsPanelHTML}

                        <!-- 2. Комикс + панель под ним -->
                        <a href="#" class="mypath-card" data-card-link="comic" data-panel="mypath-comic-panel" onclick="event.preventDefault();">
                            <div class="mypath-card-info">
                                <div class="mypath-card-icon">${MYPATH_ICONS.comic}</div>
                                <h3>${comicCard.title}</h3>
                                <p>${comicCard.text}</p>
                                <span class="mypath-card-btn soon">
                                    <span class="btn-icon">${MYPATH_ICONS.hourglass}</span>
                                    <span>Скоро</span>
                                    <span class="btn-arrow">${MYPATH_ICONS.arrow}</span>
                                </span>
                            </div>
                            <div class="mypath-card-visual" style="background-image: url('${comicCard.image}');"></div>
                        </a>
                        ${comicPanelHTML}

                        <!-- 3. Мультик / Фильм + панель под ним -->
                        <a href="#" class="mypath-card" data-card-link="film" data-panel="mypath-film-panel" onclick="event.preventDefault();">
                            <div class="mypath-card-info">
                                <div class="mypath-card-icon">${MYPATH_ICONS.film}</div>
                                <h3>${filmCard.title}</h3>
                                <p>${filmCard.text}</p>
                                <span class="mypath-card-btn soon">
                                    <span class="btn-icon">${MYPATH_ICONS.hourglass}</span>
                                    <span>Скоро</span>
                                    <span class="btn-arrow">${MYPATH_ICONS.arrow}</span>
                                </span>
                            </div>
                            <div class="mypath-card-visual" style="background-image: url('${filmCard.image}');"></div>
                        </a>
                        ${filmPanelHTML}

                    </div>
                </section>

                <div class="mypath-footer">
                    Всё самое интересное ещё впереди
                </div>

            </div>
            ${rightHTML}
        </div>
    `;

    /* ---------- Управление панелями под карточками ---------- */
    const cards = container.querySelectorAll('.mypath-card[data-panel]');

    const closeAllPanels = (exceptCard = null) => {
        cards.forEach(card => {
            const panelId = card.dataset.panel;
            const panel = container.querySelector('#' + panelId);
            if (!panel) return;
            if (card === exceptCard) return;
            panel.classList.remove('active');
            card.classList.remove('is-open');
        });
    };

    cards.forEach(card => {
        const panelId = card.dataset.panel;
        const panel = container.querySelector('#' + panelId);
        if (!panel) return;

        const closeBtn = panel.querySelector('.mypath-panel-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                panel.classList.remove('active');
                card.classList.remove('is-open');
            });
        }

        card.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = panel.classList.contains('active');
            closeAllPanels(card);
            if (isOpen) {
                panel.classList.remove('active');
                card.classList.remove('is-open');
            } else {
                panel.classList.add('active');
                card.classList.add('is-open');
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    /* ---------- Модалка поста ---------- */
    const mypathModal      = document.getElementById('mypath-modal');
    const mypathModalImg   = document.getElementById('mypath-modal-img');
    const mypathModalImage = document.getElementById('mypath-modal-image');
    const mypathModalTag   = document.getElementById('mypath-modal-tag');
    const mypathModalTitle = document.getElementById('mypath-modal-title');
    const mypathModalText  = document.getElementById('mypath-modal-text');
    const mypathModalTg    = document.getElementById('mypath-modal-telegram');

    const openMypathModal = (index) => {
        const post = MYPATH.posts[index];
        if (!post || !mypathModal) return;

        mypathModalImg.src = post.image;
        mypathModalImg.alt = post.title;
        mypathModalImage.style.backgroundColor = '#0a1310';

        mypathModalTag.textContent   = post.tag;
        mypathModalTitle.textContent = post.title;
        mypathModalText.textContent  = post.text;
        mypathModalTg.href           = post.url;

        mypathModal.classList.add('open');
        mypathModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('crypto-modal-open');
        mypathModal.querySelector('.crypto-modal-close').focus();
    };

    const closeMypathModal = () => {
        if (!mypathModal) return;
        mypathModal.classList.remove('open');
        mypathModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('crypto-modal-open');
    };

    container.querySelectorAll('.mypath-post').forEach(postEl => {
        const index = parseInt(postEl.dataset.postIndex, 10);

        postEl.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            openMypathModal(index);
        });

        postEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openMypathModal(index);
            }
        });
    });

    mypathModal.querySelectorAll('[data-close-mypath-modal]').forEach(el => {
        el.addEventListener('click', closeMypathModal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mypathModal?.classList.contains('open')) {
            closeMypathModal();
        }
    });
}

/* --- Генерация частиц для разделов Финансы и Мерч --- */
function createSoonParticles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'soon-particle';
        particle.style.left = Math.random() * 100 + '%';
        const size = 1.5 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = (6 + Math.random() * 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

const bubblesView = document.getElementById('bubbles-view');
const bubbles = [];

function createBubbles() {
    bubblesView.querySelectorAll('.bubble').forEach(el => el.remove());
    bubbles.length = 0;
    PLATFORMS.forEach(data => bubbles.push(new Bubble(data, bubblesView)));
}

function animate() {
    const w = bubblesView.clientWidth;
    const h = bubblesView.clientHeight;
    bubbles.forEach(b => b.update(1, w, h));
    requestAnimationFrame(animate);
}

const viewBtns = document.querySelectorAll('.view-btn');
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        document.documentElement.setAttribute('data-view', view);
        localStorage.setItem('werth69-view', view);
        viewBtns.forEach(b => b.classList.toggle('active', b.dataset.view === view));
        if (view === 'bubbles') {
            requestAnimationFrame(() => createBubbles());
        }
        if (view === 'crypto') {
            renderCryptoView();
        }
        if (view === 'mypath') {
            renderMypathView();
        }
        // finance и merch рендерятся статично из HTML
    });
});

let initialView = document.documentElement.getAttribute('data-view') || 'bubbles';
if (window.matchMedia('(max-width: 768px)').matches && initialView === 'bubbles') {
    initialView = 'list';
    document.documentElement.setAttribute('data-view', initialView);
    localStorage.setItem('werth69-view', initialView);
}
viewBtns.forEach(b => b.classList.toggle('active', b.dataset.view === initialView));

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 768px)').matches &&
        document.documentElement.getAttribute('data-view') === 'bubbles') {
        document.documentElement.setAttribute('data-view', 'list');
        localStorage.setItem('werth69-view', 'list');
        viewBtns.forEach(b => b.classList.toggle('active', b.dataset.view === 'list'));
    }
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const w = bubblesView.clientWidth, h = bubblesView.clientHeight;
        bubbles.forEach(b => {
            const r = b.size / 2;
            if (b.x - r < 0) b.x = r;
            if (b.x + r > w) b.x = w - r;
            if (b.y - r < 0) b.y = r;
            if (b.y + r > h) b.y = h - r;
        });
    }, 150);
});

requestAnimationFrame(() => {
    createBubbles();
    animate();
    renderCards();
    if (initialView === 'crypto') {
        renderCryptoView();
    }
    if (initialView === 'mypath') {
        renderMypathView();
    }
    // Частицы для финансов и мерча
    createSoonParticles('finance-particles', 30);
    createSoonParticles('merch-particles', 30);
});