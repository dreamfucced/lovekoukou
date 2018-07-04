import React from 'react';
import {Nav,Navbar,Row} from 'reactstrap'
import Sound from 'react-sound';
import logo from '../page2.jpg';
import './player.css';
import 'font-awesome/css/font-awesome.min.css';
import Draggable from 'react-draggable';
export default class Page2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Draggable defaultPosition={{x: 0, y: 0}}>
            <Row>
            <div className='player'>
                {this.props.x===Sound.status.STOPPED?<i onClick={this.props.y} class="fa fa-play" style={{backgroundColor:'rgb(205, 223, 240)',float:'left',margin:'10px'}}></i>:<i onClick={this.props.y} class="fa fa-pause" style={{backgroundColor:'rgb(205, 223, 240)',float:'left',margin:'10px'}}></i>}
                <p className='musicfont'>好想你</p>                               
            </div>
            </Row>
            </Draggable>
        )
    }
}   