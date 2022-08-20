import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom"
import "../css/shoppingcartconfirmation.css"

const ShoppingCartConfirmation = () => {
  const navigate = useNavigate()
  
  const onClick1 = useCallback(() => {
    navigate("/")
  }, [navigate])

  return (
    <>
    <Container>

        <div className="shoppingcartcofirmation-div">
      <div className="group-div16">
        <div className="shopping-stage-div">
          <div className="line-div" />
          <div className="line-div1" />
          <div className="frame-div">
            <div className="stage-1-div">
              <img className="ellipse-icon" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div54">1</div>
            </div>
            <div className="div55">購物車</div>
          </div>
          <div className="frame-div1">
            <div className="stage-1-div">
              <img className="ellipse-icon" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div56">2</div>
            </div>
            <div className="div55">填寫資料</div>
          </div>
          <div className="frame-div2">
            <div className="stage-1-div">
              <img className="ellipse-icon" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div58">3</div>
            </div>
            <div className="div59">訂單確認</div>
          </div>
        </div>
        <div className="frame-div3">
          <div className="frame-div4">
            <div className="frame-div5">
              <div className="frame-div6">
                <div className="frame-div6">
                  <div className="shopping-stage-div1">
                    <div className="line-div" />
                    <div className="line-div3" />
                    <div className="frame-div">
                      <div className="stage-1-div">
                        <img
                          className="ellipse-icon"
                          alt=""
                          src="./img/shopping/ellipse-1.svg"
                        />
                        <div className="div54">1</div>
                      </div>
                      <div className="div55">購物車</div>
                    </div>
                    <div className="frame-div1">
                      <div className="stage-1-div">
                        <img
                          className="ellipse-icon"
                          alt=""
                          src="./img/shopping/ellipse-1.svg"
                        />
                        <div className="div56">2</div>
                      </div>
                      <div className="div55">填寫資料</div>
                    </div>
                    <div className="frame-div10">
                      <div className="stage-1-div">
                        <img
                          className="ellipse-icon"
                          alt=""
                          src="./img/shopping/ellipse-1.svg"
                        />
                        <div className="div58">3</div>
                      </div>
                      <div className="div55">訂單確認</div>
                    </div>
                  </div>
                  <div className="frame-div11">
                    <div className="frame-div12">
                      <img
                        className="icon-check-circle"
                        alt=""
                        src="./img/shopping/iconcheckcircle.svg"
                      />
                      <div className="frame-div13">
                        <b className="b">謝謝你的訂單</b>
                        <div className="div66">訂單編號: 0147258369</div>
                        <div className="div67">
                          確認訂單的電郵已傳送至你的電郵
                        </div>
                      </div>
                    </div>
                    <div className="div68">
                      你將會在貨品發貨後收到貨品追蹤通知，如有任何問題歡迎聯絡我們
                    </div>
                  </div>
                </div>
                <div className="group-div17">
                  <div className="cart-header-div">
                    <div className="div69">書籍詳情</div>
                    <div className="div70">單本售價</div>
                    <div className="div71">數量</div>
                    <div className="div72">小計</div>
                  </div>
                  <div className="cart-content-div">
                    <div className="the-tales-of-beedle-the-bard">
                      The Tales of Beedle the Bard
                    </div>
                    <div className="jk-rowling-div">作者: J.K. Rowling</div>
                    <div className="isbn9780747599876-div">
                      ISBN：9780747599876
                    </div>
                    <div className="x-148-x-15-cm">
                      規格：精裝 / 128頁 / 21 x 14.8 x 1.5 cm / 普通級 /
                      單色印刷 / 初版
                    </div>
                    <div className="hk12350-div">HK$123.50</div>
                    <div className="div73">1</div>
                    <div className="hk12350-div1">HK$123.50</div>
                    <img
                      className="book-cover-icon15"
                      alt=""
                      src="./img/shopping/book-cover15@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="group-div18">
                <b className="b1">總計</b>
                <b className="hk12350-b">HK$123.50</b>
              </div>
            </div>
            <div className="frame-div14">
              <div className="group-div19">
                <div className="customer-header-div">
                  <div className="div69">送貨詳情</div>
                </div>
                <div className="customer-info-div">
                  <div className="ux-design-student">
                    <span>收貨人名稱　</span>
                    <b>UX Design student</b>
                  </div>
                  <div className="div75">
                    <span>收貨地址　</span>
                    <b>香港柴灣盛泰道30號</b>
                  </div>
                  <div className="div76">
                    <span>收貨人聯絡電話　</span>
                    <b>2123 6789</b>
                  </div>
                </div>
              </div>
              <div className="group-div19">
                <div className="customer-header-div">
                  <div className="div69">付款方式</div>
                </div>
                <div className="customer-info-div">
                  <div className="div78">信用卡</div>
                  <b className="xxxx-xxxx-xxxx-1234-b">XXXX-XXXX-XXXX-1234</b>
                </div>
              </div>
            </div>
          </div>
          <Button className="buttonsprimary" variant="primary" onClick={onClick1}>
            繼續購物
          </Button>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default ShoppingCartConfirmation