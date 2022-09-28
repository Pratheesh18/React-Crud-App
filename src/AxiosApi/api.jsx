import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL:`https://gorest.co.in/public/v2`,
    headers:{
        Authorization:
        "Bearer 43157fce0d07e7f20855dde25fbb772a6078687c40c3d2734da25e50d18dd1d3",
         "Content-Type" : "application/json",
    },
});


export default api;
