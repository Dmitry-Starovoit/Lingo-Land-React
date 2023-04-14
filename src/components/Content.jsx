import "./Content.css";
import Footer from "./Footer";
import Header from "./Header";
import ContentBlockOne from "./HomePage/ContentBlockOne";
import ContentBlockTwo from "./HomePage/ContentBlockTwo";
import ContentHeader from "./HomePage/ContentHeader";

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
