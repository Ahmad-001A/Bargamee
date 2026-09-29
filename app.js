const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) tg.expand();

// База данных игр, баннеров и описаний
const catalogData = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    desc: "UC — автоматическое пополнение",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    icon: "🪖",
    items: [
      { name: "60 UC", price: "10,15 смн." },
      { name: "300 + 25 UC", price: "47,80 смн." },
      { name: "600 + 60 UC", price: "95,35 смн." },
      { name: "1500 + 300 UC", price: "240,40 смн." },
      { name: "3000 + 850 UC", price: "454,10 смн." },
      { name: "6000 + 2100 UC", price: "877,05 смн." }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    desc: "Алмазы — регион аккаунта на выбор",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    icon: "💎",
    items: [
      { name: "100 алмазов", price: "9,45 смн." },
      { name: "310 алмазов", price: "28,70 смн." },
      { name: "520 алмазов", price: "45,20 смн." },
      { name: "1060 алмазов", price: "85,55 смн." },
      { name: "2180 алмазов", price: "171,10 смн." },
      { name: "5600 алмазов", price: "437,10 смн." },
      { name: "Ваучер на неделю Lite", price: "4,75 смн." },
      { name: "Ваучер на неделю", price: "17,85 смн." },
      { name: "Ваучер на месяц", price: "64,75 смн." }
    ]
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    desc: "Кристаллы Сотворения — глобальный сервер",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
    icon: "⚔️",
    items: [
      { name: "60 Кристаллов", price: "10,55 смн." },
      { name: "300 + 30 Кристаллов", price: "53,20 смн." },
      { name: "980 + 110 Кристаллов", price: "159,60 смн." },
      { name: "1980 + 260 Кристаллов", price: "319,30 смн." },
      { name: "3280 + 600 Кристаллов", price: "532,15 смн." },
      { name: "6480 + 1600 Кристаллов", price: "1064,35 смн." },
      { name: "Благословение луны", price: "53,20 смн." }
    ]
  },
  {
    id: "roblox",
    name: "Roblox",
    desc: "Robux подарочными картами",
    banner: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80",
    icon: "🧱",
    items: [
      { name: "50 Robux", price: "11,20 смн." },
      { name: "100 Robux", price: "17,65 смн." },
      { name: "800 Robux", price: "92,50 смн." },
      { name: "1000 Robux", price: "113,05 смн." },
      { name: "2000 Robux", price: "217,95 смн." },
      { name: "2500 Robux", price: "294,20 смн." },
      { name: "4500 Robux", price: "493,70 смн." },
      { name: "10000 Robux", price: "965,30 смн." }
    ]
  },
  {
    id: "codm",
    name: "Call of Duty: Mobile",
    desc: "CP — регион аккаунта Activision",
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80",
    icon: "🔫",
    items: [
      { name: "80 + 8 CP", price: "11,70 смн." },
      { name: "400 + 60 CP", price: "42,75 смн." },
      { name: "800 + 160 CP", price: "85,45 смн." },
      { name: "2000 + 600 CP", price: "215,00 смн." },
      { name: "4000 + 1400 CP", price: "427,70 смн." },
      { name: "8000 + 3600 CP", price: "935,60 смн." }
    ]
  },
  {
    id: "mlbb",
    name: "Mobile Legends: Bang Bang",
    desc: "Алмазы — сервер аккаунта на выбор",
    banner: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=400&q=80",
    icon: "🛡️",
    items: [
      { name: "12 Алмазов", price: "2,65 смн." },
      { name: "70 Алмазов", price: "13,75 смн." },
      { name: "140 Алмазов", price: "27,50 смн." },
      { name: "284 Алмаза", price: "49,95 смн." },
      { name: "716 Алмазов", price: "118,40 смн." },
      { name: "1084 Алмаза", price: "179,65 смн." },
      { name: "2010 Алмазов", price: "310,45 смн." },
      { name: "Недельный пропуск", price: "17,55 смн." }
    ]
  }
];

let currentGame = null;
let selectedItem = null;
let currentPayment = 'Алиф Моби';

// Рендер каталога при загрузке
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
        <div class="game-action">
          <span>Пополнить</span>
          <span>→</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openGame(game) {
  currentGame = game;
  selectedItem = null;

  document.getElementById('selected-game-title').innerText = game.name;
  document.getElementById('selected-game-desc').innerText = game.desc;

  const container = document.getElementById('goods-container');
  container.innerHTML = '';

  game.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.onclick = () => selectItem(card, item);
    card.innerHTML = `
      <div class="item-icon">${game.icon}</div>
      <span class="item-name">${item.name}</span>
      <span class="item-price">${item.price}</span>
    `;
    container.appendChild(card);
  });

  document.getElementById('step-game').classList.remove('active');
  document.getElementById('step-order').classList.add('active');
}

function selectItem(cardElement, item) {
  document.querySelectorAll('.item-card').forEach(el => el.classList.remove('selected'));
  cardElement.classList.add('selected');
  selectedItem = item;
}

function goBack() {
  document.getElementById('step-order').classList.remove('active');
  document.getElementById('step-game').classList.add('active');
}

function setPaymentMethod(method) {
  currentPayment = method;
  document.getElementById('pay-method-name').innerText = method;

  const buttons = document.querySelectorAll('.pay-btn');
  buttons.forEach(btn => btn.classList.toggle('active', btn.innerText.includes(method)));

  const reqCard = document.getElementById('req-card');
  if (method === 'Алиф Моби') {
    reqCard.innerText = '+992931088151';
  } else {
    reqCard.innerText = '+992009096449';
  }
}

function copyCard() {
  const cardText = document.getElementById('req-card').innerText;
  navigator.clipboard.writeText(cardText);
  alert('Номер скопирован: ' + cardText);
}

function sendOrder() {
  const playerId = document.getElementById('player-id').value;
  const receiptFile = document.getElementById('receipt-input').files[0];

  if (!playerId) {
    alert('Введите ваш ID игрока!');
    return;
  }
  if (!selectedItem) {
    alert('Выберите номинал!');
    return;
  }
  if (!receiptFile) {
    alert('Прикрепите скриншот чека!');
    return;
  }

  const orderData = {
    game: currentGame.name,
    item: selectedItem.name,
    price: selectedItem.price,
    playerId: playerId,
    paymentMethod: currentPayment
  };

  if (tg) {
    tg.sendData(JSON.stringify(orderData));
  } else {
    alert('Заказ сформирован! Откройте через Telegram для отправки.');
  }
}

// Запуск при старте
renderCatalog();