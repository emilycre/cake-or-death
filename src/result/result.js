const playAgain = document.getElementById('play-again');
const endMessageNode = document.getElementById('end-message');
const endImageNode = document.getElementById('end-image');
const searchParams = new URLSearchParams(window.location.search);
const resultToFind = searchParams.get('result');
const json = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(json);

if(!resultToFind) {
    window.location = '/';
}

function playTie() {
    const tieSound = document.getElementById('tie-sound');
    tieSound.play();
}

switch(resultToFind) {
    case 'cake':
        endMessageNode.textContent = userInfo.playerCake;
        endMessageNode.innerHTML += ' wins!<br> Let them eat CAKE!';
        endImageNode.src = '../../assets/cake-1.png';
        endImageNode.id = 'cake-wins';
        endImageNode.alt = 'a wedding cake';
        break;

    case 'death':
        endMessageNode.textContent = userInfo.playerDeath;
        endMessageNode.innerHTML += ' wins! 1000 years of DEATH falls upon the land...';
        endImageNode.src = '../../assets/grim-victory.gif';
        endImageNode.id = 'death-wins';
        endImageNode.alt = 'the grim reaper';
        break;

    case 'tie':
        playTie();
        endMessageNode.textContent = userInfo.playerCake + ' and ' + userInfo.playerDeath;
        endMessageNode.innerHTML += ' were not strong enough to defeat one another, an unfortunate tie has resulted from their inadequacies.';
        endImageNode.src = './assets/dreamy-knuth.gif';
        endImageNode.id = 'tie';
        endImageNode.alt = 'a cake and a skull that reads cake or death';
        break;
}

playAgain.addEventListener('click', function() {
    window.location = 'game.html';
});