import { useCallback } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../css/member.css"

const Member = () => {
  const navigate = useNavigate()

  const onButtonsPrimaryClick = useCallback(() => {
    navigate("/member-my-account")
  }, [navigate])
  
  return (
    <>
    <Container>

    <div className="member-div">
      <div className="group-div27">
        <div className="sign-in-div">
          <div className="div121">登入</div>
          <div className="div122">忘記密碼</div>
          <Form.Group className="input-text-fieldno-label">
            <Form.Control type="text" placeholder="電郵地址" />
          </Form.Group>
          <Form.Group className="password-formgroup">
            <Form.Control type="password" placeholder="密碼" />
          </Form.Group>
          <Button
            className="buttonsprimary4"
            variant="primary"
            onClick={onButtonsPrimaryClick}
          >
            登入
          </Button>
          <Form.Check
            className="checkboxall-states-formcheck"
            label="保持登入"
          />
        </div>
        <div className="sign-in-div1">
          <div className="div121">註冊</div>
          <Form.Group className="input-text-fieldno-label1">
            <Form.Control type="email" placeholder="電郵地址" />
          </Form.Group>
          <Form.Group className="input-text-fieldno-label2">
            <Form.Control type="text" placeholder="名字" />
          </Form.Group>
          <Form.Group className="password-formgroup1">
            <Form.Control type="text" defaultValue="密碼" />
            <Form.Text>至少8個字元</Form.Text>
          </Form.Group>
          <Button
            className="buttonsprimary5"
            variant="primary"
            onClick={onButtonsPrimaryClick}
          >
            加入成為二樓會員
          </Button>
          <Form.Check
            className="checkboxall-states-formcheck1"
            label="訂閱電郵與簡訊以獲得最新消息及優惠"
          />
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default Member