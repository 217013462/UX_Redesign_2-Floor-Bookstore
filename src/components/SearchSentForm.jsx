import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/searchsentform.css"

const SearchSentForm = () => {
  const navigate = useNavigate()

  const onText4Click = useCallback(() => {
    navigate("/")
  }, [navigate])
  
  return (
    <>
    <Container>

      <div className="searchsentform-div">
      <div className="group-div38">
        <div className="group-div39">
          <div className="div156">搜尋結果</div>
          <div className="div157">
            <span>{`搜尋  “ `}</span>
            <span className="span20">J K Rowling New Book</span>
            <span>{` ”  一共找到  `}</span>
            <span className="span20">0</span>
            <span> 個結果 (0.36秒)</span>
          </div>
          <img
            className="book-hon-no-mushi-woman-1-icon"
            alt=""
            src="./img/search/book-hon-no-mushi-woman-1@2x.png"
          />
          <div className="div158">
            <p className="p18">
              <span className="span22">{`對不起！在本店資料庫，找不到包含　“  `}</span>
              <span className="span23">J K Rowling New Book</span>
              <span> ”　的書，</span>
            </p>
            <p className="p19">
              <span>請填寫以下資料，讓我們為你盡快尋獲此書。</span>
            </p>
          </div>
          <div className="group-div40">
            <Button
              className="buttonsprimary6"
              variant="primary"
              disabled
            >
              送出
            </Button>
            <Form.Group className="input-text-fieldno-label3">
              <Form.Label>書名</Form.Label>
              <Form.Control
                type="text"
                defaultValue="J K Rowling New Book"
                readOnly
              />
            </Form.Group>
            <Form.Group className="input-text-fieldno-label4">
              <Form.Label>作者</Form.Label>
              <Form.Control type="text" defaultValue="JK Rowling" readOnly />
            </Form.Group>
            <Form.Group className="input-text-fieldno-label5">
              <Form.Label>出版社</Form.Label>
              <Form.Control type="text" defaultValue="ABC 出版社" readOnly />
            </Form.Group>
            <Form.Group className="input-text-fieldno-label6">
              <Form.Label>ISBN</Form.Label>
              <Form.Control type="text" defaultValue="1234567890" readOnly />
              <Form.Text style={{fontSize: "small"}}>請填上10/13位數</Form.Text>
            </Form.Group>
            <Form.Group className="input-text-fieldno-label7">
              <Form.Label>出版日期</Form.Label>
              <Form.Control type="text" readOnly />
            </Form.Group>
            <Form.Group className="input-text-fieldno-label8">
              <Form.Label>電郵</Form.Label>
              <Form.Control
                type="text"
                defaultValue="ux_demo@uxdesign.com"
                readOnly
              />
            </Form.Group>
            <Form.Group className="input-text-fieldno-label9">
              <Form.Label>名字</Form.Label>
              <Form.Control
                type="text"
                defaultValue="UX Design student"
                readOnly
              />
            </Form.Group>
          </div>
        </div>
        <div className="group-div41">
          <div className="div159">
            收到你的資料，我們會盡快為你尋找此書並與你聯絡。謝謝！
          </div>
          <b className="b4" onClick={onText4Click}>
            回到主頁
          </b>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default SearchSentForm