import React, { Component } from 'react'
import PropType from 'prop-types';

export class TodoItem extends Component {


    getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderbottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    btnStyle()  {
        return {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
        
    }
    render() {
        return (
            <div style={this.getStyle()}>
            <p>
            <input type='checkbox' onChange={this.props.markComplete.bind(this,this.props.todo.id)}></input>    
            {this.props.todo.title}
            <button onClick={this.props.delTodo.bind(this,this.props.todo.id)} style={this.btnStyle()}>x</button>
            </p>  
            </div>
        )
    }
}
TodoItem.propType = {
    todo: PropType.object.isRequired
}


export default TodoItem
