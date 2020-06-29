import React from 'react';
import ListItem from '../../Components/ListItem'
import BottomBar from '../BottomBar/BottomBar'

class Body extends React.Component{
    

    state={remove: false}

    deleteAction = (url) => {
        this.props.onDelete(url)
    }

    switchMode = () =>{
        
        this.setState({remove: !this.state.remove})
    }

    render(){
        
        let content= (!this.props.loaded)? (<div>Nothing to show yet!</div>) : (Object.keys(this.props.data).map((key)=>{return(<ListItem remove={this.state.remove} key={key} deleteAction={()=>this.deleteAction(key)}txt={this.props.data[key].url}></ListItem>)}));
        
        return(
            <div>
                <div style={{height: '290px', overflow: "auto"}}>
                    {content}
                </div>
                <BottomBar switchMode={()=>this.switchMode()}></BottomBar>
            </div>
            
        
        );
    }
}

export default Body;