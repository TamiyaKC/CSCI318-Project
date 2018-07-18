import React, { Component } from "react";
class Update extends Component {
  constructor(props){
    super(props);
    this.state = {
      cid: '',
      date: '',
      cate: '',
      desc: '',
      amount: '',
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeID = this.handleChangeID.bind(this);
  this.handleChangeDate = this.handleChangeDate.bind(this);
  this.handleChangeCate = this.handleChangeCate.bind(this);
  this.handleChangeDesc = this.handleChangeDesc.bind(this);
  this.handleChangeAmount = this.handleChangeAmount.bind(this);
}
  handleChangeID(event) {
    const target = event.target;
    const value = target.value;
    this.setState({cid: value});
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
    if(localStorage.getItem(this.state.cid) != null){
    var record = { id: this.state.cid,
                   date: this.state.date,
                   cate: this.state.cate,
                   desc: this.state.desc,
                   amount: this.state.amount};
    var preset = JSON.parse(localStorage.getItem(this.state.cid));
    if(record.date===''){
      record.date = preset.date;
    }
    if(record.cate===''){
      record.cate = preset.cate;
    }
    if(record.desc===''){
      record.desc = preset.desc;
    }
    if(record.amount===''){
      record.amount = preset.amount;
    }
    localStorage.setItem(this.state.cid,JSON.stringify(record));
    this.setState({cid: '',date: "",cate:"",desc:"",amount:''})}else{alert("ID not found")}
    record = [];
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>

        ID: <input type="number" placeholder="ID" value={this.state.cid} onChange={this.handleChangeID} />
        Date: <input type="date" value={this.state.date} onChange={this.handleChangeDate} />
        Category: <input type="text" placeholder="Category" value={this.state.cate} onChange={this.handleChangeCate} />
        Description: <input type="text" placeholder="Description" value={this.state.desc} onChange={this.handleChangeDesc} />
        Amount: <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleChangeAmount} />
        <input type="submit" value="Update" />

      </form>
    );
  }
}

export default Update;
