import HeaderPage from "./Header/HeaderPage";
import FirstPage from "./FirstPage/FirstPage";
import "./Workbook.css";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourPage from "./FourPage/FourPage";
const Workbook = function () {
  return (
    <div className="content__workbook">
      <HeaderPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
    </div>
  );
};

export default Workbook;
