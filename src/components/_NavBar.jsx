import { Navbar, Nav, NavDropdown, Container, Dropdown, NavItem, NavLink} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/"><i className="fas fa-book-open"></i> 2-FLOOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#book-cat">書籍分類</Nav.Link>
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper" style={{textAlign: "center"}}>
                    <div>
                      <ul>
                          <li><NavDropdown.Item href="#book01">文學小說</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book02">商業理財</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book03">藝術設計</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book04">人文史地</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book05">社會科學</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book06">自然科普</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book07">心理勵志</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book08">醫療保健</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book09">飲　　食</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book10">生活風格</NavDropdown.Item></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                          <li><NavDropdown.Item href="#book11">旅　　遊</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book12">宗教命理</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book13">親子教養</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book14">少年讀物</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book15">輕 小 說</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book16">漫　　畫</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book17">語言學習</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book18">考試用書</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book19">電腦資訊</NavDropdown.Item></li>
                          <li><NavDropdown.Item href="#book20">專業書籍</NavDropdown.Item></li>
                      </ul>
                    </div>
                  </div>
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/best-selling">暢銷書籍</Nav.Link>
            <Nav.Link href="/new-release">新到書籍</Nav.Link>
            <Nav.Link href="/hot-deal">最新優惠</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/shopping-cart"><i className='fas fa-shopping-cart'></i></Nav.Link>
            <Nav.Link href="/member"><i className='fas fa-user'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar