import React,{useEffect} from 'react'
import {Home, AddTodo} from './pages'
import { Navbar, Nav } from 'react-bootstrap'
import {fetchTodo} from './store/action/todoAction'
import {useDispatch} from 'react-redux'
import {
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodo())
  },[])
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todo App</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="mx-2" to="/">Home</NavLink>
          <NavLink className="mx-2"  to="/add">Add Todo</NavLink>
        </Nav>
      </Navbar>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/add">
            <AddTodo/>
          </Route>
      </Switch>
    </>
  );
}

export default App;
