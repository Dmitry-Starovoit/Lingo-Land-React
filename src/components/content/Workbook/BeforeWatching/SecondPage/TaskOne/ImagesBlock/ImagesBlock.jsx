const ImagesBlock = (props) => {
  return (
    <div className="img__block">
      <div>
        {props.images[0].map((obj) => {
          return (
            <div key={obj.id} className="img__task--item">
              <img className="task__items" src={obj.img}></img>
              <div className="input__task--four"></div>
            </div>
          );
        })}
      </div>
      <div>
        {props.images[1].map((obj) => {
          return (
            <div key={obj.id} className="img__task--item">
              <img className="task__items" src={obj.img}></img>
              <div className="input__task--four"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesBlock;
