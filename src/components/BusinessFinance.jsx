import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom"
import "../css/businessfinance.css"

const BusinessFinance = () => {
  const navigate = useNavigate()

  const onText18Click = useCallback(() => {
    navigate("/best-selling")
  }, [navigate])

  const onClickBiography = useCallback(() => {
    navigate("/business-finance-biography")
  }, [navigate])

    return (
      <>
        <Container>

          <div className="businessfinance-div">
            <div className="business-finance1">
              <div className="fiction-div1">
                <div className="fiction-menu-div1">
                  <div className="categorymenu-div1">
                    <b className="b16">分類</b>
                    <div className="div318">
                      <div className="div319" onClick={onClickBiography}>傳記</div>
                    </div>
                  </div>
                  <div className="div320">
                    <div className="div319">管理與領導</div>
                  </div>
                  <div className="div322">
                    <div className="div319">職場工作術</div>
                  </div>
                  <div className="div324">
                    <div className="div319">行銷/廣告/業務</div>
                  </div>
                  <div className="div326">
                    <div className="div319">經濟/趨勢</div>
                  </div>
                  <div className="div328">
                    <div className="div319">會計/統計</div>
                  </div>
                  <div className="div330">
                    <div className="div319">專技人員考試</div>
                  </div>
                  <div className="div332">
                    <div className="div319">專業管理實務</div>
                  </div>
                  <div className="div334">
                    <div className="div319">成功法</div>
                  </div>
                  <div className="div336">
                    <div className="div319">電子商務</div>
                  </div>
                  <div className="div338">
                    <div className="div319">投資理財</div>
                  </div>
                  <div className="div340">
                    <div className="div319">金融證照</div>
                  </div>
                  <div className="div342">
                    <div className="div343">同性愛小說</div>
                  </div>
                  <div className="div344">
                    <div className="div319">羅曼史/言情小說</div>
                  </div>
                  <div className="div346">
                    <div className="div319">歷史/武俠小說</div>
                  </div>
                  <div className="div348">
                    <div className="div319">其他文學小說</div>
                  </div>
                </div>
                <div className="all-fiction-div1">
                  <div className="div350">所有商業理財</div>
                  <div className="div351" onClick={onText18Click}>
                    查看更多...
                  </div>
                  <div className="books-div6">
                    <div className="book-intro-div42">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">127.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$107.95</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">{`優勢創業：掌握5大重點，把你的優勢變成一門好生意 `}</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover54@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div43">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">150.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$127.50</div>
                      <div className="group-div65">
                        <div className="div354">Google地圖革命</div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover55@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div44">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">127.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$107.95</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">億萬社長高獲利經營術</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover56@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div45">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">140.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$119.00</div>
                      <div className="group-div65">
                        <div className="div354">
                          領導的起點：從心出發的50堂職場必修課
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover57@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div46">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">150.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$127.50</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">{`跟著大師做管理：十大管理聖經教你如何打造優質企業 `}</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover58@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                  </div>
                  <div className="books-div7">
                    <div className="book-intro-div42">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">127.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$107.95</div>
                      <div className="group-div65">
                        <div className="div354">UNITED ARROWS選品店天王</div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover59@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div43">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">130.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$110.50</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">
                              致勝思維：頂尖人士追求勝利，成就卓越的13道冠軍法則
                            </p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover60@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div44">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">160.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$136.00</div>
                      <div className="group-div65">
                        <div className="div354">
                          改變看錢心態，最快積累千萬資產的財務自由實踐版
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover61@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div45">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">117.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$99.45</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">月薪３萬也能買房的財富翻倍法</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover62@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div46">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">133.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$113.05</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">運動場上學到的9堂經濟學</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover63@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                  </div>
                  <div className="books-div8">
                    <div className="book-intro-div42">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">183.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$155.55</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">高成效習慣</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover64@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div43">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">150.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$127.50</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">
                              大開眼界：用社會裡的小故事開啟你的大見識
                            </p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover65@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div44">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">127.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$107.95</div>
                      <div className="group-div65">
                        <div className="div354">個人無限公司</div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover66@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div45">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">103.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$87.55</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">
                              一天工作6分鐘：世界級商業領袖教你用槓桿力，創造豐足與自由
                            </p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover67@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div46">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">117.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$105.30</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">創造致富祕訣</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover68@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                  </div>
                  <div className="books-div9">
                    <div className="book-intro-div42">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">160.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$136.00</div>
                      <div className="group-div65">
                        <div className="div354">
                          思想經濟學：當代136位精英的思想交鋒
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover69@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div43">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">120.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$102.00</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">
                              另我效應：用你的祕密人格，達到最高成就
                            </p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover70@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div44">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">330.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$280.50</div>
                      <div className="group-div65">
                        <div className="div354">{`初學美股投資一開始就上手 `}</div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover71@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div45">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">117.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$99.45</div>
                      <div className="group-div65">
                        <div className="div354">{`全世界有錢人都在做的財富倍增法 `}</div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover72@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                    <div className="book-intro-div46">
                      <div className="div352">
                        <span className="txt-span48">
                          $<span className="span109">167.00</span>
                        </span>
                      </div>
                      <div className="div353">優惠價$141.95</div>
                      <div className="group-div65">
                        <div className="div354">
                          <span className="txt-span48">
                            <p className="p103"></p>
                            <p className="p104">被動投資學</p>
                          </span>
                        </div>
                        <img
                          className="book-cover-icon54"
                          alt=""
                          src="./img/businessfinance/book-cover73@2x.png"
                        />
                      </div>
                      <Button className="buttondefault53" variant="primary">
                        加入購物車
                      </Button>
                    </div>
                  </div>
                  <div className="group-div85">
                    <div className="paginationnumbered-div1">
                      <div className="div412">1</div>
                      <div className="div413">2</div>
                      <div className="div414">3</div>
                      <img
                        className="icons-arrow-drodpdown4"
                        alt=""
                        src="./img/businessfinance/icons--arrowdrodpdown1.svg"
                      />
                      <img
                        className="icons-arrow-drodpdown5"
                        alt=""
                        src="./img/businessfinance/icons--arrowdrodpdown3.svg"
                      />
                      <img className="active-icon2" alt="" src="./img/businessfinance/active1.svg" />
                    </div>
                    <img className="group-icon4" alt="" src="./img/businessfinance/group-17.svg" />
                    <img className="group-icon5" alt="" src="./img/businessfinance/group-18.svg" />
                  </div>
                </div>
                <div className="sub-header-categorized1">
                  <div className="div415">商業理財</div>
                  <div className="div416">{`> `}</div>
                  <Link className="a3" to="/">
                    主頁
                  </Link>
                  <div className="line-div11" />
                  <div className="div417">商業理財</div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </>
    )
  }
                                    
export default BusinessFinance