import HeaderPage from "./Header/HeaderPage";
import "./Workbook.css";
import AfterWatching from "./AfterWatching/AfterWatching";
import BeforeWatching from "./BeforeWatching/BeforeWatching";
const Workbook = function () {
  return (
    <div className="content__workbook">
      <HeaderPage />
      <BeforeWatching />
      <AfterWatching />
    </div>
  );
};

export default Workbook;
