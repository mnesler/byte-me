import React, { Component } from 'react';

import Deck from './components/deck/deck';
import Card from './components/card/card';
import Field from './components/field/field';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // deckName: 'null deck collection'
    };
  }
  componentDidMount() {
//console.log(this.state)
  }

  componentWillUnmount() {

  }
  componentWillMount() {
      //if this isnt set, then it will "fall back" on the constructor
      //note that setState kinda behaves like a push to a stack.
      this.setState({
        cardBack:                     {       
            id: -1,
            front: '../img/back.jpg',
            faced: true,
            location: 'board'  //in  your "hand", you can see it
          },
        cards: [
          {
            deckName: "jelly rolls",          
            id: 0,
            front: '../img/black-lotus.jpg',
            faced: true,
            location: 'hand'  //in  your "hand", you can see it
          },
          {
            deckName: "jelly rolls",          
            id: 1,
            front: '../img/arecal.jpg',
            faced: true,
            location: 'deck'
          },
          {
            deckName: "jelly rolls",          
            id: 2,
            front: '../img/libarayofalex.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 3,
            front: '../img/moxemerald.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 4,
            front: '../img/moxjet.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 5,
            front: '../img/moxperl.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 6,
            front: '../img/moxsapphire.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 7,
            front: '../img/timetwister.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
                    {
            deckName: "jelly rolls",          
            id: 8,
            front: '../img/timewalk.jpg',
            faced: true,
            location: 'deck'  //not visable
          },
        ]
      });

  }
  render() {
    return (
      <div>
        <Field />
        <Deck cards={this.state.cards}/>
      </div>
    );
  }
}
