import React,{Component} from 'react';
import api from '../AxiosApi/api';
import {Modal,Button,Form} from 'react-bootstrap';
import Post from './Post';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

 class PostsUser extends Component{
    constructor(props){
        super(props);

        this.state ={
            id:this.props.match.params.id,
            posts:[],
            show:false,
            nwPost:{
                title:"",
                body:"",
            }
        }
    }

    componentDidMount(){
        this.getPostsofUser();
    }

    getPostsofUser = () =>{
        api.get(`/users/${this.state.id}/posts `)
           .then((response) => {
            this.setState({...this.state,posts:response.data});

           });
    };

    handleShow = () =>{
        this.setState({...this.state,show:true});
    };

    handleClose = () =>{
        this.setState({...this.state,show:false});
    }

    
    addNewPost = () =>{
        axios({
            method:"post",
            url:`https://gorest.co.in/public/v2/users/${this.state.id}/posts`,
            data:this.state.nwPost,
            headers:{
                Authorization:
                "Bearer 43157fce0d07e7f20855dde25fbb772a6078687c40c3d2734da25e50d18dd1d3",
                 "Content-Type": "application/json",
            },
        })
        .then((response) =>{
            this.getPostsofUser();
            this.setState({...this.state,show:false});

        });
    };



    render() {

        return(
            <>
                {this.state.show && (
                    <Modal show={true} onHide={() => {this.handleClose();}} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Add Post
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                             <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label> Title </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title" name="title" onChange={(e) =>{
                                        this.setState({
                                            ...this.state,
                                            nwPost:{
                                                ...this.state.nwPost,
                                                title:e.target.value,
                                            },
                                        });
                                    }} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label> Body </Form.Label>
                                    <Form.Control as="textarea" name="body" placeholder='Enter Body' onChange={(e) =>{
                                        this.setState({
                                            ...this.state,
                                            nwPost:{
                                                ...this.state.nwPost,
                                                body:e.target.value,
                                                
                                            }
                                        })
                                        
                                    }}/>
                                </Form.Group>
                             </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() =>{
                                this.handleClose();
                            }}> Close </Button>
                            <Button variant="primary" onClick={() => {
                                this.addNewPost();
                            }}>
                                Add New Post
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
                <Button variant="primary" style={{marginTop:"20px",marginBottom:"20px"}} onClick={() =>{
                    this.handleShow();
                }}> Create Post </Button>
              
                        <div className='container'>
                            <div className='row'>
                                {this.state.posts.map((post)=>(
                                    <Post key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                    
                
            </>
        )
    }
}

export default  withRouter(PostsUser);