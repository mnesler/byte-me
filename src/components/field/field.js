import React, {Component} from 'react';
import Card from '../card/card.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsInPlay  : []
        };
    }
    componentDidMount() {

    }
      componentWillMount() {
          this.setState({
            cardsInPlay: []
          });
      }
    componentWillUnmount() {}
    render() {
        var fieldStyle = {
            backgroundColor:  "Green",
            opacity: 0.4,
            width: "100%",
            height: "750px",
            position: "relative"
        }
        var card =  {       
            id: -1,
            front: '../img/back.jpg',
            faced: true,
            location: 'board'  //in  your "hand", you can see it
          }
          var cardStyle = {
            position: "absolute",
            right: 0,
            bottom: 0
          }
        return (
            <div>
                <div style={fieldStyle}>
                <div style={cardStyle}><Card card={card}/></div>
                </div>
            </div>
        );
    }

}