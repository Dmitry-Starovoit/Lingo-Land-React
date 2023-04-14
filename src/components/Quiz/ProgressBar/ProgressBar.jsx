import "./ProgressBar.css";

const ProgressBar1 = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: 600,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: 20,
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className={props.hidden === true ? "progress" : "progress  hidden"}>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar1;
