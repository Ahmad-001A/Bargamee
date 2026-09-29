const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) tg.expand();

// БАЗА ДАННЫХ ИГР И ПОЛНОГО КАТАЛОГА С ПОСТЕРОВ
const catalogData = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    desc: "UC — автоматическое пополнение",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    categories: [
      {
        title: "UC Номиналы",
        items: [
          { name: "60 UC", price: "10,15 смн." },
          { name: "300 UC", bonus: "+25 в подарок", price: "47,80 смн." },
          { name: "600 UC", bonus: "+60 в подарок", price: "95,35 смн." },
          { name: "1500 UC", bonus: "+300 в подарок", price: "240,40 смн." },
          { name: "3000 UC", bonus: "+850 в подарок", price: "454,10 смн." },
          { name: "6000 UC", bonus: "+2100 в подарок", price: "877,05 смн." }
        ]
      },
      {
        title: "Подписки Prime",
        items: [
          { name: "Prime (1 мес)", price: "10,30 смн." },
          { name: "Prime (3 мес)", price: "29,60 смн." },
          { name: "Prime (6 мес)", price: "56,75 смн." },
          { name: "Prime (12 мес)", price: "110,50 смн." },
          { name: "Prime Plus (1 мес)", price: "94,55 смн." },
          { name: "Prime Plus (3 мес)", price: "283,60 смн." },
          { name: "Prime Plus (6 мес)", price: "524,55 смн." },
          { name: "Prime Plus (12 мес)", price: "1039,55 смн." }
        ]
      },
      {
        title: "Elite Pass & Наборы",
        items: [
          { name: "Elite Pass (1-50)", price: "56,95 смн." },
          { name: "Elite Pass (1-100)", price: "111,85 смн." },
          { name: "Elite Pass Plus", price: "277,60 смн." },
          { name: "Набор первой покупки", price: "10,30 смн." },
          { name: "Выгодный набор 1", price: "10,30 смн." },
          { name: "Выгодный набор 2", price: "29,55 смн." }
        ]
      },
      {
        title: "WOW-Монеты",
        items: [
          { name: "60 WOW-монет", price: "10,50 смн." },
          { name: "325 WOW-монет", price: "50,20 смн." },
          { name: "660 WOW-монет", price: "98,50 смн." },
          { name: "1800 WOW-монет", price: "242,05 смн." },
          { name: "3850 WOW-монет", price: "471,30 смн." },
          { name: "8100 WOW-монет", price: "925,30 смн." }
        ]
      }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    desc: "Алмазы — регион аккаунта на выбор",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    categories: [
      {
        title: "Алмазы",
        items: [
          { name: "100 алмазов", bonus: "+10 в подарок", price: "9,45 смн." },
          { name: "310 алмазов", bonus: "+31 в подарок", price: "28,70 смн." },
          { name: "520 алмазов", bonus: "+52 в подарок", price: "45,20 смн." },
          { name: "1000 алмазов", bonus: "+106 в подарок", price: "85,55 смн." },
          { name: "2180 алмазов", bonus: "+218 в подарок", price: "171,10 смн." },
          { name: "5600 алмазов", bonus: "+560 в подарок", price: "437,10 смн." }
        ]
      },
      {
        title: "Ваучеры и Пропуск",
        items: [
          { name: "Недельный ваучер Lite", price: "4,75 смн." },
          { name: "Ваучер на неделю", price: "17,85 смн." },
          { name: "Ваучер на месяц", price: "64,75 смн." },
          { name: "Пропуск Уровень 6", price: "3,80 смн." },
          { name: "Пропуск Уровень 10", price: "6,75 смн." },
          { name: "Пропуск Уровень 15", price: "8,75 смн." },
          { name: "Пропуск Уровень 20", price: "8,75 смн." },
          { name: "Пропуск Уровень 25", price: "8,75 смн." },
          { name: "Пропуск Уровень 30", price: "9,35 смн." },
          { name: "Набор новичка", price: "2,90 смн." }
        ]
      }
    ]
  },
  {
    id: "mlbb",
    name: "Mobile Legends: Bang Bang",
    desc: "Алмазы — сервер аккаунта на выбор",
    banner: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80",
    categories: [
      {
        title: "Стандартные Алмазы",
        items: [
          { name: "12 алмазов", price: "2,65 смн." },
          { name: "14 алмазов", price: "2,75 смн." },
          { name: "28 алмазов", price: "6,10 смн." },
          { name: "70 алмазов", price: "13,75 смн." },
          { name: "140 алмазов", price: "27,50 смн." },
          { name: "284 алмаза", price: "49,95 смн." },
          { name: "716 алмазов", price: "118,40 смн." },
          { name: "1084 алмаза", price: "179,65 смн." },
          { name: "2010 алмазов", price: "310,45 смн." },
          { name: "7502 алмаза", price: "1138,15 смн." }
        ]
      },
      {
        title: "Двойное первое пополнение",
        items: [
          { name: "50 + 50 алмазов", price: "8,80 смн." },
          { name: "150 + 150 алмазов", price: "25,85 смн." },
          { name: "250 + 250 алмазов", price: "40,55 смн." },
          { name: "500 + 500 алмазов", price: "78,45 смн." }
        ]
      },
      {
        title: "Пропуска и Наборы",
        items: [
          { name: "Недельный пропуск", price: "17,55 смн." },
          { name: "Twilight Pass", price: "81,65 смн." },
          { name: "Недельный элитный набор", price: "8,95 смн." },
          { name: "Месячный элитный набор", price: "40,15 смн." }
        ]
      }
    ]
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    desc: "Кристаллы Сотворения — глобальный сервер",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
    servers: ["Европа", "Азия", "Америка", "TW/HK/MO"],
    categories: [
      {
        title: "Кристаллы Сотворения",
        items: [
          { name: "60 Кристаллов", price: "10,55 смн." },
          { name: "300 + 30 Кристаллов", price: "53,20 смн." },
          { name: "980 + 110 Кристаллов", price: "159,60 смн." },
          { name: "1980 + 260 Кристаллов", price: "319,30 смн." },
          { name: "3280 + 600 Кристаллов", price: "532,15 смн." },
          { name: "6480 + 1600 Кристаллов", price: "1064,35 смн." },
          { name: "Благословение полой луны", price: "53,20 смн." }
        ]
      }
    ]
  },
  {
    id: "codm",
    name: "Call of Duty: Mobile",
    desc: "CP — регион аккаунта Activision на выбор",
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80",
    regions: ["Казахстан", "США", "Канада", "Индия", "Саудовская Аравия"],
    categories: [
      {
        title: "CP Номиналы",
        items: [
          { name: "80 + 8 CP", price: "11,70 смн." },
          { name: "400 + 60 CP", price: "42,75 смн." },
          { name: "800 + 160 CP", price: "85,45 смн." },
          { name: "2000 + 600 CP", price: "215,00 смн." },
          { name: "4000 + 1400 CP", price: "427,70 смн." },
          { name: "8000 + 3600 CP", price: "935,60 смн." },
          { name: "16000 + 7200 CP", price: "1871,20 смн." },
          { name: "24000 + 10800 CP", price: "3172,60 смн." },
          { name: "40000 + 18000 CP", price: "5287,65 смн." }
        ]
      }
    ]
  },
  {
    id: "roblox",
    name: "Roblox",
    desc: "Robux подарочными картами",
    banner: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80",
    regions: ["Глобальный", "Россия/СНГ", "США", "Европа"],
    categories: [
      {
        title: "Robux Номиналы",
        items: [
          { name: "50 Robux", price: "11,20 смн." },
          { name: "100 Robux", price: "17,65 смн." },
          { name: "800 Robux", price: "92,50 смн." },
          { name: "1000 Robux", price: "113,05 смн." },
          { name: "2000 Robux", price: "217,95 смн." },
          { name: "2500 Robux", price: "294,20 смн." },
          { name: "3000 Robux", price: "348,00 смн." },
          { name: "4500 Robux", price: "493,70 смн." },
          { name: "10000 Robux", price: "965,30 смн." }
        ]
      }
    ]
  }
];

let currentGame = null;
let selectedItem = null;
let selectedRegionServer = null;
let currentPayment = 'Алиф Моби';
let receiptFileName = '';

function renderCatalog() {
  const grid = document.getElementById('main-game-grid');
  grid.innerHTML = '';

  catalogData.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => openGame(game);

    card.innerHTML = `
      <img src="${game.banner}" class="game-banner-img" alt="${game.name}">
      <div class="game-info">
        <div>
          <div class="game-title">${game.name}</div>
          <div class="game-desc">${game.desc}</div>
        </div>
        <div class="game-action">Пополнить →</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openGame(game) {
  currentGame = game;
  resetForm();

  document.getElementById('selected-game-title').innerText = game.name;
  document.getElementById('selected-game-desc').innerText = game.desc;
  document.getElementById('selected-game-banner').src = game.banner;

  // Регионы / Серверы
  const regionGroup = document.getElementById('region-selector-group');
  const regionContainer = document.getElementById('region-buttons');
  regionContainer.innerHTML = '';

  const options = game.regions || game.servers;
  if (options && options.length > 0) {
    regionGroup.style.display = 'block';
    document.getElementById('region-label').innerText = game.regions ? 'Регион аккаунта:' : 'Выберите сервер:';
    options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `tag-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerText = opt;
      btn.onclick = () => {
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedRegionServer = opt;
      };
      regionContainer.appendChild(btn);
    });
    selectedRegionServer = options[0];
  } else {
    regionGroup.style.display = 'none';
  }

  // Отрисовка Категорий и Товаров
  const container = document.getElementById('goods-container');
  container.innerHTML = '';

  game.categories.forEach(cat => {
    const titleEl = document.createElement('div');
    titleEl.className = 'category-title';
    titleEl.innerText = cat.title;
    container.appendChild(titleEl);

    const gridEl = document.createElement('div');
    gridEl.className = 'goods-grid';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.onclick = () => selectItem(card, item);

      card.innerHTML = `
        ${item.bonus ? `<span class="item-badge">${item.bonus}</span>` : ''}
        <span class="item-name">${item.name}</span>
        <span class="item-price">${item.price}</span>
      `;
      gridEl.appendChild(card);
    });

    container.appendChild(gridEl);
  });

  document.getElementById('step-game').classList.remove('active');
  document.getElementById('step-order').classList.add('active');
}

function selectItem(cardElement, item) {
  document.querySelectorAll('.item-card').forEach(el => el.classList.remove('selected'));
  cardElement.classList.add('selected');
  selectedItem = item;
}

function resetForm() {
  selectedItem = null;
  selectedRegionServer = null;
  receiptFileName = '';
  document.getElementById('player-id').value = '';
  document.getElementById('receipt-input').value = '';
  document.getElementById('receipt-filename').innerText = '';
}

function handleReceiptChange() {
  const input = document.getElementById('receipt-input');
  if (input.files && input.files[0]) {
    receiptFileName = input.files[0].name;
    document.getElementById('receipt-filename').innerText = 'Загружен чек: ' + receiptFileName;
  }
}

function goBack() {
  resetForm();
  document.getElementById('step-order').classList.remove('active');
  document.getElementById('step-game').classList.add('active');
}

function setPaymentMethod(method) {
  currentPayment = method;
  document.getElementById('pay-method-name').innerText = method;

  const buttons = document.querySelectorAll('.pay-btn');
  buttons.forEach(btn => btn.classList.toggle('active', btn.innerText.includes(method)));

  const reqCard = document.getElementById('req-card');
  reqCard.innerText = (method === 'Алиф Моби') ? '+992931088151' : '+992009096449';
}

function copyCard() {
  const cardText = document.getElementById('req-card').innerText;
  navigator.clipboard.writeText(cardText);
  alert('Номер скопирован: ' + cardText);
}

function sendOrder() {
  const playerId = document.getElementById('player-id').value.trim();

  if (!playerId) {
    alert('Введите ваш ID игрока!');
    return;
  }
  if (!selectedItem) {
    alert('Выберите номинал!');
    return;
  }
  if (!receiptFileName) {
    alert('Прикрепите скриншот чека!');
    return;
  }

  const orderData = {
    game: currentGame.name,
    item: selectedItem.name,
    price: selectedItem.price,
    playerId: playerId,
    regionOrServer: selectedRegionServer || 'Стандарт',
    paymentMethod: currentPayment,
    receiptFile: receiptFileName
  };

  if (tg) {
    tg.sendData(JSON.stringify(orderData));
  } else {
    alert('Заказ успешно создан! Откройте через Telegram для отправки.');
  }
}

renderCatalog();
