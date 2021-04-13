import React, {useState,useEffect} from 'react';
import axios from 'axios';
import DisplayMode from './DisplayMode';
import DeleteMode from './DeleteMode';
import { Avatar } from 'antd';
/* global chrome */

function ListItem(props) {
    
    const [newPosts,setNewPosts] = useState(0);
    const [icon, setIcon] = useState("");
    

    useEffect(()=>{
        axios.get(`https://api.reddit.com/r/${props.txt}/new?before=${props.lastPost}`)
            .then((res)=>setNewPosts(res.data.data.dist))
        axios.get(`https://www.reddit.com/r/${props.txt}/about.json`)
            .then((res)=> setIcon(res.data.data.icon_img))
    },[props.lastPost, props.txt]);

    const onVisitClick = () =>{
        
        setNewPosts(0);
        axios.get(`https://api.reddit.com/r/${props.txt}/new?limit=1`)
        .then(async(res)=>{
            await props.addPostAction({
                "url": props.txt,
                "lastPost": res.data.data.children[0].data.name
            })
        })
        .then(()=>{
            chrome.tabs.create({ url: "https://www.reddit.com/r/"+props.txt+"/new/" });
        })
        .catch((error)=>console.log(error));


    }
   
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

    let mode = (props.remove)? (<DeleteMode action={props.deleteAction}></DeleteMode>): (<DisplayMode onVisit={()=>onVisitClick()}newPosts={newPosts} txt={props.txt}></DisplayMode>);

    return (
        <div style={Styles.div}> 
            {console.log("item")}
            <Avatar src={icon}></Avatar>
            <p>{"r/"+props.txt}</p>
            {mode}
        </div>
    );
    
}

export default ListItem;
