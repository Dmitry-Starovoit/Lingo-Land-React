import "./App.css";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Vocabulary from "./components/Vocabulary";
import Contacts from "./components/Contacts";
import Workbook from "./components/Workbook/Workbook";
import Quiz from "./components/Quiz/Quiz";
import Test from "./components/Test/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/vocabulary" element={<Vocabulary />} />
          <Route exact path="/workbook" element={<Workbook />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
