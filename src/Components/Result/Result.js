import React from 'react';
import './Result.css';


class Result extends React.Component {
    constructor(){
    super();
    this.state={ 
        details: false,
    }

}

componentDidMount () {
    fetch('http://jsonverserverclever.azurewebsites.net/User')
    .then(resp => resp.json())
    .then((data)=>{
       
        data.map((item)=>{
        if(this.props.data === item.name){
               this.setState({
                    details: item
               },()=>{
                   console.log(this.state.details)
               })
           }
        })
        
    })
}

render(){       
        return (
        <div className="item">        
          <div className="container">
          <h2>User</h2>
            {this.state.details.name}
          </div>          
          <div className="container">
           <h2>Details</h2>
           "name":{this.state.details.name}
           <br/>
           "lastName":{this.state.details.lastName}
           <br/>
           "email":{this.state.details.email}
           <br/>
           "id":{this.state.details.id}
          </div>
        </div>
        )
    }
}

// Envio a Redux
export default Result