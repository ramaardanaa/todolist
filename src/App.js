import Home from './pages/Home'
import { Navbar, Nav } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todo App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
        </Nav>
      </Navbar>
      <Home/>
    </Provider>
  );
}

export default App;
