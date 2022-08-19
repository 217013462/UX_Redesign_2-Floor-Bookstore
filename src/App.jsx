import React, { useCallback } from 'react'
import { Navbar, Nav, NavDropdown, Container, Dropdown, NavItem, NavLink, Row, Col, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import BestSelling from './components/BestSelling'
import HotDeal from './components/HotDeal'
import NewRelease from './components/NewRelease'
import Member from './components/Member'
import FAQ from './components/FAQ'
import BookDetail from './components/BookDetail'
import BusinessFinance from './components/BusinessFinance'
import BusinessFinanceBiography from './components/BusinessFinanceBiography'
import ContactUs from './components/ContactUs'
import Fiction1 from './components/Fiction1'
import Fiction2 from './components/Fiction2'
import Fiction3 from './components/Fiction3'
import FictionChinese from './components/FictionChinese'
import FictionTranslate from './components/FictionTranslate'
import MemberMyAccount from './components/MemberMyAccount'
import Search from './components/Search'
import SearchNoResult from './components/SearchNoResult'
import SearchSentForm from './components/SearchSentForm'
import ShoppingCartConfirmation from './components/ShoppingCartConfirmation'
import ShoppingCartInfo from './components/ShoppingCartInfo'
import ShoppingCartNothing from './components/ShoppingCartNothing'
import ShoppingCartSomething from './components/ShoppingCartSomething'


export default function App() {

  const navigate = useNavigate()

  const onClick1 = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  const onClick2 = useCallback(() => {
    navigate("/business-finance")
  }, [navigate])
  
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>

          <Navbar.Brand><Link to="/" className="nav-link"><i className="fas fa-book-open"></i> 2-FLOOR</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><div className="nav-link">書籍分類</div></Nav.Link>
              <div className="nav-link">
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink} />
                  <Dropdown.Menu className="large-dropdown-menu">
                    <div className="dropdown-menu-wrapper" style={{ textAlign: "center" }}>
                      <div>
                        <ul>
                          <li><NavDropdown.Item><div onClick={onClick1}>文學小說</div></NavDropdown.Item></li>
                          <li><NavDropdown.Item><div onClick={onClick2}>商業理財</div></NavDropdown.Item></li>
                          <li><NavDropdown.Item>藝術設計</NavDropdown.Item></li>
                          <li><NavDropdown.Item>人文史地</NavDropdown.Item></li>
                          <li><NavDropdown.Item>社會科學</NavDropdown.Item></li>
                          <li><NavDropdown.Item>自然科普</NavDropdown.Item></li>
                          <li><NavDropdown.Item>心理勵志</NavDropdown.Item></li>
                          <li><NavDropdown.Item>醫療保健</NavDropdown.Item></li>
                          <li><NavDropdown.Item>飲　　食</NavDropdown.Item></li>
                          <li><NavDropdown.Item>生活風格</NavDropdown.Item></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li><NavDropdown.Item>旅　　遊</NavDropdown.Item></li>
                          <li><NavDropdown.Item>宗教命理</NavDropdown.Item></li>
                          <li><NavDropdown.Item>親子教養</NavDropdown.Item></li>
                          <li><NavDropdown.Item>少年讀物</NavDropdown.Item></li>
                          <li><NavDropdown.Item>輕 小 說</NavDropdown.Item></li>
                          <li><NavDropdown.Item>漫　　畫</NavDropdown.Item></li>
                          <li><NavDropdown.Item>語言學習</NavDropdown.Item></li>
                          <li><NavDropdown.Item>考試用書</NavDropdown.Item></li>
                          <li><NavDropdown.Item>電腦資訊</NavDropdown.Item></li>
                          <li><NavDropdown.Item>專業書籍</NavDropdown.Item></li>
                        </ul>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Nav.Link><Link to="/best-selling" className="nav-link">暢銷書籍</Link></Nav.Link>
              <Nav.Link><Link to="/new-release" className="nav-link">新到書籍</Link></Nav.Link>
              <Nav.Link><Link to="/hot-deal" className="nav-link">最新優惠</Link></Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div class="searchbar">
                <input type="text" placeholder="搜尋書名 / 作者 / ISBN / 關鍵字" />
                <div class="icon">
                  <i class="fas fa-search"></i>
                </div></div>



              <Nav.Link><Link to="/shopping-cart" className="nav-link"><i className='fas fa-shopping-cart'></i></Link></Nav.Link>
              <Nav.Link><Link to="/member" className="nav-link"><i className='fas fa-user'></i></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/new-release" element={<NewRelease />} />
            <Route path="/hot-deal" element={<HotDeal />} />
            <Route path="/member" element={<Member />} />
            <Route path="/member-my-account" element={<MemberMyAccount />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/book-detail" element={<BookDetail />} />
            <Route path="/business-finance" element={<BusinessFinance />} />
            <Route path="/business-finance-biography" element={<BusinessFinanceBiography />} />
            <Route path="/fiction1" element={<Fiction1 />} />
            <Route path="/fiction2" element={<Fiction2 />} />
            <Route path="/fiction3" element={<Fiction3 />} />
            <Route path="/fiction-chinese" element={<FictionChinese />} />
            <Route path="/fiction-translate" element={<FictionTranslate />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search-no-result" element={<SearchNoResult />} />
            <Route path="/search-sent-form" element={<SearchSentForm />} />
            <Route path="/shopping-cart-confirmation" element={<ShoppingCartConfirmation />} />
            <Route path="/shopping-cart-info" element={<ShoppingCartInfo />} />
            <Route path="/shopping-cart-nothing" element={<ShoppingCartNothing />} />
            <Route path="/shopping-cart-something" element={<ShoppingCartSomething />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <Container>
          <Row>
            <Col xs={4} sm={4} md={4} className='text-center py-3'>
              <h6 className="text-primary"><b>獲取幫助</b></h6>
              <small><Link to="/faq" className="text-primary" style={{ textDecoration: "none" }}>常見問題</Link><br />
                <Link to="/contact-us" className="text-primary" style={{ textDecoration: "none" }}>聯絡我們</Link></small>
            </Col>
            <Col xs={4} sm={4} md={4} className='text-center py-3'>
              <h6 className="text-primary"><b>關注我們</b></h6>
              <p className="text-primary"><i className="fa-brands fa-square-facebook"></i>&nbsp;
                <i className="fa-brands fa-square-instagram"></i></p>
            </Col>
            <Col xs={4} sm={4} md={4} className='text-center py-3'>
              <h6 className="text-primary"><b>付款方式</b></h6>
              <p className="text-primary"><i className="fa-brands fa-cc-visa"></i>&nbsp;
                <i className="fa-brands fa-cc-mastercard"></i>&nbsp;
                <i className="fa-brands fa-cc-paypal"></i></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}