const tg = window.Telegram.WebApp;
tg.expand();

// ====== СОСТОЯНИЕ ======
let energy = Number(localStorage.getItem("energy")) || 0;
let perSecond = Number(localStorage.getItem("perSecond")) || 1;
let upgradeCost = Number(localStorage.getItem("upgradeCost")) || 10;

// ====== ЭЛЕМЕНТЫ ======
const energyEl = document.getElementById("energy");
const perSecondEl = document.getElementById("perSecond");
const upgradeCostEl = document.getElementById("upgradeCost");

const clickBtn = document.getElementById("clickBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

// ====== ОБНОВЛЕНИЕ UI ======
function updateUI() {
  energyEl.textContent = Math.floor(energy);
  perSecondEl.textContent = perSecond;
  upgradeCostEl.textContent = upgradeCost;
}

// ====== СОХРАНЕНИЕ ======
function saveGame() {
  localStorage.setItem("energy", energy);
  localStorage.setItem("perSecond", perSecond);
  localStorage.setItem("upgradeCost", upgradeCost);
}

// ====== КЛИК ======
clickBtn.onclick = () => {
  energy += 1;
  updateUI();
  saveGame();
};

// ====== ПОКУПКА АПГРЕЙДА ======
upgradeBtn.onclick = () => {
  if (energy >= upgradeCost) {
    energy -= upgradeCost;
    perSecond += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5);

    updateUI();
    saveGame();
  }
};

// ====== IDLE ДОХОД ======
setInterval(() => {
  energy += perSecond;
  updateUI();
  saveGame();
}, 1000);

// ====== СТАРТ ======
updateUI();
