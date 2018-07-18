import React, { Component } from "react";

class Delete extends Component {
  constructor(props){
    super(props);
    this.state = {
      cid: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
  }
    handleChangeID(event) {
      const target = event.target;
      const value = target.value;
      this.setState({cid: value});
    }
    handleSubmit(event) {
      event.preventDefault();
      //eslint-disable-next-line
      if(this.state.cid != -1){
      if(localStorage.getItem(this.state.cid) != null){
        if(window.confirm('Are you sure?')){
      localStorage.removeItem(this.state.cid);
      var count = localStorage.getItem('count');
      count--;
      localStorage.setItem('count',count);
      alert("Record ID "+this.state.cid+" has been deleted.")
      this.setState({cid: ''})
    }
      }else{alert("ID not found")}
    }else{
      if(window.confirm('Are you sure you want to delete all data?')){
        localStorage.clear();
      }
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        ID: <input type="number" placeholder="ID (-1 to delete all)" value={this.state.cid} onChange={this.handleChangeID} />
        <input type="submit" value="Delete" />
      
      </form>
    );
  }
}

export default Delete;
