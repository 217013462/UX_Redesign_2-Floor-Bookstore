import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/shoppingcartsomething.css"


const ShoppingCartSomething = () => {
  const navigate = useNavigate()

  const onCancelIconClick = useCallback(() => {
    navigate("/shopping-cart")
  }, [navigate])

  const onGroupContainer1Click = useCallback(() => {
    navigate("/book-detail")
  }, [navigate])

  const onClick1 = useCallback(() => {
    navigate("/shopping-cart-info")
  }, [navigate])
  
  const onClick2 = useCallback(() => {
    navigate("/")
  }, [navigate])
  
  return (
    <>
    <Container>

        <div className="shoppingcartsomething-div">
      <div className="group-div22">
        <div className="shopping-stage-div3">
          <div className="line-div6" />
          <div className="line-div7" />
          <div className="frame-div18">
            <div className="stage-1-div3">
              <img className="ellipse-icon9" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div89">1</div>
            </div>
            <div className="div90">購物車</div>
          </div>
          <div className="frame-div19">
            <div className="stage-1-div3">
              <img className="ellipse-icon9" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div91">2</div>
            </div>
            <div className="div92">填寫資料</div>
          </div>
          <div className="frame-div20">
            <div className="stage-1-div3">
              <img className="ellipse-icon9" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div93">3</div>
            </div>
            <div className="div92">訂單確認</div>
          </div>
        </div>
        <div className="cart-sub-header-div">
          <div className="div95">書籍詳情</div>
          <div className="div96">單本售價</div>
          <div className="div97">數量</div>
          <div className="div98">小計</div>
        </div>
        <div className="cart-header-div1">
          <div className="div95">購物車詳情</div>
          <div className="div100">(1件)</div>
        </div>
        <div className="cart-content-div1">
          <div className="hk12350-div2">HK$123.50</div>
          <div className="hk13000-div">HK$130.00</div>
          <div className="hk12350-div3">HK$123.50</div>
          <img
            className="cancel-icon"
            alt=""
            src="./img/shopping/cancel.svg"
            onClick={onCancelIconClick}
          />
          <div className="group-div23" onClick={onGroupContainer1Click}>
            <div className="the-tales-of-beedle-the-bard1">
              The Tales of Beedle the Bard
            </div>
            <div className="jk-rowling-div1">作者: J.K. Rowling</div>
            <div className="isbn9780747599876-div1">ISBN：9780747599876</div>
            <div className="x-148-x-15-cm1">
              規格：精裝 / 128頁 / 21 x 14.8 x 1.5 cm / 普通級 / 單色印刷 / 初版
            </div>
            <img
              className="book-cover-icon16"
              alt=""
              src="./img/shopping/book-cover15@2x.png"
            />
          </div>
          <div style={{width: '60px'}}>
          <Form.Select className="drop-down" style={{width: '60px'}} size="sm">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
          </div>
        </div>
        <div className="group-div24">
          <b className="b2">總計</b>
          <b className="hk12350-b1">HK$123.50</b>
        </div>
        <Button
          className="buttonsprimary2"
          variant="primary"
          onClick={onClick1}
        >
          結賬
        </Button>
        <Button
          className="buttonsprimary3"
          variant="secondary"
          onClick={onClick2}
        >
          繼續購物
        </Button>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default ShoppingCartSomething