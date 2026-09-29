// Инициализация Telegram WebApp
const tg = window.Telegram ? window.Telegram.WebApp : null;

if (tg) {
  try {
    tg.ready();
    tg.expand();
  } catch (e) {
    console.error("Telegram WebApp init error:", e);
  }
}

// Официальные качественные постеры с надежных CDN
const catalogData = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    desc: "Пополнение UC по ID игрока",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Пакеты UC",
        items: [
          { name: "60 UC", price: "10.15 смн." },
          { name: "300 + 25 UC", bonus: "БОНУС", price: "47.80 смн." },
          { name: "600 + 60 UC", bonus: "ХИТ", price: "95.35 смн." },
          { name: "1500 + 300 UC", price: "240.40 смн." },
          { name: "3000 + 850 UC", price: "454.10 смн." },
          { name: "6000 + 2100 UC", price: "877.05 смн." }
        ]
      },
      {
        title: "Подписки & Пропуск",
        items: [
          { name: "Royale Pass", price: "56.95 смн." },
          { name: "Elite Pass Plus", price: "277.60 смн." },
          { name: "Prime (1 мес)", price: "10.30 смн." },
          { name: "Prime Plus (1 мес)", price: "94.55 смн." }
        ]
      }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    desc: "Алмазы и ваучеры",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Алмазы",
        items: [
          { name: "100 + 10 Алмазов", price: "9.45 смн." },
          { name: "310 + 31 Алмаз", price: "28.70 смн." },
          { name: "520 + 52 Алмаза", price: "45.20 смн." },
          { name: "1060 + 106 Алмазов", price: "85.55 смн." },
          { name: "2180 + 218 Алмазов", price: "171.10 смн." }
        ]
      },
      {
        title: "Ваучеры",
        items: [
          { name: "Недельный ваучер", price: "17.85 смн." },
          { name: "Месячный ваучер", price: "64.75 смн." }
        ]
      }
    ]
  },
  {
    id: "mlbb",
    name: "Mobile Legends",
    desc: "Алмазы и пропуски",
    banner: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Алмазы MLBB",
        items: [
          { name: "86 Алмазов", price: "13.75 смн." },
          { name: "172 Алмаза", price: "27.50 смн." },
          { name: "257 Алмазов", price: "49.95 смн." },
          { name: "706 Алмазов", price: "118.40 смн." },
          { name: "2195 Алмазов", price: "310.45 смн." }
        ]
      },
      {
        title: "Пропуска",
        items: [
          { name: "Недельный пропуск", price: "17.55 смн." },
          { name: "Twilight Pass", price: "81.65 смн." }
        ]
      }
    ]
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    desc: "Кристаллы и Луна",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    servers: ["Европа", "Азия", "Америка", "TW/HK/MO"],
    categories: [
      {
        title: "Кристаллы Сотворения",
        items: [
          { name: "Благословение луны", price: "53.20 смн." },
          { name: "60 Кристаллов", price: "10.55 смн." },
          { name: "300+30 Кристаллов", price: "53.20 смн." },
          { name: "980+110 Кристаллов", price: "159.60 смн." },
          { name: "1980+260 Кристаллов", price: "319.30 смн." },
          { name: "3280+600 Кристаллов", price: "532.15 смн." }
        ]
      }
    ]
  },
  {
    id: "codm",
    name: "CoD Mobile",
    desc: "CP Пополнение",
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
    regions: ["Казахстан / СНГ", "США", "Индия", "Европа"],
    categories: [
      {
        title: "Пакеты CP",
        items: [
          { name: "80 CP", price: "11.70 смн." },
          { name: "420 CP", price: "42.75 смн." },
          { name: "880 CP", price: "85.45 смн." },
          { name: "2400 CP", price: "215.00 смн." },
          { name: "5000 CP", price: "427.70 смн." }
        ]
      }
    ]
  },
  {
    id: "roblox",
    name: "Roblox",
    desc: "Robux кодами и пополнениями",
    banner: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Пакеты Robux",
        items: [
          { name: "100 Robux", price: "17.65 смн." },
          { name: "400 Robux", price: "55.00 смн." },
          { name: "800 Robux", price: "92.50 смн." },
          { name: "2000 Robux", price: "217.95 смн." },
          { name: "4500 Robux", price: "493.70 смн." }
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

function showError(text) {
  const errBox = document.getElementById('error-box');
  errBox.innerText = text;
  errBox.style.display = 'block';
  errBox.scrollIntoView({ behavior: 'smooth' });
}

function hideError() {
  const errBox = document.getElementById('error-box');
  errBox.style.display = 'none';
  errBox.innerText = '';
}

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
        <div class="game-action">Купить →</div>
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

  const regionGroup = document.getElementById('region-selector-group');
  const regionContainer = document.getElementById('region-buttons');
  regionContainer.innerHTML = '';

  const options = game.regions || game.servers;
  if (options && options.length > 0) {
    regionGroup.style.display = 'block';
    document.getElementById('region-label').innerText = game.regions ? 'Регион аккаунта:' : 'Сервер:';
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
  window.scrollTo(0, 0);
}

function selectItem(cardElement, item) {
  document.querySelectorAll('.item-card').forEach(el => el.classList.remove('selected'));
  cardElement.classList.add('selected');
  selectedItem = item;
  hideError();
}

function resetForm() {
  selectedItem = null;
  selectedRegionServer = null;
  receiptFileName = '';
  hideError();
  document.getElementById('player-id').value = '';
  document.getElementById('receipt-input').value = '';
  document.getElementById('file-label-text').innerText = '📷 Выбрать фото чека';
  document.getElementById('receipt-filename').innerText = '';
}

function handleReceiptChange() {
  const input = document.getElementById('receipt-input');
  if (input.files && input.files[0]) {
    receiptFileName = input.files[0].name;
    document.getElementById('file-label-text').innerText = '✅ Чек выбран';
    document.getElementById('receipt-filename').innerText = 'Файл: ' + receiptFileName;
    hideError();
  }
}

function goBack() {
  resetForm();
  document.getElementById('step-order').classList.remove('active');
  document.getElementById('step-game').classList.add('active');
  window.scrollTo(0, 0);
}

function setPaymentMethod(method) {
  currentPayment = method;
  document.getElementById('pay-method-name').innerText = method;

  document.getElementById('pay-alif').classList.toggle('active', method === 'Алиф Моби');
  document.getElementById('pay-dc').classList.toggle('active', method === 'DC Bank');

  const reqCard = document.getElementById('req-card');
  reqCard.innerText = (method === 'Алиф Моби') ? '+992931088151' : '+992009096449';
}

function copyCard() {
  const cardText = document.getElementById('req-card').innerText;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(cardText);
    alert('Номер скопирован: ' + cardText);
  } else {
    alert('Скопируйте вручную: ' + cardText);
  }
}

function sendOrder() {
  hideError();

  const playerId = document.getElementById('player-id').value.trim();

  // Валидация
  if (!playerId) {
    showError("⚠️ Заполните поле «Данные аккаунта (ID)»");
    return;
  }
  if (!selectedItem) {
    showError("⚠️ Выберите нужный товар из списка выше!");
    return;
  }
  if (!receiptFileName) {
    showError("⚠️ Прикрепите фото чека оплаты!");
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

  if (!tg) {
    showError("❌ Ошибка: Приложение открыто не через Telegram!");
    return;
  }

  try {
    // Отправка данных обратно в бот
    tg.sendData(JSON.stringify(orderData));
  } catch (err) {
    showError("❌ Ошибка отправки: " + err.message + "\nУбедитесь, что открыли магазин через нижнюю кнопку клавиатуры бота!");
  }
}

renderCatalog();
