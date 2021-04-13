import React, {useState} from 'react';
import ListItem from '../../Components/ListItem'
import BottomBar from '../BottomBar/BottomBar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


function Body(props){
    
    const [remove, setRemove] = useState(false);
    

    const deleteAction = (url) => {
        props.onDelete(url)
    }

    const switchMode = () =>{
        setRemove(!remove);
    }

    
        
    let content= (!props.data)? (<div>Nothing to show yet!</div>) : (
        Object.keys(props.data).map((key)=>{ 
        return(
            <ListItem remove={remove} key={key} id={key} addPostAction={(newEntry)=>props.onAdd(newEntry)} deleteAction={()=>deleteAction(key)} txt={props.data[key].url} lastPost={props.data[key].lastPost}></ListItem>
        )
        })
    );
    
    return(
        <div>
            {console.log("body")}
            <div style={{height: '290px'}}>
                <PerfectScrollbar>
                    {content}
                </PerfectScrollbar>
            </div>
            <BottomBar switchMode={()=>switchMode()}></BottomBar>
        </div>
        
    
    );
    
}

export default Body;