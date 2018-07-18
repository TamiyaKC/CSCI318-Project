import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { numberFilter, dateFilter, textFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.css';


class Table extends Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      list : []
      };
  }
  handler(){
   this.setState({list:JSON.parse(localStorage.getItem('list'))});
  }
  componentDidMount(){
    this.handler();
}
  render(){
    //Rerender listening to submit button
    window.addEventListener('submit', this.handler);
    var result=[];
    if(localStorage.getItem('list')){
    for(var i=0;i<this.state.list.length;i++){
      if(localStorage.getItem(this.state.list[i]))
      result.push(JSON.parse(localStorage.getItem(this.state.list[i])))
    }
  }
  //React bootstrap table 2
  const rows = result;
  const columns = [{
    dataField:'id',
    text:'ID',
    sort:true

  }, {
    dataField: 'date',
    text: 'Date',
    sort: true,
    filter: dateFilter()

  }, {
    dataField: 'cate',
    text: 'Category',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'desc',
    text: 'Description',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'amount',
    text: 'Amount',
    sort: true,
    filter: numberFilter()
  }];


    return (
      <div className='table'>
      <BootstrapTable keyField='id' data={ rows } columns={ columns } filter={filterFactory()}/>
      </div>
    )
  }
}

export default Table;
