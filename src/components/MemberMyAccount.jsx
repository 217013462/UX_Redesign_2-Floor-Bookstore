import { Container } from "react-bootstrap"
import "../css/membermyaccount.css"

const MemberMyAccount = () => {
  
  return (
    <>
    <Container>

    <div className="membermyaccount-div">
      <div className="group-div26">
        <div className="div108">會員專區</div>
        <div className="wishlist-div">
          <div className="boxdefault-div" />
          <img className="wishlist-icon" alt="" src="./img/membermyaccount/wishlist@2x.png" />
          <div className="div109">願望清單</div>
          <div className="div110">檢視、修改或建立新的清單</div>
        </div>
        <div className="order-div">
          <div className="boxdefault-div" />
          <img className="wishlist-icon" alt="" src="./img/membermyaccount/box@2x.png" />
          <div className="div109">訂單紀錄</div>
          <div className="div110">查看你的訂單、追蹤或退貨</div>
        </div>
        <div className="coupon-div">
          <div className="boxdefault-div" />
          <img className="wishlist-icon" alt="" src="./img/membermyaccount/promocode@2x.png" />
          <div className="div109">二樓書券</div>
          <div className="div110">檢視你的書券餘額或增值</div>
        </div>
        <div className="payment-div">
          <div className="boxdefault-div" />
          <img className="credit-card-icon" alt="" src="./img/membermyaccount/creditcard@2x.png" />
          <div className="div115">付款方式</div>
          <div className="div116">管理你的送貨地址</div>
        </div>
        <div className="shipping-div">
          <div className="boxdefault-div" />
          <img className="wishlist-icon" alt="" src="./img/membermyaccount/fastdelivery-1@2x.png" />
          <div className="div109">送貨地址</div>
          <div className="div110">管理你的送貨地址</div>
        </div>
        <div className="user-div">
          <div className="boxdefault-div" />
          <img className="wishlist-icon" alt="" src="./img/membermyaccount/user@2x.png" />
          <div className="div109">個人資料</div>
          <div className="div110">更改你的個人資料或密碼</div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default MemberMyAccount