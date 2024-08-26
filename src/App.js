import Carousel from "./compoments/Carousel";
import './App.css';
import { useState } from "react";
const image = [
  "https://i.pinimg.com/originals/37/7b/00/377b00a5aa603b9483909b0af8aee359.jpg",
  "https://i.pinimg.com/originals/e4/a0/2d/e4a02d2efceed5e6fc7d92e216091d10.jpg",
  "https://i.pinimg.com/originals/60/ca/67/60ca672d7e9f065ec7fd94add8ea7295.jpg",
  "https://i.pinimg.com/originals/db/f7/0a/dbf70aa2ac6da24fd23ff7b83a5075c9.jpg",
  "https://i.pinimg.com/originals/d1/da/6b/d1da6b7417685e365caa1efd43c1ea04.jpg"
]

export default function App() {
  const [check, checkHover] = useState(true);
  const handleMouseEnter = () => {
    checkHover(false);
  };
  const handleMouseLeave = () => {
    checkHover(true);
  };
  
  return (
    <div className="App" >
      <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <Carousel  autoSlide={check}>
          {image.map((link) => (
            <img src={link} alt="img" />
          ))} 
        </Carousel>
      </div>
    </div>
  );
}

 