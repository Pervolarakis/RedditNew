import React from 'react';
import {Button} from 'antd';
import {MinusCircleOutlined} from '@ant-design/icons';

function DeleteMode(props){

    
    return(
        <div>
            <Button type="danger" shape="round" onClick={props.action}>
                <MinusCircleOutlined/>
            </Button>
        </div>
    );


}

export default DeleteMode;