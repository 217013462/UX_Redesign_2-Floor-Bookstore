import { useCallback } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/contactus.css"

const ContactUs = () => {
  const navigate = useNavigate()

  const onText2Click = useCallback(() => {
    navigate("/faq")
  }, [navigate])
  
  return (
    <>
    <Container>

        <div className="contactus-div">
      <div className="group-div28">
        <div className="div124">
          <p className="p3">不想以表格跟我們聯絡？</p>
          <p className="p4">你亦可以使用以下方式跟我們聯繫。</p>
        </div>
        <Button className="buttondefault16" variant="primary" size="lg">
          送出
        </Button>
        <div className="group-div29">
          <div className="div125">
            <p className="p3">未能於常見問題中找到你想要的答案？</p>
            <p className="p4">
              請填寫以下表格提供你的資料及問題，我們會盡快回覆。
            </p>
          </div>
          <b className="b3" onClick={onText2Click}>
            常見問題
          </b>
        </div>
        <div className="div126">聯絡我們</div>
        <img className="mail-icon" alt="" src="./img/contactus/mail@2x.png" />
        <img className="whatsapp-icon" alt="" src="./img/contactus/whatsapp@2x.png" />
        <img
          className="telephone-call-icon"
          alt=""
          src="./img/contactus/telephonecall@2x.png"
        />
        <div className="whatsapp-66448238-div">WhatsApp: 66448238</div>
        <div className="div127">地址: 屯門建發街13號建發工業中心9樓9室</div>
        <div className="div128">
          <p className="p3">服務時間：</p>
          <p className="p3">星期一至五　　　　　　15:00 - 21:00</p>
          <p className="p3">星期六　　　　　　　　15:00 - 18:00</p>
          <p className="p4">星期日及公眾假期　　　休息</p>
        </div>
        <div className="e-mail-cs2-floorcom-div">E-mail: cs@2-floor.com</div>
        <div className="div129">聯絡電話: 24622277</div>
        <img className="location-1-icon" alt="" src="./img/contactus/location-1@2x.png" />
        <img
          className="customer-service-1-icon"
          alt=""
          src="./img/contactus/customerservice-1@2x.png"
        />
        <Form.Group className="inputstandard-formgroup">
          <Form.Label>名字：</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup1">
          <Form.Label>電郵：</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="textareastandard-formgroup">
          <Form.Label>訊息：</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default ContactUs