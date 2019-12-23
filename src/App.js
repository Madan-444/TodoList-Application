import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component{
  state={
    items:[],
    item:'',
    id:uuid(),
    itemEdit:false
  }
  handleitem = (e) =>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const newUpdate = [newItem,...this.state.items]
    this.setState({
      items:newUpdate,
      id:uuid(),
      item:'',
      itemEdit:false
    })
  }
 clearList = ()=>{
   this.setState({
     items:[]
   })
 }
 handleDelete = (id)=>{
  const filteredItem = this.state.items.filter(item =>item.id !==id)
  this.setState({
    items:filteredItem
  })
 }
 handleEdit =(id)=>{
  
  const filteredItem = this.state.items.filter(item =>item.id !==id)
  const selectedItem = this.state.items.find(item=>item.id===id);
  console.log(selectedItem)
  this.setState({
    items:filteredItem,
    item:selectedItem.title,
    itemEdit:true,
    id:id
  })
  //  console.log('some thing happens',id)


    
 }
 
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput item={this.state.item} func={this.handleitem} handleSubmit = {this.handleSubmit} itemEdit = {this.state.itemEdit} />
            <TodoList item={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}  />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
