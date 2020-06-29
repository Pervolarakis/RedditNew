import React from 'react';
import axios from 'axios';
import ListItem from '../../Components/ListItem'

class Body extends React.Component{
    
    state={loaded: true}
    render(){
        let content= (!this.state.loaded)? (<div>Nothing to show yet!</div>) : (
        Object.values(this.props.data).map((data,index)=>{return(<ListItem key={index} txt={data.url}></ListItem>)})
        ); 
    
        return(
            <div style={{height: '290px', overflow: "auto"}}>
                {content}
            </div>
        
        );
    }
}

export default Body;