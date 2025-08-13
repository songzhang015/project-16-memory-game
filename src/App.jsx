import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Results from "./components/Results";

function App() {
	const [gameStatus, setGameStatus] = useState("playing"); // Playing, Win, Lose
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	function resetGame() {
		setScore(0);
		setGameStatus("playing");
	}

	return (
		<div className="app">
			{gameStatus === "playing" ? (
				<Game
					setGameStatus={setGameStatus}
					setScore={setScore}
					highScore={highScore}
				/>
			) : (
				<Results
					gameStatus={gameStatus}
					score={score}
					highScore={highScore}
					setHighScore={setHighScore}
					resetGame={resetGame}
				/>
			)}
		</div>
	);
}

export default App;
