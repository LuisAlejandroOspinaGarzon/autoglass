import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';
import FadeInAnimation from "./FadeInAnimation.js";

function Cards(){
    return(
        <div className="cards">
            <h1>Vidrios</h1>
            <Link to='/services'>
                <div className="cards__container">
                    <FadeInAnimation direction="left" delay={3}>
                        <img src="./images/vidrios1.png" class="img-fluid" alt="vidrios" />
                    </FadeInAnimation>
                    <br />
                    <FadeInAnimation direction="right" delay={4}>
                        <img src="./images/vidrios2.png" class="img-fluid" alt="vidrios" />
                    </FadeInAnimation>
                </div>
            </Link>
            
        </div>
    )
}

export default Cards;