import React from 'react';
import CardStyle from './card.css'
export default class Card extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
          id: -1,
          backImg: '../img/back.jpg',
          frontImg: '..img/placeholder.jpg',
          faced: false,
          flop: false
        };
        //this.handleClick = this.handleClick.bind(this);
        this.flip = this.flip.bind(this);
        //do i need to do onClick?

  }
  componentWillMount() {
     this.setState({
        id: this.props.card.id,
        frontImg: this.props.card.front,
        faced: this.props.card.faced,
      });
  }
  handleClick = () => {this.flip()}
  handleRightClick = () => {}
  handleMiddleClick = () => {}
  flop = () => { this.state.flop ? this.setState({flop: false}) : this.setState({flop: true}) }
  flip = () => { this.state.faced ? this.setState({faced: false}) : this.setState({faced: true}) }

  render() {
         var cardStyle = {}
    if(this.state.faced) {
    return (
      <span onClick={this.handleClick}>
      {
        <img style={cardStyle} src={this.state.frontImg} />
      }
      </span>

    );
    } else {
          return (
      <span class={'card'} onClick={this.handleClick}>
      {
        <img style={cardStyle} src={this.state.backImg} />
      }
      </span>
    );
    }

  }
}