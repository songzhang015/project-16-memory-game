import { useState, useEffect } from "react";
import "../styles/Card.css";

function Card({ img, name, handleClick }) {
	return (
		<div className="card" onClick={handleClick}>
			<div className="card-img">{img}</div>
			<p className="card-name">{name}</p>
		</div>
	);
}

export default Card;
