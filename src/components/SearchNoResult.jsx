import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/searchnoresult.css"

const SearchNoResult = () => {
  const navigate = useNavigate()

  const onButtonsPrimaryClick = useCallback(() => {
    navigate("/search-sent-form")
  }, [navigate])
  
  return (
    <>
    <Container>

      <div className="searchnoresult-div">
      <div className="group-div42">
        <div className="div160">搜尋結果</div>
        <div className="div161">
          <span>{`搜尋  “ `}</span>
          <span className="span24">J K Rowling New Book</span>
          <span>{` ”  一共找到  `}</span>
          <span className="span24">0</span>
          <span> 個結果 (0.36秒)</span>
        </div>
        <img
          className="book-hon-no-mushi-woman-1-icon1"
          alt=""
          src="./img/search/book-hon-no-mushi-woman-1@2x.png"
        />
        <div className="div162">
          <p className="p20">
            <span className="span26">{`對不起！在本店資料庫，找不到包含　“  `}</span>
            <span className="span27">J K Rowling New Book</span>
            <span> ”　的書，</span>
          </p>
          <p className="p21">
            <span>請填寫以下資料，讓我們為你盡快尋獲此書。</span>
          </p>
        </div>
        <div className="group-div43">
          <Button
            className="buttonsprimary7"
            variant="primary"
            onClick={onButtonsPrimaryClick}
          >
            送出
          </Button>
          <Form.Group className="input-text-fieldno-label11">
            <Form.Label>書名</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label12">
            <Form.Label>作者</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label13">
            <Form.Label>出版社</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label14">
            <Form.Label>ISBN</Form.Label>
            <Form.Control type="text" />
            <Form.Text style={{fontSize: "small"}}>請填上10/13位數</Form.Text>
          </Form.Group>
          <Form.Group className="input-text-fieldno-label15">
            <Form.Label>出版日期</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label16">
            <Form.Label>電郵</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label17">
            <Form.Label>名字</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default SearchNoResult