import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.css'
// Route : 컴포넌트 이동
// Routes : URL 에 담겨있는 정보를 획득
// Link : 실제로 페이지를 이동, Link 위치의 컴포넌트를 뿌려줌
import {Route, Routes, Link} from "react-router-dom"

function AppNavbar() {
  return(
    <>
    <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">MuJinJang</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
              <Nav.Link><Link to={"/detail"}>Detail</Link></Nav.Link>
              <Nav.Link><Link to={"/cart"}>Cart</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Routing 정보를 모아두는 영역 */}
        {/* Spring 에서 사용하는 컨트롤러 역할 */}
        <Routes>
          <Route path="/" element={<div>메인페이지</div>} />
          <Route path="/detail" element={<div>상세페이지</div>} />
          <Route path="/cart" element={<div>장바구니페이지</div>} />
        </Routes>
      </div>
    </>
  )
}

export default AppNavbar;