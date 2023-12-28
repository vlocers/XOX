function startGame() {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;

    if (player1Name.trim() !== '' && player2Name.trim() !== '') {
        
        window.location.href = `game.html?player1=${player1Name}&player2=${player2Name}`;
    } else {
        alert('Lütfen her iki oyuncunun da ismini girin.');
    }
}
