import React from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.css';

function DisplayMode(props){
    
    let newPostComp = (props.newPosts)? (<div><Button type="primary" shape="circle" disabled style={{background: "red", color: "white", marginRight: 6}}>{props.newPosts}</Button></div>): (null)
    return(
        <div style={{display: "flex"}}>
            {newPostComp}
            <Button type="primary" onClick={()=>props.onVisit()} style={{width: 90, background: "#ff6314", borderRadius: 10, color: "white", border: "1px solid grey", outline: "none"}}>Visit</Button>
        </div>
    );


}

export default DisplayMode;