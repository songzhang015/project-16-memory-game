import { useState } from "react";
import "../styles/Game.css";
import Card from "./Card";

function Game({ setGameStatus, score, setScore, highScore }) {
	const allCharacters = [
		{ id: 1, name: "Iron Man", img: "/characters/iron-man.png" },
		{ id: 2, name: "Captain America", img: "/characters/captain-america.png" },
		{ id: 3, name: "Thor", img: "/characters/thor.png" },
		{ id: 4, name: "Hulk", img: "/characters/hulk.png" },
		{ id: 5, name: "Black Widow", img: "/characters/black-widow.png" },
		{ id: 6, name: "Hawkeye", img: "/characters/hawkeye.png" },
		{ id: 7, name: "Loki", img: "/characters/loki.png" },
		{ id: 8, name: "Bucky", img: "/characters/bucky.png" },
		{ id: 9, name: "Nick Fury", img: "/characters/nick-fury.png" },
		{ id: 10, name: "Starlord", img: "/characters/starlord.png" },
		{ id: 11, name: "Rocket Raccoon", img: "/characters/rocket-raccoon.png" },
		{ id: 12, name: "Doctor Strange", img: "/characters/doctor-strange.png" },
		{ id: 13, name: "Scarlet Witch", img: "/characters/scarlet-witch.png" },
		{ id: 14, name: "Vision", img: "/characters/vision.png" },
		{ id: 15, name: "Ultron", img: "/characters/ultron.png" },
		{ id: 16, name: "Black Panther", img: "/characters/black-panther.png" },
		{ id: 17, name: "Spider-Man", img: "/characters/spider-man.png" },
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
	const [currentlyShown, setCurrentlyShown] = useState(nonChosen.slice(0, 5));

	function handleSelection(character) {
		if (chosen.some((c) => c.id === character.id)) {
			alert("You already chose this!");
			setGameStatus("lose");
			return;
		}

		// Update score
		setScore(score + 1);

		// Create a copy of the updated lists to work with
		const newChosen = [...chosen, character];
		const newNonChosen = [...nonChosen.filter((c) => c.id !== character.id)];

		if (newNonChosen.length === 0) {
			alert("You win!");
			setGameStatus("win");
			return;
		}

		// Shuffle and grab cards from Chosen and Non Chosen lists
		const shuffledNonChosen = shuffle(newNonChosen);
		const firstCard = shuffledNonChosen[0];

		const pool = [...newChosen, ...shuffledNonChosen.slice(1)];

		const otherCards = shuffle(pool).slice(0, 4);
		setCurrentlyShown(shuffle([firstCard, ...otherCards]));

		// Update Chosen and Non Chosen lists
		setChosen(newChosen);
		setNonChosen(newNonChosen);
	}

	return (
		<div className="game">
			<div className="scoreboard">
				<p>
					Score: <span>{score}</span>
				</p>
				<p>
					High Score: <span>{highScore}</span>
				</p>
			</div>

			<div className="cards">
				{currentlyShown.map((character) => (
					<Card
						key={character.id}
						img={character.img}
						name={character.name}
						handleClick={() => handleSelection(character)}
					/>
				))}
			</div>

			<p className="round">{score + 1} / 10</p>

			<div
				className="msg-container"
				style={{ visibility: score > 0 ? "hidden" : "visible" }}
			>
				<p className="msg">Select a card.</p>
				<p className="msg">Avoid choosing the same card twice!</p>
			</div>
		</div>
	);
}

export default Game;
