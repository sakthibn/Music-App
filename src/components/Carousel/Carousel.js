
import React, { useState, useRef } from "react";

export const Carousel = ({children,title,slideCount,href,itemPerPage}) => {
    const sliderWrapperRef = useRef(null);
    const [pageNo, setPageNo] = useState(0)
    
    const moveLeft = () => {
        if(pageNo === 0){
            return
        }
        let displayArea = sliderWrapperRef.current.clientWidth;
        let pixels = (-displayArea * (pageNo - 1)) - ((pageNo - 1) * 10)
        sliderWrapperRef.current.style.transform = 'translateX('+ pixels + 'px)';
        setPageNo(pageNo - 1)
    }

    const moveRight = () => {
        if(pageNo + 1 >= Math.ceil(slideCount / itemPerPage)){
            return
        }
        let displayArea = sliderWrapperRef.current.clientWidth;
        let pixels = (-displayArea * (pageNo + 1)) - ((pageNo + 1) * 10)
        sliderWrapperRef.current.style.transform = 'translateX('+ pixels + 'px)';
        setPageNo(pageNo + 1)
    }

    return(
        <div className="carousel-wrapper">
            <div className="carousel-header">
                {title && href && <h5><a href={href} className="title">{title}</a></h5>}
                {title && !href && <h5>{title}</h5>}
                <div className="controls">
                    <span className="oi oi-chevron-left me-3" title="chevron-left" aria-hidden="true" onClick={moveLeft}/>
                    <span className="oi oi-chevron-right" title="chevron-right" aria-hidden="true" onClick={moveRight}/>
                </div>
            </div>
            <div className="display-area">
                <div ref={sliderWrapperRef} className="slider-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}
