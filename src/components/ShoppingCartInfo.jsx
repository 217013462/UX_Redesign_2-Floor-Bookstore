import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom"
import "../css/shoppingcartinfo.css"

const ShoppingCartInfo = () => {
  const navigate = useNavigate()

  const onButtonsPrimaryClick = useCallback(() => {
    navigate("/shopping-cart-cofirmation")
  }, [navigate])
  
  return (
    <>
    <Container>

        <div className="shoppingcartinfo-div">
      <div className="group-div21">
        <div className="customer-header-div2">
          <div className="div79">顧客資料</div>
        </div>
        <div className="customer-header-div3">
          <div className="div79">送貨資料</div>
        </div>
        <div className="customer-header-div4">
          <div className="div79">付款方式</div>
        </div>
        <div className="customer-header-div5">
          <div className="div79">訂單備註</div>
        </div>
        <div className="customer-info-div2">
          <div className="customer-name-div">
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div" />
              <div className="placeholder-text-div">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div1" />
              <div className="placeholder-text-div1">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div2" />
              <div className="typing-div">Typing|</div>
            </div>
            <div className="default-div">
              <div className="label-div3">顧客名稱</div>
              <Form.Group className="field-formgroup">
                <Form.Control type="text" />
              </Form.Group>
              <div className="placeholder-text-div2">UX Demo</div>
            </div>
          </div>
          <div className="customer-name-div1">
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div" />
              <div className="placeholder-text-div">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div1" />
              <div className="placeholder-text-div1">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div2" />
              <div className="typing-div">Typing|</div>
            </div>
            <div className="default-div">
              <div className="label-div3">聯絡電話</div>
              <Form.Group className="field-formgroup">
                <Form.Control type="tel" />
              </Form.Group>
              <div className="placeholder-text-div5" />
            </div>
          </div>
          <div className="customer-email-div">電郵地址</div>
          <a
            className="customer-email"
            target="_blank"
          >
            ux_demo@uxdesign.com
          </a>
          <Form.Check
            className="checkboxlabelall-states-formcheck"
            label="儲存這個電話號碼"
          />
        </div>
        <div className="customer-info-div3">
          <div className="customer-name-div2">
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div" />
              <div className="placeholder-text-div">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div1" />
              <div className="placeholder-text-div1">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div2" />
              <div className="typing-div">Typing|</div>
            </div>
            <div className="default-div">
              <div className="label-div3">收件人名稱</div>
              <Form.Group className="field-formgroup">
                <Form.Control type="text" />
              </Form.Group>
              <div className="placeholder-text-div5" />
            </div>
          </div>
          <div className="customer-name-div3">
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div" />
              <div className="placeholder-text-div">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div1" />
              <div className="placeholder-text-div1">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div2" />
              <div className="typing-div">Typing|</div>
            </div>
            <div className="default-div">
              <div className="label-div3">收件人聯絡電話</div>
              <Form.Group className="field-formgroup">
                <Form.Control type="tel" />
              </Form.Group>
              <div className="placeholder-text-div5" />
            </div>
          </div>
          <div className="customer-name-div4">
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div" />
              <div className="placeholder-text-div">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div1" />
              <div className="placeholder-text-div1">Placeholder text...</div>
            </div>
            <div className="disabled-div">
              <div className="label-div">Label</div>
              <div className="field-div2" />
              <div className="typing-div">Typing|</div>
            </div>
            <div className="default-div">
              <div className="label-div3">送貨地址</div>
              <div className="field-div15" />
              <div className="placeholder-text-div14">地域</div>
            </div>
          </div>
          <Form.Check
            className="checkboxlabelall-states-formcheck1"
            label="收件人資料與顧客資料相同"
          />
          <Form.Check
            className="checkboxlabelall-states-formcheck2"
            label="儲存這個送貨地址"
          />
          <Form.Check
            className="checkboxlabelall-states-formcheck3"
            label="設定為預設地址"
          />
          <Form.Select className="dropdownno-labeldefault-formselect">
            <option>分區</option>
            <option value="中環">中環</option>
            <option value="半山區">半山區</option>
            <option value="西營盤">西營盤</option>
            <option value="上環">上環</option>
            <option value="堅尼地城">堅尼地城</option>
          </Form.Select>
          <Form.Select className="dropdownno-labeldefault-formselect1">
            <option>地區</option>
            <option value="中西區">中西區</option>
            <option value="灣仔">灣仔</option>
            <option value="東區">東區</option>
            <option value="南區">南區</option>
          </Form.Select>
          <Form.Select className="dropdownno-labeldefault-formselect2">
            <option>地域</option>
            <option value="香港島">香港島</option>
            <option value="九龍">九龍</option>
            <option value="新界">新界</option>
          </Form.Select>
          <Form.Group className="group-formgroup">
            <Form.Control type="text" placeholder="地址" />
          </Form.Group>
        </div>
        <div className="customer-info-div4">
          <Form.Select className="dropdownno-labeldefault-formselect3">
            <option value="信用卡">信用卡</option>
            <option value="PayPal">PayPal</option>
          </Form.Select>
        </div>
        <div className="customer-info-div5">
          <Form.Group className="group-formgroup1">
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="給二樓書店的留言／備註"
            />
          </Form.Group>
        </div>
        <div className="customer-info-div6">
          <Button
            className="buttonsprimary1"
            variant="primary"
            onClick={onButtonsPrimaryClick}
          >
            確認訂單
          </Button>
          <Link className="a" to="/shopping-cart-something">
            ＜　返回購物車
          </Link>
        </div>
        <div className="shopping-stage-div2">
          <div className="line-div4" />
          <div className="line-div5" />
          <div className="frame-div15">
            <div className="stage-1-div2">
              <img className="ellipse-icon6" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div83">1</div>
            </div>
            <div className="div84">購物車</div>
          </div>
          <div className="frame-div16">
            <div className="stage-1-div2">
              <img className="ellipse-icon6" alt="" src="./img/shopping/ellipse-1.svg" />
              <div className="div85">2</div>
            </div>
            <div className="div84">填寫資料</div>
          </div>
          <div className="frame-div17">
            <div className="stage-1-div2">
              <img className="ellipse-icon6" alt="" src="./img/shopping/ellipse-12.svg" />
              <div className="div87">3</div>
            </div>
            <div className="div88">訂單確認</div>
          </div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default ShoppingCartInfo