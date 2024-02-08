import { useState } from "react"

export default function NewSwiper(){
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return(
        <div className="container">
            <div className="arrow" direction='left' onClick={() => handleClick("left")}>
            </div>
            <div className="wrapper">
                <div className="slide">
                    <div className="img-container">
                        <img src="" className="image"/>
                    </div>
                    <div className="info-container">
                        <h1 className="title">Title</h1>
                        <p className="desc">Description</p>
                        <button className="button">SHOW NOW</button>
                    </div>
                </div>
            </div>
            <div className="arrow" direction='right' onClick={() => handleClick("right")}>
            </div>
        </div>
    )
}