import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import './Todo.css'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state ={};


    }
    render(){
        return(
            <>
            <div className='todo'>
                <Card>
                    <Card.Body>
                        <h4> {this.props.todo.id} </h4>
                        <h3>  {this.props.todo.title} </h3>
                         <h5>  {this.props.todo.status} </h5>
                    </Card.Body>
                </Card>
                </div>
            </>
        )
    }
}

export default Todo;