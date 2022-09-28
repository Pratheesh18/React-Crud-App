import React from 'react';
import {Form} from 'react-bootstrap';

export default function Search({placeholder,onSearch}){
   return(
    <Form className='d-flex'>
        <Form.Control type="search" placeholder={placeholder} onChange={onSearch}>
            
        </Form.Control>
    </Form>
   )
}