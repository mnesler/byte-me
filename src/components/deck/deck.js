import React from 'react';
import Card from '../card/card';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      hand: []
    };
    this.drawCard = this.drawCard.bind(this); //this is dumb.
    this.shuffleDeck = this
      .shuffleDeck
      .bind(this);

  }
  componentDidMount() {
    this.shuffleDeck()
    console.log(this.state)
  }

  drawCard() {
    var card = this
      .state
      .cards
      .shift()
    var newHand = this
      .state
      .hand
      .concat(card)
    this.setState({hand: newHand})

  }
  shuffleDeck() {
    Array.prototype.shuffle = function () {
      var i = this.length,
        j,
        temp;
      if (i === 0) 
        return this;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
      return this;
    }
    this.setState({
      cards: this
        .state
        .cards
        .shuffle()
    });
  }
  render() {
    var buttonStyle = {
      // padding: 5, margin: 5, backgroundColor: "#ecf0f1",
    }

    var handZoneStyle = {
      border: 1,
      color: 'Black',
      width: '100%',
      height: '190px',
      borderStyle: 'dashed'
    }
    return (
      <div>
        card-seq: {this
          .state
          .cards
          .map((card) => <span>{card.id}^</span>)}
        <div>
          <button style={buttonStyle} onClick={this.drawCard}>DRAW</button>
          <button style={buttonStyle} onClick={this.shuffleDeck}>SHUF</button>
          <div style={handZoneStyle}>
            {this
              .state
              .hand
              .map((h) => <Card card={h}/>)}
          </div>
        </div>
      </div>
    );
  }
}
