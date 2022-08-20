import { useCallback, useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { message } from 'antd'
import "../css/bookdetail.css"

const BookDetail = () => {
  const navigate = useNavigate()

  const onText7Click = useCallback(() => {
    navigate("/search")
  }, [navigate])

  const onClickToCart = useCallback(() => {
    navigate("/shopping-cart-something")
  }, [navigate])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const successAdd = () => {
  message.success('成功加入願望清單')}
  
  return (
    <>
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div style={{color: "#4A9715", fontSize:"large"}}><i class="fa-solid fa-circle-check"></i>成功加入購物車</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>購物車內共有 <b style={{color: "#CF2A2A"}}>1</b> 件貨品<br/>
          總計<b style={{color: "#CF2A2A"}}> 123.5 </b>元</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            繼續購物
          </Button>
          <Button variant="primary" onClick={onClickToCart}>
            查看購物車
          </Button>
        </Modal.Footer>
      </Modal>
    <div className="bookdetail-div">
      <div className="group-div30">
        <div className="group-div31">
          <Button className="add-to-cart" variant="primary" onClick={handleShow}>
            加入購物車
          </Button>
          <Button className="add-to-cart1" variant="outline-info" onClick={successAdd}>
            加入願望清單
          </Button>
          <div className="book-intro-div15">
            <div className="div130">
              <span className="txt-span14">
                <span>{`原價 : `}</span>
                <span className="span13">130.00</span>
                <span> 元</span>
              </span>
            </div>
            <div className="div131">特價 : 95 折 123.5 元</div>
            <div className="div132">發行日 : 2008年12月04日</div>
            <div className="isbn9780747599876-div2">ISBN：9780747599876</div>
            <div className="div133">出版地：英國</div>
            <div className="x-148-x-15-cm2">
              規格：精裝 / 128頁 / 21 x 14.8 x 1.5 cm / 普通級 / 單色印刷 / 初版
            </div>
            <div className="bloomsbury-publishing-div">
              出版社 : Bloomsbury Publishing
            </div>
            <div className="jk-rowling-div2">作者: J.K. Rowling</div>
            <div className="the-tales-of-beedle-the-bard2">
              The Tales of Beedle the Bard
            </div>
          </div>
          <img className="book-cover-icon17" alt="" src="./img/bookdetail/book-cover17@2x.png" />
        </div>
        <div className="content-div">
          <div className="div134">同類書籍推薦</div>
          <div className="book-content-div">
            <div className="div134">內容簡介</div>
            <div className="jk-div">
              <p className="blank-line-p">內容本書為精裝，英國版。</p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">魔法界最著名的童話書！</p>
              <p className="blank-line-p">打敗佛地魔的關鍵線索！</p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                妙麗親筆翻譯＋J.K.羅琳手繪插圖＋鄧不利多獨家註解！
              </p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                《吟遊詩人皮陀故事集》是魔法世界最著名的童話故事書，也是阿不思．鄧不利多留給妙麗．格蘭傑的遺物，其中更包含了哈利波特的最後任務，也就是毀滅佛地魔分靈體的關鍵線索。五篇故事中只有〈三兄弟的故事〉的內容曾在《哈利波特》第七集《死神的聖物》中出現，其餘四篇〈幸運泉〉、〈魔法師的毛茸茸心臟〉、〈巫師與跳跳鍋〉以及〈巴比兔迪迪和咯咯笑樹樁〉則都是直到現在才首次曝光。
              </p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                這次推出的新版本，是由妙麗．格蘭傑翻譯自古代神秘文字的原版故事，並配上J.K.羅琳親手繪製的插圖，同時還有經由霍格華茲校長檔案室慷慨許可後所加入的鄧不利多教授對這些故事所作的獨到註解，相信所有巫師和麻瓜們都能樂在其中。
              </p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                本書的所有盈餘都將捐贈予Children’s High Level Group。
              </p>
              <p className="childrens-high-level1">
                Children’s High Level
                Group（CHLG）為兒童爭取權利，改善無助年輕人的生活。
              </p>
            </div>
          </div>
          <div className="book-content-div1">
            <div className="div134">作者簡介</div>
            <div className="jk-div">
              <p className="blank-line-p">J.K.羅琳（J.K. Rowling）</p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                從靠領政府救濟金度日、與女兒相依為命的單親媽媽，在《哈利波特》系列風靡全球後，一躍成為全世界最家喻戶曉、最會說故事的魔法媽媽！
              </p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="blank-line-p">
                《哈利波特》系列的銷量在全世界已超過四億本，並且也為羅琳贏得了無數榮譽，包括：大不列顛年度最佳作者暨最佳童書、史馬堤書卷獎金牌、惠特比最佳童書獎、英國書商協會年度最佳作者、美國圖書館協會傑出童書獎、英國最佳暢銷書白金獎、出版家週刊年度最佳好書獎、蘇格蘭藝術會議年度最佳童書獎，以及英國女王頒發的英國皇室傑出勛章等。她並被《時代》雜誌選為年度風雲人物，以及被美國《富比世》雜誌選為英國最具影響的女性。
              </p>
              <p className="blank-line-p">&nbsp;</p>
              <p className="childrens-high-level1">
                目前她和大女兒潔西卡、兒子大衛、小女兒麥肯琪，以及第二任丈夫尼爾．墨瑞定居於英國愛丁堡。
              </p>
            </div>
          </div>
          <div className="div137" onClick={onText7Click}>{`<< 返回上一頁`}</div>
          <div className="books-group-11">
            <div className="book-intro-div16">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">88.00</span>
                </span>
              </div>
              <div className="div139">優惠價$83.60</div>
              <div className="group-div32">
                <div className="div140">Quidditch Through the Ages</div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover18@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div17">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">325.00</span>
                </span>
              </div>
              <div className="div139">優惠價$292.50</div>
              <div className="group-div32">
                <div className="div140">
                  Fantastic Beasts and Where to Find Them
                </div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover19@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div18">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">146.00</span>
                </span>
              </div>
              <div className="div139">優惠價$138.70</div>
              <div className="group-div34">
                <div className="div140">
                  Harry Potter and the Prisoner of Azkaban
                </div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover20@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div19">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">165.00</span>
                </span>
              </div>
              <div className="div139">優惠價$140.25</div>
              <div className="group-div34">
                <div className="div140">
                  Harry Potter and the Half-Blood Prince
                </div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover21@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div20">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">105.00</span>
                </span>
              </div>
              <div className="div139">優惠價$99.75</div>
              <div className="group-div34">
                <div className="div140">
                  Harry Potter and the Philosopher’s Stone
                </div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover22@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div21">
              <div className="div138">
                <span className="txt-span14">
                  $<span className="span14">146.00</span>
                </span>
              </div>
              <div className="div139">優惠價$124.10</div>
              <div className="group-div34">
                <div className="div140">
                  Harry Potter and the Chamber of Secrets
                </div>
                <img
                  className="book-cover-icon18"
                  alt=""
                  src="./img/bookdetail/book-cover23@2x.png"
                />
              </div>
              <Button className="buttondefault17" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default BookDetail