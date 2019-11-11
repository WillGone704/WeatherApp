import React from 'react';
import './weatherCard.module.css';

export default (props) => (
    <div>

        <section className = 'weatherCard'>
            <p>{props.name}</p>
            <div>
                <img src = {"http://openweathermap.org/img/wn/" + props.icon + ".png"}/>
                <p>{props.temp}</p>
            </div>

            <div>
                <p>{props.temp_max}</p>
                <p>{props.temp_min}</p>
            </div>
            <div>{props.description}</div>
        </section>
        
    </div>
)