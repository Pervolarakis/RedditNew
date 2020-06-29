import React from 'react';
import {Input, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

class AddBar extends React.Component{
    state={text: ""}

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    onSubmit = () => {
        this.props.onAdd(this.state.text)
        this.setState({text: ""});
    }

           
    render(){
        
        return(
            <div style={{display: "flex", marginBottom: 8}}>
                <Input onChange={(e)=>this.onTextChange(e)} placeholder="Add new subreddit" value={this.state.text}></Input>
                <Button onClick={()=>this.onSubmit()}><PlusOutlined/></Button>
            </div>

        )


    }

}
export default AddBar;