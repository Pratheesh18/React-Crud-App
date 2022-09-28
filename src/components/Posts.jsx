import React , {Component} from 'react';
import api from '../AxiosApi/api';
import {Card} from 'react-bootstrap';

export default class Posts extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:[],
      nwPost:{
        title:"",
        body:"",
      },
    };
  }

componentDidMount(){
  this.getPosts();
}


getPosts = ()=>{
  api.get("/posts")
    .then((response) =>{
      this.setState({posts:response.data});
    })
}

render(){
  return(
    <div>
        <div className="container">
          

          <div className="row">
            {this.state.posts.map((post) => (
              <div className="col-md-5 mb-2" key={post.id}>
                <Card style={{ height: "26rem" }}>
                  <div className="card-body mb-3">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </div>
                  </Card>
                </div>
              
            ))}
          </div>
        </div>
        </div>
     
   
  )
}
}