import React from 'react';
import AddBar from './AddBar/AddBar'
import Body from './Body/Body'
import axios from 'axios';
import {useState, useEffect} from 'react';

/* global chrome */



function Layout(){


    const [data, setData] = useState({});
        
    const addData=async (dataArg)=>{
        setData({...data, [dataArg["url"]]: dataArg})
    }

    useEffect(()=>{
        chrome.storage.local.get(['key'], (result) => {           
            setData(result.key)       
        });
    },[]);

    useEffect(()=>{
        chrome.storage.local.set(
            {
                key: data
            },function(){
                
            }
        )
    },[data]);
    
    const onDeleteButtonPres = (url) => {
        const newData = {...data}
        delete newData[url]
        setData(newData);
    }

    const onAddButtonPress = (text)=>{
        axios.get(`https://api.reddit.com/r/${text}/new?limit=1`)
        .then(async(res)=>{
            await addData({
                    "url": text,
                    "lastPost": res.data.data.children[0].data.name
            })
        })
    } 


    const mystyle = {
        color: "white",
        backgroundColor: "skyblue",
        width: "300px",
        height: "400px",
        padding: "10px"
        
        
        };

    
    return(
        <div style={mystyle}>
            {console.log("main")}
            <AddBar onAdd={(txt)=>onAddButtonPress(txt)}></AddBar> 
            <Body data={data} onDelete={(url)=>onDeleteButtonPres(url)} onAdd={(data)=>addData(data)}></Body>

        </div>

    )
    

}
export default Layout;