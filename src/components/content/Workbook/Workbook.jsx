import HeaderPage from "./Header/HeaderPage";
import FirstPage from "./FirstPage/FirstPage";
import "./Workbook.css";
const Workbook = function () {
  return (
    <div className="content__workbook">
      <HeaderPage />
      <FirstPage />
    </div>
  );
};

export default Workbook;
