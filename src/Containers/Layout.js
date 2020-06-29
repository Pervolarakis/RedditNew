import React from 'react';
import AddBar from './AddBar/AddBar'
import Body from './Body/Body'
import axios from 'axios';




class Layout extends React.Component{
    
    state={loaded: true, data: {}, reload:false}

    componentDidMount(){
        axios.get('https://redditnew-5a43d.firebaseio.com/base.json')
            .then((res)=>
                this.setState({data: res.data}),
                
        )
        
    }

    componentDidUpdate(){
        if(this.state.reload){
        axios.get('https://redditnew-5a43d.firebaseio.com/base.json')
            .then((res)=>
                this.setState({data: res.data,reload: false}),
                
        )
        console.log("update");
            
    }

    }

    onAddButtonPress = (text)=>{
        let epochNow = Date.now().toString().slice(0,10);
        axios.get(`https://www.reddit.com/r/${text}/about.json`)
        .then(()=>axios.post('https://redditnew-5a43d.firebaseio.com/base.json',{
            "url": text,
            "time": epochNow
        }).then(()=>this.setState({reload: !this.state.reload})))
        .catch((error)=>console.log(error));
        
    } 

    onDeleteButtonPres = (url) =>{
        axios.delete(`https://redditnew-5a43d.firebaseio.com/base/${url}.json`)
            .then(()=>this.setState({reload: !this.state.reload}))
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
                <Body data={this.state.data} loaded={this.state.loaded} onDelete={(url)=>this.onDeleteButtonPres(url)}></Body>

            </div>

        )
    }

}
export default Layout;