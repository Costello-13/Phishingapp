function Card(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="button">Start</button>{" "}
      </div>
    </div>
  );
}

export default Card;
