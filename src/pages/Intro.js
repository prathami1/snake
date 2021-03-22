import React from 'react';
import Footer from '../components/Footer'
import Button from '../components/Button'
import Header from '../components/Header'

import '../App.css';

function Intro() {
    return(
        <div className="App container">
            <Header 
                title = "Snake"
                pretag = "A game built with javascript and presented via React."
                break = {<br></br>}
                posttag = "Built in order to showcase the reversing of linked lists, an occurrance that is presented when a snake interacts with a purple apple."
                hrefport = 'https://prathami1.github.io'
                prebutton = 'Built By'
                name = "Pratham Inamdar"
            />
            <h3>Rules:</h3>
            <p>Here are the rules in order to play the game, in case you need a quick refresher:</p>
            <p style={{fontSize: '25px'}}>You start as a snake with a length of 1 block.
            <br></br> You can increase your length by eating apples, and your score will reset if you hit the borders of the game board.
            <br></br> If you eat a red apple, your length will increase by 1 block. 
            <br></br> If you eat a purple apple, your length will increase by 1 block AND your snake will move in the opposite direction.
            <br></br> If you run into your own body as a snake, your score will reset as well.
            <br></br>
            <br></br> Hope you enjoy playing!
            </p>
            <Button href="/play" category="Start Playing"/>
            <Footer />
        </div>
    );
}
export default Intro;