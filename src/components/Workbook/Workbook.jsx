import HeaderPage from "./Header/HeaderPage";
import "./Workbook.css";
import AfterWatching from "./AfterWatching/AfterWatching";
import BeforeWatching from "./BeforeWatching/BeforeWatching";
import WhileWatching from "./WhileWatching/WhileWatching";
import { useSelector } from "react-redux";
const Workbook = function () {
  const state = useSelector((state) => state);

  return (
    <div className="workbook__wrapper">
      <HeaderPage />
      <div className="content__workbook">
        <BeforeWatching state={state} />
        <WhileWatching state={state} />
        <AfterWatching state={state} />
        <div style={{ height: "20px" }}></div>
      </div>
    </div>
  );
};

export default Workbook;
