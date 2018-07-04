import React from 'react';
import logo from '../homepage.jpg';
import Player from '../Player/player'
import Sound from 'react-sound';
import {Row,Col} from 'reactstrap'
import Nav1 from '../Nav/Nav'
import Text from '../Text/Text'
export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playstatus:Sound.status.STOPPED
        }
    }
    componentDidMount(){

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
            <img 
            src={logo}
            alt="Canvas Logo"
            />)
        return(
            
            <div>
                <Nav1/>
                <Row>
                <Col md='10'>
                {logo1}
                </Col>
                <Col md='2'>
                <Player style={{float:'top'}} y={()=>this.onClickhandler()} x={this.state.playstatus}/>
                <Sound
                    url="http://lzscuw.changba.com/1074538506.mp3"
                    playStatus={this.state.playstatus}
                />
                </Col>
                </Row>
                <Text/>
            </div>
        )
    }
}