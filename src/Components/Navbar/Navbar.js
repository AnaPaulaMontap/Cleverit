import React from 'react';
import './Navbar.css';
import Modal from '../Modal/Modal';
import Result from '../Result/Result'


class Navbar extends React.Component {
    constructor(){
    super();
    this.state={ //Estado Inicial
        search : false,
        modal : false,
    }

}
handleSearch = (e) =>{
    let conditionSearch = document.getElementById("search-imput").value    
    this.setState({
        search: conditionSearch,    
    },()=>{
      document.getElementById("search-imput").value = ""; 
    })
}

openModal=()=>{
    this.setState({
      ...this.state,
      modal: true,
    })
  }
  closeModal=()=>{
    this.setState({
      ...this.state,
      modal:false,
      
    })
}

render(){
    return(
    <div>
        <div>
       <h2>USUARIOS</h2>
        <div className="Searcher">
            <input  id="search-imput" type="search" placeholder="Search"></input>
            <button onClick={this.handleSearch}> Search </button>
        </div>
        <button  className="buttons" onClick={this.openModal}> Add User </button> 
        </div>
    { this.state.modal && 
	    <Modal close={this.closeModal} item={this.state.modal}/>
    }
    { this.state.search && 
	    <Result data={this.state.search}/>
	}
    </div>
    
    )
    }
}

export default Navbar