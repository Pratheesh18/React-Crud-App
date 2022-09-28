import React,{Component} from "react";
import {Link} from 'react-router-dom';
import api from "../AxiosApi/api";
import ModalClass from "./ModalClass";
import {Table,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './EachUser.css';

 class EachUser extends Component{
    constructor(props){
        super(props);

        this.state ={
            show:false,
            nwUser:{
                id:this.props.user.id,
                name:"",
                email:"",
                gender:"",
                status:"",
            },
        };
    }
    handleShow = () =>{
        this.setState ({...this.state,show:true});
    };
    handleClose = () =>{
        this.setState({...this.state,show:false});
    };

    clickUsers = (user) =>{
        this.setState({
            ...this.setState,
            nwUser:{
                name: user.name,
                email: user.email,
                gender: user.gender,
                status: user.status,
            },
        });
    };

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            nwUser : {
                ...this.state.nwUser,
                [e.target.name] : e.target.value,
            },
        });
    };

    updateUser = () =>{
        api.put(`/users/${this.props.user.id}`,this.state.nwUser)
        .then((response)=>{
            this.handleClose();
            this.props.success();
        })

    };
    deleteUser = (id) =>{
        api.delete(`/users/${id}`,{})
        .then((response)=>{
            this.props.success();
        });
    };

    
 
    render(){
        return(
        <div>
        
                <Table>
                    <thead>
                       <tr>
                        <th scope="col" style={{textAlign:"left"}}>
                            Name
                        </th>
                        <th scope="col" style={{textAlign:"left"}}>
                            {this.props.user.name}
                        </th>
                       </tr> 
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" style={{textAlign:"left"}}>
                            Email
                        </th>
                        <td style={{textAlign:"left"}}>
                            {this.props.user.email}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign:"left"}}>
                            Gender
                        </th>
                        <td style={{textAlign:"left"}}>
                            {this.props.user.gender}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign:"left"}}>
                            Status
                        </th>
                        <td style={{textAlign:"left"}}>
                            {this.props.user.status}
                        </td>
                    </tr>

                    </tbody>
                </Table>
                <div className="buttonss">
                <Button  className="btn-cls" variant="info"  > 
                    <Link style={{textDecorationLine:"none",color:"white"}} to={`/public/v2/users/${this.props.user.id}/posts`}>
                        Posts
                    </Link>
                </Button>
                <Button variant="info" className="btn-cls"  >
                    <Link  style={{textDecorationLine:"none",color:"white"}} to={`/public/v2/users/${this.props.user.id}/todos`}>
                        Todos
                    </Link>
                </Button>
                <Button variant="outline-primary"  onClick={(id)=>{
                    this.handleShow(id);
                    this.clickUsers(this.props.user);
                }}>
                    Update User
                </Button>
                <Button variant="danger" onClick={() =>{
                    const alert = window.confirm("User will be deleted !");
                    if(alert){
                        this.deleteUser(this.props.user.id);
                    }
                }}>
                  Delete
                </Button>
                </div>
        
          <ModalClass show={this.state.show} onHide={this.handleClose} nwUser={this.state.nwUser} onChange={this.handleInputChange} onSubmit={this.updateUser} >

          </ModalClass>
          </div>
          
        )
    }
    
}

export default withRouter(EachUser);