import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/hotdeal.css"

const HotDeal = () => {
  return (
    <>
    <Container>
    <div className="hotdeal-div">
      <div className="daily-hot-deals">
        <b className="b22">最新優惠</b>
        <div className="div936">
          <span className="txt-span201">
            <p className="p169">每日限時優惠</p>
            <p className="p169">精選十二本特選書籍</p>
            <p className="p171">優惠低至半價</p>
          </span>
        </div>
        <img
          className="dontmissthis-1-icon"
          alt=""
          src="./img/hotdeal/dontmissthis-1@2x.png"
        />
        <div className="books-group-12">
          <div className="book-intro-div162">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">133</span>
              </span>
            </div>
            <div className="div938">優惠價$93.10</div>
            <div className="group-div191">
              <div className="div939">北海道親子遊</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover5@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div163">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">87.00</span>
              </span>
            </div>
            <div className="div938">優惠價$57.50</div>
            <div className="group-div191">
              <div className="div939">30天，世界玩一圈！</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover6@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div164">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">100.00</span>
              </span>
            </div>
            <div className="div938">優惠價$65.00</div>
            <div className="group-div191">
              <div className="div939">
                <span className="txt-span201">
                  <p className="p169">福爾摩斯先生收III：</p>
                  <p className="p171">來自台灣的委託</p>
                </span>
              </div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover7@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div165">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">140.00</span>
              </span>
            </div>
            <div className="div938">優惠價$91.00</div>
            <div className="group-div191">
              <div className="div939">攝影本事</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover8@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div166">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">107.00</span>
              </span>
            </div>
            <div className="div938">優惠價$58.85</div>
            <div className="group-div191">
              <div className="div939">愛的69種玩法III：微醺</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover9@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div167">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">127.00</span>
              </span>
            </div>
            <div className="div938">優惠價$88.90</div>
            <div className="group-div191">
              <div className="div939">你的IDEA蠢斃了！</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover179@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-13">
          <div className="book-intro-div162">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">102.00</span>
              </span>
            </div>
            <div className="div938">優惠價$61.20</div>
            <div className="group-div191">
              <div className="div939">女孩的露營派對</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover180@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div163">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">60.00</span>
              </span>
            </div>
            <div className="div938">優惠價$36.00</div>
            <div className="group-div191">
              <div className="div939">怎麼連結</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover181@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div164">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">133.00</span>
              </span>
            </div>
            <div className="div938">優惠價$86.45</div>
            <div className="group-div191">
              <div className="div939">烤雞的50道陰影</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover182@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div165">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">160.00</span>
              </span>
            </div>
            <div className="div938">優惠價$88.00</div>
            <div className="group-div191">
              <div className="div939">登出鍵</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover183@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div166">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">117.00</span>
              </span>
            </div>
            <div className="div938">優惠價$64.35</div>
            <div className="group-div191">
              <div className="div939">新日檢完勝500題N2</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover184@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div167">
            <div className="div937">
              <span className="txt-span201">
                $<span className="span229">133.00</span>
              </span>
            </div>
            <div className="div938">優惠價$65.50</div>
            <div className="group-div191">
              <div className="div939">極簡風手縫皮革</div>
              <img
                className="book-cover-icon174"
                alt=""
                src="./img/hotdeal/book-cover185@2x.png"
              />
            </div>
            <Button className="buttondefault173" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default HotDeal