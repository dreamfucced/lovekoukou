import React from 'react';
import {Nav,Navbar,Row,Jumbotron,Container} from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css';
import Draggable from 'react-draggable';
export default class text extends React.Component{
    constructor(props){
        super(props);
    }

    scrollDiv_init() {
        var DivElmnt = document.getElementById('MyDivName');
        var ReachedMaxScroll = false;
        
        var DivElmnt.scrollTop = 0;
        var PreviousScrollTop  = 0;
        
        var ScrollInterval = setInterval('scrollDiv()', ScrollRate);
    }
    
    scrollDiv() {
	
        if (!ReachedMaxScroll) {
            DivElmnt.scrollTop = PreviousScrollTop;
            PreviousScrollTop++;
            
            ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
        }
    /*
        else {
            ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
            
            DivElmnt.scrollTop = PreviousScrollTop;
            PreviousScrollTop--;
        }
    */
    }
    
    pauseDiv() {
        clearInterval(ScrollInterval);
    }
    
    resumeDiv() {
        var PreviousScrollTop = DivElmnt.scrollTop;
        var ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
    }
    componentDidMount() {
        this.scrollDiv_init()
    }
    
   


    render(){
        return(
            <Draggable>
            <Container>
            <div id="MyDivName" style="overflow:auto;width:200px;height:100px" onMouseOver="pauseDiv()" onMouseOut="resumeDiv()">
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text text text text text text text text text text text
            </div>
           </Container>
           </Draggable>
        )
    }
}   