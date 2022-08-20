import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/fictionchinese.css"

const FictionChinese = () => {
  const navigate = useNavigate()

  const onLink1Click = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  const onClickTranslate = useCallback(() => {
    navigate("/fiction-translate")
  }, [navigate])

  const onClickChinese = useCallback(() => {
    navigate("/fiction-chinese")
  }, [navigate])
  
  return (
    <>
    <Container>

      <div className="fictionchinese-div">
      <div className="fiction-div2">
        <div className="fiction-menu-div2">
          <div className="categorymenu-div2">
            <b className="b17">分類</b>
            <div className="div418">
              <div className="div419" onClick={onClickTranslate}>翻譯文學</div>
            </div>
          </div>
          <div className="div420">
            <div className="div419" onClick={onClickChinese}>華文創作</div>
          </div>
          <div className="div422">
            <div className="div419">文學研究</div>
          </div>
          <div className="div424">
            <div className="div419">國學常識</div>
          </div>
          <div className="div426">
            <div className="div419">懸疑/推理小說</div>
          </div>
          <div className="div428">
            <div className="div419">恐怖/驚悚小說</div>
          </div>
          <div className="div430">
            <div className="div419">華文創作</div>
          </div>
          <div className="div432">
            <div className="div419">詩</div>
          </div>
          <div className="div434">
            <div className="div419">中國古典文學</div>
          </div>
          <div className="div436">
            <div className="div419">世界經典文學</div>
          </div>
          <div className="div438">
            <div className="div419">科幻/奇幻小說</div>
          </div>
          <div className="div440">
            <div className="div419">溫馨/療癒小說</div>
          </div>
          <div className="div442">
            <div className="div419">同性愛小說</div>
          </div>
          <div className="div444">
            <div className="div419">羅曼史/言情小說</div>
          </div>
          <div className="div446">
            <div className="div419">歷史/武俠小說</div>
          </div>
          <div className="div448">
            <div className="div419">其他文學小說</div>
          </div>
        </div>
        <div className="all-fiction-div2">
          <div className="div450">華文創作</div>
          <div className="books-div10">
            <div className="book-intro-div62">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">83.00</span>
                </span>
              </div>
              <div className="div453">優惠價$70.55</div>
              <div className="group-div86">
                <div className="div454">
                  <span className="txt-span80">
                    <p className="dear-p"></p>
                    <p className="p128">一個人的午夜場</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover74@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div63">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">160.00</span>
                </span>
              </div>
              <div className="div453">優惠價$144.00</div>
              <div className="group-div86">
                <div className="div454">圖解區塊鏈的工作原理與機制</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover75@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div64">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">133.00</span>
                </span>
              </div>
              <div className="div453">優惠價$113.05</div>
              <div className="group-div86">
                <div className="div454">
                  <span className="txt-span80">
                    <p className="dear-p">刺蝟讀書：</p>
                    <p className="p128">董啟章隨筆集二</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover76@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div65">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">127.00</span>
                </span>
              </div>
              <div className="div453">優惠價$107.95</div>
              <div className="group-div86">
                <div className="div454">
                  <span className="txt-span80">
                    <p className="dear-p">Dear小壯丁：</p>
                    <p className="p128">手牽手一起走</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover77@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div66">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">140.00</span>
                </span>
              </div>
              <div className="div453">優惠價$119.00</div>
              <div className="group-div86">
                <div className="div454">羊道：深山夏牧場</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover78@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div11">
            <div className="book-intro-div62">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">100.00</span>
                </span>
              </div>
              <div className="div453">優惠價$85.00</div>
              <div className="group-div86">
                <div className="div454">三分之一，的我</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover79@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div63">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">117.00</span>
                </span>
              </div>
              <div className="div453">優惠價$99.45</div>
              <div className="group-div86">
                <div className="div454">八十還年輕</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover80@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div64">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">127.00</span>
                </span>
              </div>
              <div className="div453">優惠價$107.95</div>
              <div className="group-div86">
                <div className="div454">遊樂場所</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover81@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div65">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">127.00</span>
                </span>
              </div>
              <div className="div453">優惠價$114.30</div>
              <div className="group-div86">
                <div className="div454">歡然奔路：大邱文集</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover82@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div66">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">140.00</span>
                </span>
              </div>
              <div className="div453">優惠價$119.00</div>
              <div className="group-div86">
                <div className="div454">
                  <span className="txt-span80">
                    <p className="dear-p"></p>
                    <p className="p128">樓上的好人</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover83@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div12">
            <div className="book-intro-div62">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">193.00</span>
                </span>
              </div>
              <div className="div453">優惠價$164.05</div>
              <div className="group-div86">
                <div className="div454">科學家</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover84@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div63">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">127.00</span>
                </span>
              </div>
              <div className="div453">優惠價$107.95</div>
              <div className="group-div86">
                <div className="div454">離騷未盡</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover85@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div64">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">160.00</span>
                </span>
              </div>
              <div className="div453">優惠價$136.00</div>
              <div className="group-div86">
                <div className="div454">漫長的紀念</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover86@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div65">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">98.00</span>
                </span>
              </div>
              <div className="div453">優惠價$88.20</div>
              <div className="group-div86">
                <div className="div454">拚命無恙</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover87@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div66">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">120.00</span>
                </span>
              </div>
              <div className="div453">優惠價$108.00</div>
              <div className="group-div86">
                <div className="div454">給大人看的非主流童話</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover88@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div13">
            <div className="book-intro-div62">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">107.00</span>
                </span>
              </div>
              <div className="div453">優惠價$90.95</div>
              <div className="group-div86">
                <div className="div454">
                  <span className="txt-span80">
                    <p className="dear-p"></p>
                    <p className="p128">共命鳥</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover89@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div63">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">117.00</span>
                </span>
              </div>
              <div className="div453">優惠價$99.45</div>
              <div className="group-div86">
                <div className="div454">中國文人盛事紀要五千年</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover90@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div64">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">140.00</span>
                </span>
              </div>
              <div className="div453">優惠價$119.00</div>
              <div className="group-div86">
                <div className="div454">山嵐之鐘</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover91@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div65">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">120.00</span>
                </span>
              </div>
              <div className="div453">優惠價$102.00</div>
              <div className="group-div86">
                <div className="div454">天堂旅行團</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover92@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div66">
              <div className="div452">
                <span className="txt-span80">
                  $<span className="span129">143.00</span>
                </span>
              </div>
              <div className="div453">優惠價$121.55</div>
              <div className="group-div86">
                <div className="div454">權力製造</div>
                <img
                  className="book-cover-icon74"
                  alt=""
                  src="./img/fictionchinese/book-cover93@2x.png"
                />
              </div>
              <Button className="buttondefault73" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="paginationnumbered-div2">
            <div className="div512">
              1
            </div>
            <div className="div513">
              2
            </div>
            <div className="div514">
              3
            </div>
            <img
              className="icons-arrow-drodpdown6"
              alt=""
              src="./img/fictionchinese/icons--arrowdrodpdown6.svg"
            />
            <img
              className="icons-arrow-drodpdown7"
              alt=""
              src="./img/fictionchinese/icons--arrowdrodpdown7.svg"
            />
            <img className="active-icon3" alt="" src="./img/fictionchinese/active1.svg" />
          </div>
        </div>
        <div className="sub-header-categorized2">
          <div className="div515">文學小說</div>
          <div className="div516">{`> `}</div>
          <Link className="a4" to="/">
            主頁
          </Link>
          <div className="line-div12" />
          <div className="div517">{`> `}</div>
          <Link className="a5" to="/fiction1" onClick={onLink1Click}>
            文學小說
          </Link>
          <div className="div518">華文創作</div>
        </div>
        <div className="group-div106">
          <div className="paginationnumbered-div3">
            <div className="div519">1</div>
            <div className="div513">
              2
            </div>
            <div className="div521">3</div>
            <img
              className="icons-arrow-drodpdown8"
              alt=""
              src="./img/fictionchinese/icons--arrowdrodpdown1.svg"
            />
            <img
              className="icons-arrow-drodpdown9"
              alt=""
              src="./img/fictionchinese/icons--arrowdrodpdown3.svg"
            />
            <img className="active-icon3" alt="" src="./img/fictionchinese/active1.svg" />
          </div>
          <img className="group-icon6" alt="" src="./img/fictionchinese/group-172.svg" />
          <img className="group-icon7" alt="" src="./img/fictionchinese/group-182.svg" />
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default FictionChinese