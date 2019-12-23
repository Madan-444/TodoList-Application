import React, { Component } from 'react'
import Todoitem from './Todoitem'

 class TodoList extends Component {
     
    render() {
        const {item,clearList,handleDelete,handleEdit} =this.props
        // // const {items} = this.props
        // console.log(item)
        return (
            <div>
            <ul className="list-group my-5">
                <h3 className='text-capitalize text-center'>todo list</h3>
                {
                    item.map(i =>{
                        return(
                            <Todoitem key={i.id} title={i.title} handleDelete={()=>handleDelete(i.id)}
                            handleEdit={()=>handleEdit(i.id)} />

                        )
                    })
                }
                   
                <button type='button' className="btn btn-danger btn-block text-capitalize" onClick={clearList}>Clear List</button>
            </ul>
            
                
            </div>
        )
    }
}

export default TodoList
