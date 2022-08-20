import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom"
import "../css/shoppingcartnothing.css"

const ShoppingCartNothing = () => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate("/")
  }, [navigate])
  
  return (
    <>
    <Container>

        <div className="shoppingcartnothing-div">
      <div className="group-div25">
        <div className="shopping-stage-div4">
          <div className="line-div8" />
          <div className="line-div9" />
          <div className="frame-div21">
            <div className="stage-1-div4">
              <img className="ellipse-icon12" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div101">1</div>
            </div>
            <div className="div102">購物車</div>
          </div>
          <div className="frame-div22">
            <div className="stage-1-div4">
              <img className="ellipse-icon12" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div103">2</div>
            </div>
            <div className="div104">填寫資料</div>
          </div>
          <div className="frame-div23">
            <div className="stage-1-div4">
              <img className="ellipse-icon12" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div105">3</div>
            </div>
            <div className="div104">訂單確認</div>
          </div>
        </div>
        <img className="shopping-cart-icon" alt="" src="./img/shopping/shopping-cart.svg" />
        <div className="div107">
          <p className="p1">
            <b>你的購物車是空的</b>
          </p>
          <p className="p2">
            <span>記得把書籍加入到你的購物車</span>
          </p>
        </div>
        <Button className="buttondefault15" variant="primary" onClick={onClick}>
          繼續購物
        </Button>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default ShoppingCartNothing