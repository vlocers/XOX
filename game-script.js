let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


const urlParams = new URLSearchParams(window.location.search);
const player1Name = urlParams.get('player1');
const player2Name = urlParams.get('player2');


document.getElementById('status').innerText = `Sıra ${player1Name} oyuncusunda`;

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').style.display = gameActive ? 'block' : 'none';
    document.getElementById('status').innerText = gameActive ? `Sıra ${currentPlayer === 'X' ? player1Name : player2Name} oyuncusunda` : '';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    let isDraw = !gameBoard.includes('');

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('status').style.display = 'none';
            gameActive = false;
            showWinnerMessage(gameBoard[a]);
            return;
        }
    }

    if (isDraw && gameActive) {
        document.getElementById('status').style.display = 'none';
        gameActive = false;
        showDrawMessage();
    }
}

function showWinnerMessage(winner) {
    const winnerName = winner === 'X' ? player1Name : player2Name;
    alert(`${winnerName} oyuncusu kazandı! Oyun bitti.`);
}

function showDrawMessage() {
    alert('Berabere! Oyun bitti.');
}

function resetGame() {
    
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    
    document.getElementById('status').style.display = 'block';
    document.getElementById('status').innerText = `Sıra ${player1Name} oyuncusunda`;

    
    const cells = document.getElementById('board').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
