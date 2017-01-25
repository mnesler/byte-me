import React from 'react';

export default class Card extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
          id: -1,
          backImg: '../img/back.jpg',
          frontImg: '..img/placeholder.jpg',
          faced: false,
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
  handleClick = () => {
    this.flip();
  }

  flip() {
    if(this.state.faced){
      this.setState({
        faced: false
      });
    } else {
          this.setState({
        faced: true
      });
    }

  }
  render() {
         var cardStyle = {
            width: '130px',
            margin: '2px'
        }
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
      <span onClick={this.handleClick}>
      {
        <img style={cardStyle} src={this.state.backImg} />
      }
      </span>
    );
    }

  }
}