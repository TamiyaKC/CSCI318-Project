import React, { Component } from "react";
class Create extends Component {
  constructor(props){
    super(props);
    //Initialize for table creation
    if(!localStorage.getItem('index'))
    {
      localStorage.setItem('index', 0)
    }
    this.state = {
      date: '',
      cate: '',
      desc: '',
      amount: '',
      targeti: localStorage.getItem('index')
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeDate = this.handleChangeDate.bind(this);
  this.handleChangeCate = this.handleChangeCate.bind(this);
  this.handleChangeDesc = this.handleChangeDesc.bind(this);
  this.handleChangeAmount = this.handleChangeAmount.bind(this);
}
  handleChangeDate(event) {
    const target = event.target;
    const value = target.value;
    this.setState({date: value});
  }
  handleChangeCate(event) {
    const target = event.target;
    const value = target.value;
    this.setState({cate: value});
  }
  handleChangeDesc(event) {
    const target = event.target;
    const value = target.value;
    this.setState({desc: value});
  }
  handleChangeAmount(event) {
    const target = event.target;
    const value = target.value;
    this.setState({amount: value});
  }
  handleSubmit(event) {
    event.preventDefault();
    //Prevent undefined and set target index to put new record in the table
    if(!localStorage.getItem('index')){
      localStorage.setItem('count',0);
      localStorage.setItem('index',0);
      this.setState({targeti: 0})
    }
    //Create array storing input data
    var record = {id: this.state.targeti,
                   date: this.state.date,
                   cate: this.state.cate,
                   desc: this.state.desc,
                   amount: this.state.amount};
    //localstorage only accepts string data, using json stringify to convert
    localStorage.setItem(this.state.targeti,JSON.stringify(record));
    //Point to next index
    var targetj = this.state.targeti;
    targetj++;
    this.setState({targeti: targetj});
    //using localstorage to store index
    localStorage.setItem('index',targetj);
    //Count of total number of rows, init if count doen't exists
    if(localStorage.getItem('count') == null){
      localStorage.setItem('count', '0')
    }
    var count = localStorage.getItem('count');
    count++;
    localStorage.setItem('count',count);
    //Pointer array for use of update function
    var list=[];
    if(localStorage.getItem('list')){
      list = JSON.parse(localStorage.getItem('list'))
    }
    list.push(this.state.targeti);
    localStorage.setItem('list',JSON.stringify(list));
    //Reset input
    this.setState({date: "",cate:"",desc:"",amount:''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        Date: <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
        Category: <input type="text" placeholder="Category" value={this.state.cate} onChange={this.handleChangeCate} />
        Description: <input type="text" placeholder="Description" value={this.state.desc} onChange={this.handleChangeDesc} />
        Amount: <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleChangeAmount} />
        <input type="submit" value="Create" />

      </form>
    );
  }
}

export default Create;
