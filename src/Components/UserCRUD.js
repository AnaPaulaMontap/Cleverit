import React from 'react';
import { connect } from 'react-redux';
import { diplayResult } from '../Action/actionPrincipal';
import './UserCRUD.css';


class UserCRUD extends React.Component {
    constructor(){
    super();
    this.state={ //Estado Inicial
        result: false,
        user: false
    }

}

componentDidMount () {
    fetch('http://jsonverserverclever.azurewebsites.net/User')
    .then(resp => resp.json())
    .then((data)=>{
        let arr = []
        for ( let i=0; i<10; i++){
            arr.push(data[i])
        }
        this.setState({
            ...this.state,
            result: arr
        })
        
    })
}

handleClick = (item)=>{
    console.log(item)
    this.setState({
        ...this.state,
        user : item
    })
}


    render(){
        const name = this.state.result ? (this.state.result.map((item)=>{
            return (
              <p key={item.id} value ={item} onClick={()=>this.handleClick(item)}>{item.name} {item.lastName}</p>   
             )
            })): null

        return (
        <div>        
          <div className="container">
          <h2>User</h2>
            {name}
          </div>          
          <div className="container">
           <h2>Details</h2>
           "name":{this.state.user.name}
           <br/>
           "lastName":{this.state.user.lastName}
           <br/>
           "email":{this.state.user.email}
           <br/>
           "id":{this.state.user.id}
          </div>
        </div>
        )
    }
}

// Envio a Redux
const mapStateToProps = state => {
    return ({
        ...state,       
    })
 };const mapDispatchToProps = dispatch => ({     
    diplayResultAction: diplayResult(dispatch)   

 });export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserCRUD)