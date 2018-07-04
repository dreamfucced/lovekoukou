import React from 'react';
import {Nav,Navbar} from 'reactstrap'
import Picture1 from '../dropdownicon1.jpg'
import Player from '../Player/player'
import Sound from 'react-sound';
import logo from '../page2.jpg';
import Nav1 from '../Nav/Nav'
export default class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playstatus:Sound.status.STOPPED
        }
        this.onClickhandler.bind(this)
    }
    onClickhandler(){
        if(this.state.playstatus===Sound.status.STOPPED){
            this.setState({
                playstatus:Sound.status.PLAYING
            })
        }
        else{
            this.setState({
                playstatus:Sound.status.STOPPED
            })
        }
    }
    render(){
        var logo1 = (
            <img className ='pic1'
            src={logo}
            alt="Canvas Logo"
            />)
        return(
            <div>
                <Nav1/>
                <Player y={()=>this.onClickhandler()} x={this.state.playstatus}/>
                {logo1}
                <Sound
                    url="http://lzscuw.changba.com/1074538506.mp3"
                    playStatus={this.state.playstatus}
                />
            </div>
        )
    }
}