import "../styles/Card.css";

function Card({ img, name, handleClick, flipped }) {
	return (
		<div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
			<div className="card-inner">
				<div className="card-front">
					<img src={img} alt="Character" />
					<p className="card-name">{name}</p>
				</div>
				<div className="card-back">
					<img src="/card-back.png" alt="Card Backside" />
				</div>
			</div>
		</div>
	);
}

export default Card;
