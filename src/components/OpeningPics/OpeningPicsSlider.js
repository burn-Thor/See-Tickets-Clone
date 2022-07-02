
import React, {useState} from 'react';
import OpeningPics from "./OpeningPics";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './OP.css';


// let PicsD = OpeningPics.map((objecttt) => {
//     <div key={objecttt.index}>
//       {objecttt.image}{objecttt.description}
//     </div>
// })

//onClick function setting
const OpeningPicsSlider = ({ slides, description}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextPic = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevPic = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    
    return ( 
        <section className="slider">

            <FaArrowAltCircleLeft className="left-arrow" onClick={prevPic}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextPic}/>
            {OpeningPics.map(({image, description}, index) => {
            return(
                <div className = 'responsiveSlider'>
                
                <div className={index===current ? 'slide active' : 'slide'} key={index}>
                    {index === current && 
                    
                    ( <div className="image"><img src={image} alt="One of our fantastic venues" />
                    <p>{description}</p> </div>
                )}
                    </div>
                

                    
                   
                </div>
            )
        })}
        
        </section>
     );







}
 
export default OpeningPicsSlider;




