const OpenMenu = (props) => {
  const openMenu = () => {
    props.setClickedMenu(!props.clickedMenu);
  };
  return (
    <div class="dropdown">
      <button onClick={openMenu} class="mainmenubtn">
        Виберіть кількість карток
      </button>
      <div
        class={
          props.clickedMenu
            ? "dropdown-child dropdown-child_active"
            : "dropdown-child"
        }
      >
        <button
          class="mainmenubtn__item"
          onClick={() => {
            props.randomFunc(5);
          }}
        >
          5word
        </button>
        <button
          class="mainmenubtn__item"
          onClick={() => {
            props.randomFunc(10);
          }}
        >
          10word
        </button>
        <button
          class="mainmenubtn__item"
          onClick={() => {
            props.randomFunc(15);
          }}
        >
          15word
        </button>
        <button
          class="mainmenubtn__item"
          onClick={() => {
            props.randomFunc(20);
          }}
        >
          20word
        </button>
        <button
          class="mainmenubtn__item"
          onClick={() => {
            props.randomFunc(25);
          }}
        >
          25word
        </button>
      </div>
    </div>
  );
};

export default OpenMenu;
