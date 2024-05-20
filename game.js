let level = 1;
let coins = 0;

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('levelUpButton').addEventListener('click', levelUp);

function startGame() {
    setInterval(() => {
        coins += 10000 / 3600; // Her saniyede 10000 puan/saat kazandırıyor.
        updateUI();
    }, 1000);
}

function levelUp() {
    let cost = 3000 * Math.pow(1.5, level - 1);
    if (coins >= cost) {
        coins -= cost;
        level += 1;
        updateUI();
    }
}

function updateUI() {
    document.getElementById('level').innerText = `Level: ${level}`;
    document.getElementById('coins').innerText = `Coins: ${Math.floor(coins)}`;
    document.getElementById('levelUpButton').disabled = coins < 3000 * Math.pow(1.5, level - 1);
}
