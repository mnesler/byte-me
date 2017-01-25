import React from 'react';
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";
import cardStyle from './card.css'
import reactContextmenuStyle from './react-contextmenu.css'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      backImg: '../img/back.jpg',
      frontImg: '..img/placeholder.jpg',
      faced: false,
      tapped: false,
      enlarged: false,
      imageShown: '../img/back.jpg'
    };

    this.flip = this.flip.bind(this);
   // this.handleClick = this.handleClick.bind(this);
    this.tapped = this.tapped.bind(this);
    this.enlarge = this.enlarge.bind(this);
  }
  componentWillMount() {
    this.setState({id: this.props.card.id, frontImg: this.props.card.front, faced: this.props.card.faced});
  }
  handleClick = (e, data, element) => {
    console.log(data)
  }
  handleLeftClick = () => {}
  handleRightClick = () => {}
  handleMiddleClick = () => {}

  tapped = () => { this.setState({tapped: !this.state.tapped})
      console.log('tapped')
  }
  flip = () => {
    this.state.faced
      ? this.setState({faced: false})
      : this.setState({faced: true})
  }
  enlarge = () => {
    this.state.enlarged
      ? this.setState({enlarged: false})
      : this.setState({enlarged: true})
  }
  //toggleHover = () => { this.setState({hover: !this.state.hover}) }

  render() {
      return (
        <div>
          <ContextMenuTrigger id='cardMenu'>
            <span>
              <div className={'card'} style={cardStyle}>
                <img width={'130px'} src={this.state.frontImg}/>
              </div>
            </span>
          </ContextMenuTrigger>

          <ContextMenu id="cardMenu">
            <MenuItem onClick={this.tapped} data={{item: 'item 1'}}>
              Tap
            </MenuItem>
            <MenuItem onClick={this.flip} data={{item: 'item 2'}}>
              Flip Over
            </MenuItem>
            <MenuItem divider/>
            <MenuItem onClick={this.handleClick} data={{item: 'item 3'}} disabled={true}>
              Discard
            </MenuItem>
            <MenuItem onClick={this.handleClick} data={{item: 'item 4'}}>
              Graveyard
            </MenuItem>
          </ContextMenu>
        </div>
      )
    }
}