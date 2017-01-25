import React from 'react';
//import cardStyle from './card.css'
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

        this.flip = this.flip.bind(this);
        this.flop = this.flop.bind(this);
        this.enlarge = this.enlarge.bind(this);

        //do i need to do onClick?

  }
  componentWillMount() {
     this.setState({
        id: this.props.card.id,
        frontImg: this.props.card.front,
        faced: this.props.card.faced,
      });
  }
  handleClick = (e) => {
      console.log(e.nativeEvent.which); // type: left, value - 1
  console.log(e.nativeEvent.which); // type: right, value - 3
  console.log(e.type); // type: left, value - click 
  console.log(e.type); // type: right, value - contextm
    this.flip()
  }
  handleLeftClick = () => {}
  handleRightClick = () => {}
  handleMiddleClick = () => {}

  flop = () => { this.state.flop ? this.setState({flop: false}) : this.setState({flop: true}) }
  flip = () => { this.state.faced ? this.setState({faced: false}) : this.setState({faced: true}) }
  enlarge = () => { this.state.enlarged ? this.setState({enlarged: false}) : this.setState({enlarged: true}) }
  toggleHover = () => { this.setState({hover: !this.state.hover}) }

  render() {
    var cardStyle = {
    margin: '2px',
    width: '130px',
    transition: '.3s all',  /* rotate gradually instead of instantly */
    float: 'left',
    


//.card:hover {
//    -webkit-transform: rotate(90deg);  /* to support Safari and Android browser */
//    -ms-transform: rotate(90deg);      /* to support IE 9 */
//    transform: rotate(90deg);
//}


    }
    if(this.state.faced) {
    return (
      <span>
        <div class={'card'} style={cardStyle} onClick={this.handleClick}>
          <img width={'130px'} src={this.state.frontImg} />
        </div>
      </span>

    );
    } else {
      return (
        <span>
          <div class={'card'} style={cardStyle} onClick={this.handleClick}>
            <img width={'130px'} src={this.state.backImg} />
          </div>
      </span>
    );
    }

  }
}