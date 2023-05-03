import "./NavButton.css";

const NavButton = (props) => {
  return (
    <div
      className={
        props.hidden === true ? "score__numbers" : "score__numbers  hidden"
      }
    >
      <button
        onMouseOver={() => {
          props.setFlip(false);
        }}
        onClick={() => {
          props.handleNext();
        }}
        class="mainmenubtn"
      >
        Продовжити
      </button>
      <button
        onMouseOver={() => {
          props.setFlip(false);
        }}
        onClick={() => {
          props.handlePrew();
        }}
        class="mainmenubtn"
      >
        Я це знаю!
      </button>
    </div>
  );
};

export default NavButton;
