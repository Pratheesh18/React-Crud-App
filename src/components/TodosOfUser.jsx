import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import api from '../AxiosApi/api';
import {Modal , Button,Form} from 'react-bootstrap';
import Todo from './Todo';
import axios from 'axios';


class TodosOfUser extends Component{
    constructor(props){
        super(props);

        this.state ={
            id:this.props.match.params.id,
            TodoOfUser:[],
            show:false,
            nwTodo:{
                status:"",
                title:"",
            },
        };
    }

    componentDidMount(){
         this.getTodosOfUser();
    }

    getTodosOfUser = () =>{
        api.get(`/users/${this.props.match.params.id}/todos`, {})
           .then((response) =>{
            this.setState({TodoOfUser:response.data});
           })
    };

   addNewTodo = () =>{
    axios({
        method:"post",
        url:`https://gorest.co.in/public/v2/users/${this.state.id}/todos`,
        data:this.state.nwTodo,
        headers:{
            Authorization:
            "Bearer 43157fce0d07e7f20855dde25fbb772a6078687c40c3d2734da25e50d18dd1d3",
           "Content-Type": "application/json",
        },
    })
    .then((response) => {
        this.getTodosOfUser();
        this.setState({...this.state,show:false});
    })
   }

    handleModal = () =>{
        this.setState({...this.state,show:true});
    }

    handleClose = () =>{
        this.setState({...this.state,show:false});
    }

     render(){
        return(
            <>
                {this.state.show && (
                    <Modal show={true} onHide={() => {this.handleClose()}} backdrop="static" keyboard={false} >
                         <Modal.Header closeButton>
                            <Modal.Title>
                                Add Todo
                            </Modal.Title>
                         </Modal.Header>
                         <Modal.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Title' name="title" onChange={(event) =>{
                                        this.setState({
                                            ...this.state,
                                            nwTodo:{
                                                ...this.state.nwTodo,
                                                title: event.target.value,
                                            },
                                        })
                                    }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label> Status </Form.Label>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" value="pending" name="status" id="flexRadioDefault1" onChange={(event) =>{
                                        this.setState({
                                            ...this.state,
                                            nwTodo:{
                                                ...this.state.nwTodo,
                                                status:event.target.value,
                                            }
                                        })
                                    }}  />
                                    <label className="form-check-label" for="pending">
                                        Pending
                                    </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type="radio" value="completed" name="status" id="flexradioDefault1" onChange={(event) =>{
                                            this.setState({
                                                ...this.state,
                                                nwTodo:{
                                                    ...this.state.nwTodo,
                                                    status:event.target.value,
                                                }
                                            })
                                        }} />
                                        <label className="form-check-label" for="completed">
                                            Completed
                                        </label>
                                    </div>
                                </Form.Group>
                            </Form>
                         </Modal.Body>
                         <Modal.Footer>
                            <Button variant="primary" onClick={() =>{
                                this.handleClose();
                            }}> Close </Button>
                            <Button variant='primary' onClick={() =>{
                                this.addNewTodo();
                            }}> Add New Todo </Button>
                         </Modal.Footer>
                    </Modal>
                )}
                <Button variant="primary" style={{marginTop:"20px",marginBottom:"20px"}} onClick={()=>{
                    this.handleModal();
                }}> Create Todo</Button>

                <div className='container'>
                    <div className='row'>
                        {this.state.TodoOfUser.map((todo)=>(
                            <Todo key={todo.id} todo={todo}>

                            </Todo>
                        ))}
                    </div>
                </div>
            </>

        )
     }


}

export default withRouter(TodosOfUser);