import "./Content.css";
import ContentBlockOne from "./content/ContentBlockOne";
import ContentBlockTwo from "./content/ContentBlockTwo";
import ContentHeader from "./content/ContentHeader";

const Content = function () {
  return (
    <div>
      <ContentHeader />
      <div className="content__block">
        <ContentBlockOne />
        <ContentBlockTwo />
      </div>
    </div>
  );
};

export default Content;
