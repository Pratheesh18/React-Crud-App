import React , {Component} from 'react';
import api from '../AxiosApi/api';
import {Card } from 'react-bootstrap';


export default class Todos extends Component{
  constructor(props){
    super(props);

    this.state = {
      todos:[],
    };
  }


  componentDidMount(){
    this.getTodos();
  }

  getTodos = () =>{
    api.get("/todos")
        .then((response) => {
          this.setState({todos:response.data});
        });
  };

  render(){
    return(
      <div>
      <div classname="container">
        <div className="row">
          {this.state.todos.map((todo)=>(
            <div className='col-md-3 mb-2' key={todo.id}>
                 <Card style={{height:"26rem"}}>
                  <Card.Body>
                    <h4>  {todo.title} </h4>
                    <p>  {todo.status} </p>
                  </Card.Body>
                 </Card>
            </div>
          ))}
        
      </div>
      </div>
      </div>
    )
  }
}