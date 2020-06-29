import React from 'react';
import {Button} from 'antd';
import {MinusCircleOutlined} from '@ant-design/icons';

class BottomBar extends React.Component{
    render(){
        return(
            <div style={{background: "white", height: "38px", marginTop: 10, color: "red"}}>
                <Button type="danger" shape="round">
                    <MinusCircleOutlined />
                </Button>
            </div>
        )

    }

}

export default BottomBar;