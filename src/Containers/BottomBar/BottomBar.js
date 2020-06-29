import React from 'react';
import {Button} from 'antd';
import {MinusSquareOutlined} from '@ant-design/icons';

class BottomBar extends React.Component{
    render(){
        return(
            <div style={{display:"flex", justifyContent: "flex-end", background: "white", height: "38px", marginTop: 10, color: "red"}}>
                <Button type="danger" style={{height: "100%", marginRight: 3}} onClick={()=>this.props.switchMode()}>
                    <MinusSquareOutlined width="30" />
                </Button>
            </div>
        )

    }

}

export default BottomBar;