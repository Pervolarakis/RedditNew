import React from 'react';
import axios from 'axios';
import {Input, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

class AddBar extends React.Component{
    state={text: ""}

        onTextChange = (event) => {
            this.setState({text: event.target.value});
        }

           
    render(){
        
        return(
            <div style={{display: "flex", marginBottom: 8}}>
                <Input onChange={(e)=>this.onTextChange(e)}></Input>
                <Button onClick={()=>this.props.onAdd(this.state.text)}><PlusOutlined/></Button>
            </div>

        )


    }

}
export default AddBar;