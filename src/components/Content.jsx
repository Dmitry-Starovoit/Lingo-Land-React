import "./Content.css";
import Footer from "./Footer";
import Header from "./Header";
import ContentBlockOne from "./content/ContentBlockOne";
import ContentBlockTwo from "./content/ContentBlockTwo";
import ContentHeader from "./content/ContentHeader";

const Content = function () {
  return (
    <>
      <Header />
      <div>
        <ContentHeader />
        <div className="content__block">
          <ContentBlockOne />
          <ContentBlockTwo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Content;
