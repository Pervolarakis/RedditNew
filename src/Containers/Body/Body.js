import React from 'react';
import ListItem from '../../Components/ListItem'
import BottomBar from '../BottomBar/BottomBar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


class Body extends React.Component{
    

    state={remove: false}

    deleteAction = (url) => {
        this.props.onDelete(url)
    }

    switchMode = () =>{
        
        this.setState({remove: !this.state.remove})
    }

    render(){
        
        let content= (!this.props.loaded)? (<div>Nothing to show yet!</div>) : (
            Object.keys(this.props.data).map((key)=>{ 
            return(
                <ListItem remove={this.state.remove} key={key} id={key} deleteAction={()=>this.deleteAction(key)} txt={this.props.data[key].url} time={this.props.data[key].time}></ListItem>
            )
            })
        );
        
        return(
            <div>
                <div style={{height: '290px'}}>
                    <PerfectScrollbar>
                        {content}
                    </PerfectScrollbar>
                </div>
                <BottomBar switchMode={()=>this.switchMode()}></BottomBar>
            </div>
            
        
        );
    }
}

export default Body;