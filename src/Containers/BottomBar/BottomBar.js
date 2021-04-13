import React from 'react';
import {Button} from 'antd';
import {MinusSquareOutlined} from '@ant-design/icons';

function BottomBar(props){
    
    return(
        <div style={{display:"flex", justifyContent: "flex-end", background: "white", height: "38px", marginTop: 10, color: "red"}}>
            <Button type="danger" style={{height: "100%", padding: 3, marginRight: 3}} onClick={()=>props.switchMode()}>
                <MinusSquareOutlined style={{ fontSize: '30px'}}/>
            </Button>
        </div>
    )
    
}

export default BottomBar;