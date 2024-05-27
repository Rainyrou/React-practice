import Calculator from "./Calculator";
import TodoList from "./Todos";
import CountdownTimer from "./CountdownTimer";
import Login from "./Login";
import CartApp from "./Cart";
import FileUpload from "./FileUpload";
import DropdownApp from "./Dropdown";
import Carousel from "./Carousel";
import Masonry from "./Masonry";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import DetailPage1 from "./DetailPage1";
import DetailPage2 from "./DetailPage2";

/* const images = [
  "https://via.placeholder.com/800x400.png?text=Slide+1",
  "https://via.placeholder.com/800x400.png?text=Slide+2",
  "https://via.placeholder.com/800x400.png?text=Slide+3",
]; */

const images = [
  {
    src: "https://via.placeholder.com/300x200.png?text=Image+1",
    alt: "Image 1",
    height: 200,
  },
  {
    src: "https://via.placeholder.com/300x150.png?text=Image+2",
    alt: "Image 2",
    height: 150,
  },
  {
    src: "https://via.placeholder.com/300x250.png?text=Image+3",
    alt: "Image 3",
    height: 250,
  },
  {
    src: "https://via.placeholder.com/300x180.png?text=Image+4",
    alt: "Image 4",
    height: 180,
  },
  {
    src: "https://via.placeholder.com/300x220.png?text=Image+5",
    alt: "Image 5",
    height: 220,
  },
  {
    src: "https://via.placeholder.com/300x130.png?text=Image+6",
    alt: "Image 6",
    height: 130,
  },
];

function App() {
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
}

export default App;
