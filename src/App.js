import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'; 

const App = () => {
  const cardDisplayCount = 9;
  const initialCards = [
    {
      id: '01',
      name: 'turquoise',
      value: '#00ffff',
      clicked: false,
    },
    {
      id: '02',
      name: 'tomato',
      value: '#ff6347',
      clicked: false,
    },
    {
      id: '03',
      name: 'light gray',
      value: '#d3d3d3',
      clicked: false,
    },
    {
      id: '04',
      name: 'orange red',
      value: '#ff4500',
      clicked: false,
    },
    {
      id: '05',
      name: 'orchid',
      value: '#da70d6',
      clicked: false,
    },
    {
      id: '06',
      name: 'lime green',
      value: '#32cd32',
      clicked: false,
    },
    {
      id: '07',
      name: 'fuchsia',
      value: '#ff00ff',
      clicked: false,
    },
    {
      id: '08',
      name: 'purple',
      value: '#800080',
      clicked: false,
    },
    {
      id: '09',
      name: 'slate blue',
      value: '#6a5acd',
      clicked: false,
    },
    {
      id: '10',
      name: 'steel blue',
      value: '#4682b4',
      clicked: false,
    },
    {
      id: '11',
      name: 'brown',
      value: '#a52a2a',
      clicked: false,
    },
    {
      id: '12',
      name: 'black',
      value: '#000000',
      clicked: false,
    },
    {
      id: '13',
      name: 'midnight blue',
      value: '#191970',
      clicked: false,
    },
    {
      id: '14',
      name: 'olive drab',
      value: '#6b8e23',
      clicked: false,
    },
    {
      id: '15',
      name: 'hot pink',
      value: '#ff69b4',
      clicked: false,
    },
    {
      id: '16',
      name: 'indigo',
      value: '#4b0082',
      clicked: false,
    },
    {
      id: '17',
      name: 'khaki',
      value: '#f0e68c',
      clicked: false,
    },
    {
      id: '18',
      name: 'white',
      value: '#ffffff',
      clicked: false,
    },
    {
      id: '19',
      name: 'navy',
      value: '#000080',
      clicked: false,
    },
    {
      id: '20',
      name: 'orange',
      value: '#ffa500',
      clicked: false,
    },

  ];
  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState(0);
  const [highScore, setHighSchore] = useState(0);



  const randomer = () => {
    let newOrder = [];
    let cardsCopy = [...cards];
    while (newOrder.length < cardDisplayCount) {
      let rdmIndex = Math.floor(Math.random() * Math.floor(cardsCopy.length))
      newOrder.push(cardsCopy[rdmIndex]);
      cardsCopy.splice(rdmIndex, 1);
    }
    return newOrder;
  }

  const cardClicked = (id) => {
    let newCards = [];
    let toReset = false;
    cards.map((card) => {
      if (card.id === id && card.clicked) {
          console.log('got to first')
          toReset = true;
        }

      else {
        if (card.id === id) {
        increaseScore();
        newCards.push(
          {
            id: card.id,
            name: card.name,
            value: card.value,
            clicked: true,
          }
        )
       }
        else { newCards.push(card) }
    }
      
    })
    if (toReset) {
      resetBoard();
    }
    else setCards(newCards);
      
  }

  const resetBoard = () => {

    setCards(initialCards);
    
    if (score > highScore) {
      setHighSchore(score);
    }
    setScore(0);

  }

  const increaseScore = () => {
    setScore(score + 1);
    
  }

  return (
    <div className="App">
      <div id="scoreboard">
        <div id="currentScore">Score: {score}</div>
        <div id="highScore">High Score: {highScore}</div>
      </div>
      <div id="cardsContainer">
      {
        
        randomer().map((card) => 
            <div className='cardHolder' key={card.id} id={card.id} style={{
              backgroundColor: card.value,              
              }} onClick={() => cardClicked(card.id)}>{card.name}
              </div>
        )
      }
    </div>
    </div>
  );
}

export default App;
