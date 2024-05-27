import Calculator from "./Calculator";
import TodosApp from "./Todos";
import CountdownTimer from "./CountdownTimer";
import Login from "./Login";
import ListApp from "./List";
import CartApp from "./Cart";
import FileUpload from "./FileUpload";
import DropdownApp from "./Dropdown";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import DetailPage1 from "./DetailPage1";
import DetailPage2 from "./DetailPage2";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail1">Detail 1</Link>
            </li>
            <li>
              <Link to="/detail2">Detail 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/detail1" element={<DetailPage1 />} />
          <Route path="/detail2" element={<DetailPage2 />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
