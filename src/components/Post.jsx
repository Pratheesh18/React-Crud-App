import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import './Post.css';

export default class Post extends Component {
    constructor(props){
        super(props);

        this.state ={};
    }
    render(){
        return(
            <>
                <div className='post'>
                   <Card>
                    <Card.Body>
                        <h4> {this.props.post.id} </h4>
                        <h4> {this.props.post.title} </h4>
                        <p> {this.props.post.body} </p>
                    </Card.Body>
                   </Card>
                </div>
            </>
        )
    }
}