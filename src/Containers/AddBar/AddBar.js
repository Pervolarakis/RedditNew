import React,{useState} from 'react';
import {Input, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

function AddBar(props){
    
    const [text,setText] = useState("");

    const onTextChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = () => {
        props.onAdd(text)
        setText("");
    }

    const handleKeypress = e => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };

           
    return(
        <div style={{display: "flex", marginBottom: 8}}>
            <Input onChange={(e)=>onTextChange(e)} placeholder="Add new subreddit" onKeyPress={(e)=>handleKeypress(e)} value={text}></Input>
            <Button onClick={()=>onSubmit()}><PlusOutlined/></Button>
        </div>

    )
}

export default AddBar;