import React from 'react';
import axios from 'axios';
import {Button, DatePicker} from 'antd';
import 'antd/dist/antd.css';
class ListItem extends React.Component {
    
    state={newPosts: 0}

    componentDidMount(){
        axios.get('https://api.pushshift.io/reddit/submission/search/?subreddit=redditdev&after=1593190993')
            .then((res)=>this.setState({newPosts: res.data.data.length}));
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
        let newPostComp = (this.state.newPosts)? (<div><Button type="primary" shape="circle" disabled style={{background: "red", color: "white"}}>{this.state.newPosts}</Button></div>): (null)
        return (
            <div style={Styles.div}> 
                <p>{this.props.txt}</p>
                <div style={{display: "flex"}}>
                    {newPostComp}
                    <Button type="primary" href={"https://www.reddit.com/r/"+this.props.txt+"/new/"} style={{width: 90, background: "#ff6314", borderRadius: 10, color: "white", border: "1px solid grey", outline: "none"}}>Visit</Button>
                </div>
            </div>
        );
    }
}

export default ListItem;
