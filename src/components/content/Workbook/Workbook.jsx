import HeaderPage from "./Header/HeaderPage";
import "./Workbook.css";
import AfterWatching from "./AfterWatching/AfterWatching";
import BeforeWatching from "./BeforeWatching/BeforeWatching";
import WhileWatching from "./WhileWatching/WhileWatching";
const Workbook = function () {
  return (
    <div className="content__workbook">
      <HeaderPage />
      <BeforeWatching />
      <WhileWatching />
      <AfterWatching />
    </div>
  );
};

export default Workbook;
