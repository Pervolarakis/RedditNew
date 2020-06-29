import React from 'react';
import AddBar from './AddBar/AddBar'
import Body from './Body/Body'
import axios from 'axios';
import BottomBar from './BottomBar/BottomBar'



class Layout extends React.Component{
    
    state={loaded: false, data: {}, reload:false}

    componentDidMount(){
        axios.get('https://redditnew-5a43d.firebaseio.com/base.json')
            .then((res)=>
                this.setState({loaded: true, data: res.data}),
                
        )
    }

    componentDidUpdate(){
        axios.get('https://redditnew-5a43d.firebaseio.com/base.json')
            .then((res)=>
                this.setState({data: res.data}),
                
        )


    }

    onAddButtonPress = (text)=>{
        let epochNow = Date.now().toString().slice(0,10);
        
        axios.post('https://redditnew-5a43d.firebaseio.com/base.json',{
            "url": text,
            "time": epochNow
        }).then(()=>this.setState({reload: !this.state.reload}))

        console.log(console.log(this.state));
        
    } 
    
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "skyblue",
            width: "300px",
            height: "400px",
            padding: "10px"
            
            
          };

    
        return(
            <div style={mystyle}>
                <AddBar onAdd={(txt)=>this.onAddButtonPress(txt)}></AddBar>
                <Body data={this.state.data}></Body>
                <BottomBar></BottomBar>
            </div>

        )
    }

}
export default Layout;