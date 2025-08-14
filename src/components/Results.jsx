import "../styles/Results.css";

function Results({ gameStatus, score, highScore, setHighScore, resetGame }) {
	if (score > highScore) {
		setHighScore(score);
	}

	return (
		<div className="results">
			{gameStatus === "win" ? <h1>Congratulations!</h1> : <h1>Game Over!</h1>}
			<div>
				<p>You got a score of:</p>
				<p>{score} / 10</p>
			</div>
			<div>
				<p>Your high score is:</p>
				<p>{highScore} / 10</p>
			</div>
			<button className="reset-btn" onClick={resetGame}>
				Play Again
			</button>
		</div>
	);
}

export default Results;
