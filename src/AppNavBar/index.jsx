import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.css'
// Route : 컴포넌트 이동
// Routes : URL 에 담겨있는 정보를 획득
// Link : 실제로 페이지를 이동, Link 위치의 컴포넌트를 뿌려줌
import {Link, useNavigate} from "react-router-dom"


function AppNavbar() {

  const navigate = useNavigate();

  return(
    <>
    <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">MuJinJang</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('detail')}}>Detail</Nav.Link>
              <Nav.Link onClick={()=>{navigate('cart')}}>Cart</Nav.Link>
              <Nav.Link onClick={()=>{navigate('about')}}>About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </div>
    </>
  )
}

export default AppNavbar;