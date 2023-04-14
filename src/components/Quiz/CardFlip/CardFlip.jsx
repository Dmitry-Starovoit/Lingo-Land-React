import ReactCardFlip from "react-card-flip";

const CardFlip = (props) => {
  return (
    <div className={props.hidden === true ? "slider" : "slider  hidden"}>
      <ReactCardFlip
        className="card__flip"
        isFlipped={props.flip}
        flipDirection="horisontal"
      >
        <div
          className="block__slider"
          onClick={() => props.setFlip(!props.flip)}
        >
          <div className="block__slider--text">English</div>
          <div className="block__child">
            {props.cardWords[props.currentImageIndex].engWord}
          </div>
        </div>
        <div
          className="block__slider"
          onClick={() => props.setFlip(!props.flip)}
        >
          <div className="block__slider--text">Українська</div>
          <div className="block__child">
            {props.cardWords[props.currentImageIndex].ukrWord}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
