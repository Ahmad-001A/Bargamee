// ⚙️ НАСТРОЙКИ БОТА И МАССИВ АДМИНИСТРАТОРОВ
const BOT_TOKEN = "8920396236:AAH74veXNZTanEyw-P-BfEbbwUXI_9z-1W8"; 

// 🎯 Укажите Telegram ID обоих админов (без символов # !)
const ADMIN_IDS = [
  "7934934196", // Telegram ID первого админа
  "6940892940"  // Telegram ID второго админа
];

// 🎮 КАТАЛОГ ИГР (Используем надежные прямые обложки)
const catalog = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    desc: "Пополнение UC по ID",
    badge: "HOT",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Пакеты UC",
        items: [
          { name: "60 UC", price: "15 смн." },
          { name: "300 + 25 UC", bonus: "БОНУС", price: "50 смн." },
          { name: "600 + 60 UC", bonus: "ХИТ", price: "100 смн." },
          { name: "1500 + 300 UC", price: "250 смн." },
          { name: "3000 + 850 UC", price: "460 смн." },
          { name: "6000 + 2100 UC", price: "880 смн." }
        ]
      },
      {
        title: "Подписки",
        items: [
          { name: "Royale Pass", price: "60 смн." },
          { name: "Elite Pass Plus", price: "290 смн." },
          { name: "Prime (1 мес)", price: "15 смн." },
          { name: "Prime Plus (1 мес)", price: "100 смн." }
        ]
      }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    desc: "Алмазы и ваучеры",
    badge: "POPULAR",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Алмазы",
        items: [
          { name: "100 + 10 Алмазов", price: "10.0 смн." },
          { name: "310 + 31 Алмаз", price: "30.0 смн." },
          { name: "520 + 52 Алмаза", price: "50.0 смн." },
          { name: "1060 + 106 Алмазов", price: "95.0 смн." },
          { name: "2180 + 218 Алмазов", price: "195.0 смн." }
        ]
      },
      {
        title: "Ваучеры",
        items: [
          { name: "Недельный ваучер", price: "18.50 смн." },
          { name: "Месячный ваучер", price: "80.0 смн." }
        ]
                title: "Пропуск прокачки",
        items: [
          { name: "6 уровень", price: "5 смн." },
          { name: "10 уровень", price: "7.80 смн." }
          { name: "15 уровень", price: "7.80 смн." }
          { name: "20 уровень", price: "8.0 смн." }
          { name: "25 уровень", price: "8.0 смн." }
          { name: "30 уровень", price: "10.50 смн." }
        ]
      }
    ]
  },
  {
    id: "mlbb",
    name: "Mobile Legends",
    desc: "Алмазы по ID",
    badge: "TOP",
    banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Алмазы MLBB",
        items: [
          { name: "86 Алмазов", price: "16.0 смн." },
          { name: "172 Алмаза", price: "30.0 смн." },
          { name: "257 Алмазов", price: "53.0 смн." },
          { name: "706 Алмазов", price: "125.0 смн." },
          { name: "2195 Алмазов", price: "320.0 смн." }
        ]
      },
      {
        title: "Пропуска",
        items: [
          { name: "Недельный пропуск", price: "20.0 смн." },
          { name: "Twilight Pass", price: "88.0 смн." }
        ]
      }
    ]
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    desc: "Кристаллы и Луна",
    banner: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
    servers: ["Европа", "Азия", "Америка", "TW/HK/MO"],
    categories: [
      {
        title: "Кристаллы Сотворения",
        items: [
          { name: "Благословение луны", price: "58.0 смн." },
          { name: "60 Кристаллов", price: "15.0 смн." },
          { name: "300+30 Кристаллов", price: "58.0 смн." },
          { name: "980+110 Кристаллов", price: "170.0 смн." },
          { name: "1980+260 Кристаллов", price: "330.0 смн." }
        ]
      }
    ]
  },
  {
    id: "codm",
    name: "CoD Mobile",
    desc: "CP Пополнение",
    badge: "SALE",
    banner: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80",
    regions: ["Казахстан / СНГ", "США", "Индия", "Европа"],
    categories: [
      {
        title: "Пакеты CP",
        items: [
          { name: "80 CP", price: "15.0 смн." },
          { name: "420 CP", price: "48.0 смн." },
          { name: "880 CP", price: "90.0 смн." },
          { name: "2400 CP", price: "225.0 смн." }
        ]
      }
    ]
  },
  {
    id: "roblox",
    name: "Roblox",
    desc: "Robux кодами",
    banner: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=600&q=80",
    categories: [
      {
        title: "Пакеты Robux",
        items: [
          { name: "100 Robux", price: "20.-0 смн." },
          { name: "400 Robux", price: "60.0 смн." },
          { name: "800 Robux", price: "99.0 смн." },
          { name: "2000 Robux", price: "230.0 смн." }
        ]
      }
    ]
  }
];

let selectedGame = null;
let selectedGoods = null;
let selectedServerRegion = null;
let selectedPayment = "Алиф Моби";

// 🎮 ОТРИСОВКА КАТАЛОГА
function renderCatalog() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;
  grid.innerHTML = "";

  catalog.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.onclick = () => openGame(game);

    card.innerHTML = `
      <div class="game-cover-wrap">
        ${game.badge ? `<span class="game-badge">${game.badge}</span>` : ''}
        <img src="${game.banner}" 
             class="game-cover" 
             alt="${game.name}" 
             referrerpolicy="no-referrer"
             onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/121826/00f0ff?text=${encodeURIComponent(game.name)}';">
      </div>
      <div class="game-details">
        <div>
          <div class="game-name">${game.name}</div>
          <div class="game-sub">${game.desc}</div>
        </div>
        <div class="game-btn-text">ПОПОЛНИТЬ ▶</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openGame(game) {
  selectedGame = game;
  resetForm();

  document.getElementById("order-game-title").innerText = game.name;
  document.getElementById("order-game-desc").innerText = game.desc;
  
  const bannerImg = document.getElementById("order-game-img");
  bannerImg.src = game.banner;
  bannerImg.onerror = function() {
    this.src = `https://via.placeholder.com/150/121826/00f0ff?text=${encodeURIComponent(game.name)}`;
  };

  const regionGroup = document.getElementById("group-region");
  const regionTags = document.getElementById("region-tags");
  regionTags.innerHTML = "";

  const options = game.regions || game.servers;
  if (options && options.length > 0) {
    regionGroup.style.display = "block";
    document.getElementById("region-label").innerText = game.regions ? "РЕГИОН АККАУНТА:" : "ВЫБЕРИТЕ СЕРВЕР:";
    options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `tag-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerText = opt;
      btn.onclick = () => {
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedServerRegion = opt;
      };
      regionTags.appendChild(btn);
    });
    selectedServerRegion = options[0];
  } else {
    regionGroup.style.display = "none";
  }

  const container = document.getElementById("goods-container");
  container.innerHTML = "";

  game.categories.forEach(cat => {
    const catTitle = document.createElement("div");
    catTitle.className = "cat-title";
    catTitle.innerText = cat.title;
    container.appendChild(catTitle);

    const grid = document.createElement("div");
    grid.className = "goods-grid";

    cat.items.forEach(item => {
      const itemCard = document.createElement("div");
      itemCard.className = "goods-card";
      itemCard.onclick = () => {
        document.querySelectorAll('.goods-card').forEach(c => c.classList.remove('selected'));
        itemCard.classList.add('selected');
        selectedGoods = item;
        hideStatus();
      };

      itemCard.innerHTML = `
        ${item.bonus ? `<span class="badge">${item.bonus}</span>` : ''}
        <span class="goods-name">${item.name}</span>
        <span class="goods-price">${item.price}</span>
      `;
      grid.appendChild(itemCard);
    });

    container.appendChild(grid);
  });

  document.getElementById("screen-catalog").classList.remove("active");
  document.getElementById("screen-order").classList.add("active");
  window.scrollTo(0, 0);
}

function showCatalog() {
  resetForm();
  document.getElementById("screen-order").classList.remove("active");
  document.getElementById("screen-catalog").classList.add("active");
  window.scrollTo(0, 0);
}

function selectPayment(method) {
  selectedPayment = method;
  document.getElementById("req-method-name").innerText = method;

  document.getElementById("pay-alif").classList.toggle("active", method === "Алиф Моби");
  document.getElementById("pay-dc").classList.toggle("active", method === "DC Bank");

  document.getElementById("req-number").innerText = (method === "Алиф Моби") ? "+992931088151" : "+992009096449";
}

function copyRequisites() {
  const num = document.getElementById("req-number").innerText;
  navigator.clipboard.writeText(num);
  alert("Скопировано: " + num);
}

function onFileSelected() {
  const fileInput = document.getElementById("receipt-file");
  if (fileInput.files && fileInput.files[0]) {
    document.getElementById("file-text").innerText = "✅ ФАЙЛ ВЫБРАН: " + fileInput.files[0].name;
    hideStatus();
  }
}

function resetForm() {
  selectedGoods = null;
  selectedServerRegion = null;
  hideStatus();
  document.getElementById("player-id").value = "";
  document.getElementById("receipt-file").value = "";
  document.getElementById("file-text").innerText = "НАЖМИТЕ, ЧТОБЫ ВЫБРАТЬ ЧЕК";
}

function showStatus(text, type) {
  const box = document.getElementById("status-message");
  box.innerText = text;
  box.className = `status-box ${type}`;
  box.style.display = "block";
}

function hideStatus() {
  document.getElementById("status-message").style.display = "none";
}

// 🚀 ОТПРАВКА ДВУМ И БОЛЕЕ АДМИНИСТРАТОРАМ
async function submitOrder() {
  hideStatus();

  const playerId = document.getElementById("player-id").value.trim();
  const fileInput = document.getElementById("receipt-file");

  if (!playerId) {
    showStatus("⚠️️ Введите ваш ID игрока!", "error");
    return;
  }
  if (!selectedGoods) {
    showStatus("⚠️ Выберите товар из списка!", "error");
    return;
  }
  if (!fileInput.files || !fileInput.files[0]) {
    showStatus("⚠️ Прикрепите скриншот чека!", "error");
    return;
  }

  const btn = document.getElementById("btn-submit");
  btn.disabled = true;
  btn.innerText = "ОТПРАВКА ЗАКАЗА...";

  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const usernameText = tgUser?.username ? `@${tgUser.username}` : (tgUser?.first_name || "Неизвестный");

  const caption = 
`🛒 *НОВЫЙ ЗАКАЗ В SNG GAME BAR!*

👤 *Покупатель:* ${usernameText}
🎮 *Игра:* ${selectedGame.name}
🌐 *Регион/Сервер:* ${selectedServerRegion || 'Стандарт'}
💎 *Товар:* ${selectedGoods.name}
💵 *Цена:* ${selectedGoods.price}
🆔 *ID Игрока:* \`${playerId}\`
💳 *Оплата:* ${selectedPayment}`;

  let successCount = 0;
  let errors = [];

  for (const adminId of ADMIN_IDS) {
    const formData = new FormData();
    formData.append("chat_id", adminId);
    formData.append("photo", fileInput.files[0]);
    formData.append("caption", caption);
    formData.append("parse_mode", "Markdown");

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.ok) {
        successCount++;
      } else {
        errors.push(`ID ${adminId}: ${result.description}`);
      }
    } catch (err) {
      errors.push(`ID ${adminId}: ${err.message}`);
    }
  }

  if (successCount > 0) {
    showStatus("✅ Ваш заказ и чек успешно отправлены администраторам! Ожидайте зачисления.", "success");
    btn.innerText = "ЗАКАЗ ОТПРАВЛЕН!";
  } else {
    showStatus("❌ Ошибка отправки:\n" + errors.join("\n"), "error");
    btn.disabled = false;
    btn.innerText = "ПОПРОБОВАТЬ СНОВА";
  }
}

// Запуск отрисовки после полной загрузки страницы
document.addEventListener("DOMContentLoaded", renderCatalog);
