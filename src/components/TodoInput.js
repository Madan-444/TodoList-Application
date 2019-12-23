import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {item,func,handleSubmit,itemEdit} = this.props
        // console.log(item)
       
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' placeholder='add a todo item' value={item} onChange={func} />
                    </div>
                    <button type ='submit' className={
                        itemEdit?'btn btn-block btn-success mt-3':'btn btn-block btn-primary mt-3'
                    }>{itemEdit ?'edit item':'add item'}</button>
                </form>
            </div>
        )
           

    }
}

export default TodoInput
