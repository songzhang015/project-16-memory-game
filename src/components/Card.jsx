import "../styles/Card.css";

function Card({ img, name, handleClick }) {
	return (
		<div className="card" onClick={handleClick}>
			<img src={img} alt="Character" />
			<p className="card-name">{name}</p>
		</div>
	);
}

export default Card;
