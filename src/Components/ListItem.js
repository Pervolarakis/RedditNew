import React from 'react';
import axios from 'axios';
import DisplayMode from './DisplayMode';
import DeleteMode from './DeleteMode';
import { Avatar } from 'antd';
class ListItem extends React.Component {
    
    state={newPosts: 0, icon: ""}

    componentDidMount(){
        axios.get(`https://api.pushshift.io/reddit/submission/search/?subreddit=${this.props.txt}&after=1593190993`)
            .then((res)=>this.setState({newPosts: res.data.data.length}));
        axios.get(`https://www.reddit.com/r/${this.props.txt}/about.json`)
            .then((res)=> this.setState({icon: res.data.data.icon_img}))
            .catch((error)=>console.log(error));
    }
   
    
    render(){
        const Styles= {
            div:{
                display: "flex",
                backgroundColor: "white",
                color: "#ff6314",
                margin: 2,
                border: "1px solid #5296DD",
                borderRadius: 5,
                justifyContent: 'space-between',
                padding: 10
            },
            
        }

        let mode = (this.props.remove)? (<DeleteMode action={this.props.deleteAction}></DeleteMode>): (<DisplayMode newPosts={this.state.newPosts} txt={this.props.txt}></DisplayMode>);

        return (
            <div style={Styles.div}> 
                <Avatar src={this.state.icon}></Avatar>
                <p>{"r/"+this.props.txt}</p>
                {mode}
            </div>
        );
    }
}

export default ListItem;
