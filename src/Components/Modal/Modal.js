import React from 'react';
import './Modal.css';


class Modal extends React.Component {
    constructor(props){
    super(props);
    this.state={ //Estado Inicial
        nameForm: false,
        lastnameForm: false,
        emailForm: false,
    }

}
handleForm = ()=>{
    let name = document.getElementById("name").value;   
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value 
    
    this.setState({
        nameForm: name,
        lastnameForm: lastname,
        emailForm: email,
    }, ()=>{
        this.props.close()
        this.handlePost()
    })
}

handlePost = () =>{
    (async () => {
        const rawResponse = await fetch('http://jsonverserverclever.azurewebsites.net/User', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:Math.floor(Math.random()*101),name: this.state.nameForm, lastname: this.state.lastnameForm, email: this.state.emailForm, password: Math.round()})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
}


render (){
    
   return ( 
   <div className="divAfuera" onClick={(e)=>{
       if ( e.target.getAttribute("class")==="divAfuera"){
           this.props.close()
       }
   }}>
        <div className="divAdentro">
        <h2 className="titleModal">Add User</h2>
         <form className="contactForm">
            Name:<br/>
            <input id="name" type="text" name="name" />  <br/>            
            Last name:<br/>
            <input id="lastname" type="text" name="lastname" /> <br/> 
            Email:<br/>
            <input id="email" type="email" name="email" /> <br/> 
            
        </form>
        <button className="saveForm" onClick={this.handleForm}>Save</button>
        </div>
    </div>
    )
}
}

export default Modal