import { wordsOfWisdom } from './mixed-messages.js';
import React from 'react';
import ReactDOM from 'react-dom';



const background = <img className ='background' alt='library' src='/library-background.jpg'/>

const images = [];
for(const author in wordsOfWisdom){
  images.push(
    <img 
    key= {author}
    className='author'
    alt= {author}
    src= {author[author].image}
    aria-label= {author}
    role= 'button'
    onClick = {displayMessage}
    />)
}

function displayMessage(e){
  const selectedAuthor = e.target.alt;
  const authorInfo = author[selectedAuthor];
  const randomMessage = Math.floor(Math.random()* authorInfo.array.length);
  const message = authorInfo.array[randomMessage];
  document.getElementById('message').innerHTML= message;
}

const title = "";
const authorMessage = (
<div>
 <h1> {title === '' ? 'Click an author for a motivating message' : title} </h1>
 {background}
 <p id= 'message'></p>
  <div className = 'authors'>
  {images}
  </div>
</div>
)


ReactDOM.render(authorMessage, document.getElementById('root'))
