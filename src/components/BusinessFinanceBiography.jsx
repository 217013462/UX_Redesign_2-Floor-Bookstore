import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/businessfinancebiography.css"

const BusinessFinanceBiography = () => {
  const navigate = useNavigate()

  const onText18Click = useCallback(() => {
    navigate("/best-selling")
  }, [navigate])

  const onLink1Click = useCallback(() => {
    navigate("/business-finance")
  }, [navigate])
  
  return (
    <>
    <Container>

    <div className="businessfinancebiography-div">
      <div className="business-finance">
        <div className="fiction-div">
          <div className="fiction-menu-div">
            <div className="categorymenu-div">
              <b className="b15">分類</b>
              <div className="div217">
                <div className="div218">傳記</div>
              </div>
            </div>
            <div className="div219">
              <div className="div218">管理與領導</div>
            </div>
            <div className="div221">
              <div className="div218">職場工作術</div>
            </div>
            <div className="div223">
              <div className="div218">行銷/廣告/業務</div>
            </div>
            <div className="div225">
              <div className="div218">經濟/趨勢</div>
            </div>
            <div className="div227">
              <div className="div218">會計/統計</div>
            </div>
            <div className="div229">
              <div className="div218">專技人員考試</div>
            </div>
            <div className="div231">
              <div className="div218">專業管理實務</div>
            </div>
            <div className="div233">
              <div className="div218">成功法</div>
            </div>
            <div className="div235">
              <div className="div218">電子商務</div>
            </div>
            <div className="div237">
              <div className="div218">投資理財</div>
            </div>
            <div className="div239">
              <div className="div218">金融證照</div>
            </div>
            <div className="div241">
              <div className="div242">同性愛小說</div>
            </div>
            <div className="div243">
              <div className="div218">羅曼史/言情小說</div>
            </div>
            <div className="div245">
              <div className="div218">歷史/武俠小說</div>
            </div>
            <div className="div247">
              <div className="div218">其他文學小說</div>
            </div>
          </div>
          <div className="all-fiction-div">
            <div className="div249">傳記</div>
            <div className="div250" onClick={onText18Click}>
              查看更多...
            </div>
            <div className="books-div2">
              <div className="book-intro-div22">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">120.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$102.00</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="x-p">勇氣X選擇</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover34@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div23">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">160.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$136.00</div>
                <div className="group-div44">
                  <div className="div253">成長與蛻變</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover35@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div24">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">127.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$107.95</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="x-p">喚醒沉睡的巨獅Grand Seiko</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover36@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div25">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">100.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$85.00</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="p91">與女兒的生命約定：</p>
                      <p className="x-p">{`葬儀百貨大亨李濂松用愛翻轉人生 `}</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover37@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div26">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">150.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$127.50</div>
                <div className="group-div44">
                  <div className="div253">跑鞋革命</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover38@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
            </div>
            <div className="books-div3">
              <div className="book-intro-div22">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">140.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$119.00</div>
                <div className="group-div44">
                  <div className="div253">翻轉未來的人</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover39@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div23">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">187.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$158.95</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="x-p">顛覆創新：我在通用的日子 史隆回憶錄</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover40@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div24">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">160.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$136.00</div>
                <div className="group-div44">
                  <div className="div253">
                    輝瑞登月任務：拯救人類的疫苗研發計畫
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover41@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div25">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">167.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$141.95</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91">{`疫苗先鋒: `}</p>
                      <p className="x-p">新冠疫苗的科學戰</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover42@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div26">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">173.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$147.05</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="x-p">傑夫．伊梅特</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover43@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
            </div>
            <div className="books-div4">
              <div className="book-intro-div22">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">173.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$147.05</div>
                <div className="group-div44">
                  <div className="div253">奇異衰敗學</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover44@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div23">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">150.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$127.50</div>
                <div className="group-div44">
                  <div className="div253">
                    樂高：小積木立大功，用玩具堆出財富帝國的秘訣
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover45@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div24">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">183.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$155.55</div>
                <div className="group-div44">
                  <div className="div253">
                    權力遊戲：馬斯克與特斯拉的世紀豪賭
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover46@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div25">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">267.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$226.95</div>
                <div className="group-div44">
                  <div className="div253">愛迪生傳</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover47@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div26">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">133.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$113.05</div>
                <div className="group-div44">
                  <div className="div253">龐氏風暴</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover48@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
            </div>
            <div className="books-div5">
              <div className="book-intro-div22">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">210.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$170.00</div>
                <div className="group-div44">
                  <div className="div253">貝佐斯新傳</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover49@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div23">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">217.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$184.45</div>
                <div className="group-div44">
                  <div className="div253">後臉書時代</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover50@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div24">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">140.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$119.00</div>
                <div className="group-div44">
                  <div className="div253">台積電為什麼神？</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover51@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div25">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">153.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$130.05</div>
                <div className="group-div44">
                  <div className="div253">
                    <span className="txt-span21">
                      <p className="p91"></p>
                      <p className="x-p">聲入Spotify</p>
                    </span>
                  </div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover52@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
              <div className="book-intro-div26">
                <div className="div251">
                  <span className="txt-span21">
                    $<span className="span89">107.00</span>
                  </span>
                </div>
                <div className="div252">優惠價$90.05</div>
                <div className="group-div44">
                  <div className="div253">改變世界的12星座大創業家</div>
                  <img
                    className="book-cover-icon34"
                    alt=""
                    src="./img/businessfinancebiography/book-cover53@2x.png"
                  />
                </div>
                <Button className="buttondefault33" variant="primary">
                  加入購物車
                </Button>
              </div>
            </div>
            <div className="group-div64">
              <div className="paginationnumbered-div">
                <div className="div311">1</div>
                <div className="div312">2</div>
                <div className="div313">3</div>
                <img
                  className="icons-arrow-drodpdown2"
                  alt=""
                  src="./img/businessfinancebiography/icons--arrowdrodpdown1.svg"
                />
                <img
                  className="icons-arrow-drodpdown3"
                  alt=""
                  src="./img/businessfinancebiography/icons--arrowdrodpdown3.svg"
                />
                <img className="active-icon1" alt="" src="./img/businessfinancebiography/active1.svg" />
              </div>
              <img className="group-icon2" alt="" src="./img/businessfinancebiography/group-17.svg" />
              <img className="group-icon3" alt="" src="./img/businessfinancebiography/group-18.svg" />
            </div>
          </div>
          <div className="sub-header-categorized">
            <div className="div314">商業理財</div>
            <div className="div315">{`> `}</div>
            <Link className="a1" to="/">
              主頁
            </Link>
            <div className="line-div10" />
            <div className="div316">{`> `}</div>
            <Link className="a2" to="/business-finance" onClick={onLink1Click}>
              商業理財
            </Link>
            <div className="div317">傳記</div>
          </div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default BusinessFinanceBiography