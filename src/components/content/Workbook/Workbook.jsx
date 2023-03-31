import HeaderPage from "./Header/HeaderPage";
import FirstPage from "./FirstPage/FirstPage";
import "./Workbook.css";
import SecondPage from "./SecondPage/SecondPage";
const Workbook = function () {
  return (
    <div className="content__workbook">
      <HeaderPage />
      <FirstPage />
      <SecondPage />
    </div>
  );
};

export default Workbook;
