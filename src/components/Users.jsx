import React, {Component} from 'react'
import ModalClass from './ModalClass';
import api from '../AxiosApi/api';
import Search from './Search';
import EachUser from './EachUser';
import {Button } from 'react-bootstrap';

 class Users extends Component {
  constructor(props){
    super(props);
       this.state = {
        users: [],
        displayedUsers: [],
        search: "",
        nwUser: {
            id: "",
            name: "",
            email: "",
            gender: "",
            status: "",
       },
  };
  
}

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () =>{
    api.get("/users")
       .then((response) => {
        this.setState({
          users:response.data,
          displayedUsers:response.data,
        });
       })
  };
  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      nwUser:{
        ...this.state.nwUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleShow = () =>{
    this.setState({...this.state,show:true});
  }
  handleClose = () => {
    this.setState({ ...this.state, show: false });
  };

 

  handleSubmit = (e) => {
    e.preventDefault();
    api
        .post("/users", this.state.nwUser)
        .then((response) => {
            console.log(response.data);
            this.getUsers();
            this.setState({ ...this.state, show: false });
            this.setState({
                ...this.state,
                newUser: {
                    id: "",
                    name: "",
                    email: "",
                    gender: "",
                    status: "",
                },
              
            });
            this.handleClose();
        })
      };

      onSearch = (e) =>{
        this.setState({
          ...this.state,
          search:e.target.value,
        })
      };

      render(){
        const {search,displayedUsers} = this.state;
        const searchedUsers = displayedUsers.filter((searchedUser)=>
         searchedUser.name.toLowerCase().includes(search.toLowerCase())            
             );
        return(
          <>
            <div>
              <Button  variant="outline-primary" style={{marginTop:"10px"}} onClick={this.handleShow}>
                Add User
              </Button>

              <div className='d-flex' style={{marginLeft:"45%",marginBottom:"10px",marginTop:"30px"}}>
                <Search placeholder="Search By name" onSearch={this.onSearch} />
              </div>
              <div className='row'>
                {searchedUsers.map((user)=>(
                  <div className='col-md-4 col-xs-1 d-flex justify-content-center ' style={{marginTop:"40px"}} key={user.id}>
                  <EachUser user={user} success={this.getUsers} />
                  </div>
                ))}
            </div>
            <ModalClass show={this.state.show}
                    onHide={this.handleClose}
                    onchange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                    nwUser={this.state.nwUser} />
            </div>
            
          </>
        )
      }

}

export default Users;