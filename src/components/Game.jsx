import { useState, useEffect } from "react";
import "../styles/Game.css";
import "../styles/Card.css";

function Game() {
	const allCharacters = [
		{ id: 1, name: "Iron Man" },
		{ id: 2, name: "Captain America" },
		{ id: 3, name: "Thor" },
		{ id: 4, name: "Hulk" },
		{ id: 5, name: "Black Widow" },
		{ id: 6, name: "Hawkeye" },
		{ id: 7, name: "Loki" },
		{ id: 8, name: "Bucky" },
		{ id: 9, name: "Nick Fury" },
		{ id: 10, name: "Starlord" },
		{ id: 11, name: "Rocket Raccoon" },
		{ id: 12, name: "Doctor Strange" },
		{ id: 13, name: "Scarlet Witch" },
		{ id: 14, name: "Vision" },
		{ id: 15, name: "Ultron" },
		{ id: 16, name: "Black Panther" },
		{ id: 17, name: "Spider-Man" },
		{ id: 18, name: "Antman" },
		{ id: 19, name: "Hela" },
		{ id: 20, name: "Captain Marvel" },
		{ id: 21, name: "Thanos" },
		{ id: 22, name: "Shang-Chi" },
		{ id: 23, name: "Moon Knight" },
		{ id: 24, name: "Mister Fantastic" },
		{ id: 25, name: "Galactus" },
	];

	// Helper function to help shuffle arrays
	function shuffle(array) {
		const arr = [...array];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	const [nonChosen, setNonChosen] = useState(
		shuffle(allCharacters).slice(0, 10)
	);
	const [chosen, setChosen] = useState([]);
	const [currentlyShown, setCurrentlyShown] = useState([]);

	return (
		<div className="game">
			<div className="scoreboard">
				<p>
					Score: <span>0</span>
				</p>
				<p>
					High Score: <span>0</span>
				</p>
			</div>

			<div className="cards">
				<div className="card">
					<div className="card-img"></div>
					<p className="card-name">Card Name</p>
				</div>

				<div className="card">
					<div className="card-img"></div>
					<p className="card-name">Card Name</p>
				</div>

				<div className="card">
					<div className="card-img"></div>
					<p className="card-name">Card Name</p>
				</div>

				<div className="card">
					<div className="card-img"></div>
					<p className="card-name">Card Name</p>
				</div>

				<div className="card">
					<div className="card-img"></div>
					<p className="card-name">Card Name</p>
				</div>
			</div>

			<p className="round">1 / 10</p>

			<div className="msg-container">
				<p className="msg">Select a card.</p>
				<p className="msg">Avoid choosing the same card twice!</p>
			</div>
		</div>
	);
}

export default Game;
