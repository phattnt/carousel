import React, { useEffect } from "react";
import './Carousel.css';
import { useState } from "react";
import { ReactComponent as ChevronLeft } from './chevron-left.svg';
import { ReactComponent as ChevronRight } from './chevron-right.svg';
export default function Carousel({children: image, autoSlide = true, time = 3000,}){
    const [index, setIndex] = useState(0);
    const prev = () => setIndex(index === 0 ? image.length - 1 : index -1);
    const next = () => setIndex(index === image.length - 1 ? 0 : index + 1);
    useEffect(() => {
        if(!autoSlide) return 
        const imageInterval = setInterval(next,time)
        return() => clearInterval(imageInterval)
    })
    return(
    <main >
        <div className = "card"style={{transform: `translateX(-${index *105}%)`}}>
            {image}
        </div>
        <div className="circleContainer">
            {image.map((_,i) => (
                <div className="circle" style={{opacity: `${index === i ? "1" : "0.3"}`}}>
                </div>
            ))}
        </div>
        <div className = "button">
            <button onClick={prev}><ChevronLeft/></button>
            <button onClick={next}><ChevronRight/></button>
        </div>
    </main>
    );
}
