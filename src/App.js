import React from 'react';
import './App.css';
import {BrowserRouter  , Switch , Route} from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import NavBar from './components/NavBar';
import PostsUser from './components/PostsUser';
import TodosOfUser from './components/TodosOfUser';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Users />
          </Route>
        
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path = "/public/v2/users/:id/posts">
                <PostsUser />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path ="/public/v2/users/:id/todos">
            <TodosOfUser/>
          </Route>
       
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
