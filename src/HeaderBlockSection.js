import React from 'react'
import Fade from 'react-reveal/Fade';
import "./HeaderBlockSection.css"

function HeaderBlockSection({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <div className="background__img" 
        style={{ backgroundImage: `url('/images/${backgroundImg}')` }}
        >
        <Fade bottom>
            <div className="itemText">
           <h1>{title}</h1> 
           <p>{description}</p>
           </div>
        </Fade>
        <div className="buttons">
        <Fade bottom>
           <div className="button__Group">
               <div className="left__Button">
                    {leftBtnText}
               </div>
                { rightBtnText && 
                    <div className="right__Button">
                        {rightBtnText}
                    </div>
            }
           </div>
           </Fade>
           <img className="downArrow" src="/images/down-arrow.svg" alt=""/>
           </div>
          
        </div>
    )
}

export default HeaderBlockSection
