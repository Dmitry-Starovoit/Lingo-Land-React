import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Vocabulary from "./components/Vocabulary";
import Contacts from "./components/Contacts";
import News from "./components/News";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/vocabulary" element={<Vocabulary />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
