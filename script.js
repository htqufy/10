const images = ['cherry.jpg', 'watermelon.jpg', 'grape.jpg', 'lemon.jpg', 'strawsberry.jpg'];
let username;
let consecutiveMatches = 0;
let totalAttempts = 0;
window.onload = function () {
    username = prompt('Enter your name:');
    if (!username) {
        alert('Please enter your name.');
        return;
    }
    hideStartGameButton();
    startGame();
};
function hideStartGameButton() {
    const startGameBtn = document.getElementById('start-game-btn');
    startGameBtn.style.display = 'none';
}
function startGame() {
    totalAttempts = 0;
    consecutiveMatches = 0;
    updatePlayerInfo();
    generateImages();
}
function updatePlayerInfo() {
    const playerInfo = document.getElementById('player-info');
    playerInfo.innerHTML = `<p>${username}</p><p>Attempts: ${totalAttempts}</p>`;
}
function generateImages() {
    totalAttempts++;
    if (totalAttempts > 3) {
        alert(`Game over, ${username}! You've reached the maximum attempts.`);
        return;
    }
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    let lastImages = [];
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const imageSrc = images[randomIndex];
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        container.appendChild(imgElement);
        const row = i % 3;
        if (lastImages[row] === imageSrc) {
            consecutiveMatches++;
        } else {
            consecutiveMatches = 0;
        }
        lastImages[row] = imageSrc;
    }
    updatePlayerInfo();
    if (consecutiveMatches === 3) {
        alert(`Congratulations, ${username}! You won the game.`);
    }
}


