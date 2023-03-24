import video from "../../../../assets/the-lion-king.mp4";
import poster from "../../../../assets/poster.jpg";
import "./HeaderPage.css";
const HeaderPage = () => {
  return (
    <div className="header__workbook">
      <h1>Воркбук до фільму Король Лев</h1>
      <h4>dhdgfhgdfhgdfhghdghdf</h4>
      <video controls src={video} poster={poster}></video>
    </div>
  );
};

export default HeaderPage;
