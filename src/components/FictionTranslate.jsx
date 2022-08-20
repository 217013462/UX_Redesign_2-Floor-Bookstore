import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/fictiontranslate.css"

const FictionTranslate = () => {
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

      <div className="fictiontranslate-div">
      <div className="fiction-div3">
        <div className="fiction-menu-div3">
          <div className="categorymenu-div3">
            <b className="b18">分類</b>
            <div className="div522">
              <div className="div523" onClick={onClickTranslate}>翻譯文學</div>
            </div>
          </div>
          <div className="div524">
            <div className="div523" onClick={onClickChinese}>華文創作</div>
          </div>
          <div className="div526">
            <div className="div523">文學研究</div>
          </div>
          <div className="div528">
            <div className="div523">國學常識</div>
          </div>
          <div className="div530">
            <div className="div523">懸疑/推理小說</div>
          </div>
          <div className="div532">
            <div className="div523">恐怖/驚悚小說</div>
          </div>
          <div className="div534">
            <div className="div523">華文創作</div>
          </div>
          <div className="div536">
            <div className="div523">詩</div>
          </div>
          <div className="div538">
            <div className="div523">中國古典文學</div>
          </div>
          <div className="div540">
            <div className="div523">世界經典文學</div>
          </div>
          <div className="div542">
            <div className="div523">科幻/奇幻小說</div>
          </div>
          <div className="div544">
            <div className="div523">溫馨/療癒小說</div>
          </div>
          <div className="div546">
            <div className="div523">同性愛小說</div>
          </div>
          <div className="div548">
            <div className="div523">羅曼史/言情小說</div>
          </div>
          <div className="div550">
            <div className="div523">歷史/武俠小說</div>
          </div>
          <div className="div552">
            <div className="div523">其他文學小說</div>
          </div>
        </div>
        <div className="all-fiction-div3">
          <div className="div554">翻譯文學</div>

          <div className="books-div14">
            <div className="book-intro-div82">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">140.00</span>
                </span>
              </div>
              <div className="div557">優惠價$119.00</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">自轉公轉</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover94@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div83">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">127.00</span>
                </span>
              </div>
              <div className="div557">優惠價$107.95</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">尋歡作樂</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover95@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div84">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">127.00</span>
                </span>
              </div>
              <div className="div557">優惠價$107.95</div>
              <div className="group-div107">
                <div className="div558">如果我們無法以光速前進</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover96@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div85">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">117.00</span>
                </span>
              </div>
              <div className="div557">優惠價$99.45</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">貪婪之羊</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover97@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div86">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">160.00</span>
                </span>
              </div>
              <div className="div557">優惠價$136.00</div>
              <div className="group-div107">
                <div className="div558">阿里阿多•謝謝</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover98@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div15">
            <div className="book-intro-div82">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">166.00</span>
                </span>
              </div>
              <div className="div557">優惠價$141.10</div>
              <div className="group-div107">
                <div className="div558">我依然是我</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover99@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div83">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">127.00</span>
                </span>
              </div>
              <div className="div557">優惠價$107.95</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">
                      真實案例：你要像怪物般活著，還是像正常人死去？
                    </p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover100@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div84">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">120.00</span>
                </span>
              </div>
              <div className="div557">優惠價$102.00</div>
              <div className="group-div107">
                <div className="div558">向田理髮店</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover101@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div85">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">107.00</span>
                </span>
              </div>
              <div className="div557">優惠價$90.95</div>
              <div className="group-div107">
                <div className="div558">死神之眼</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover102@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div86">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">140.00</span>
                </span>
              </div>
              <div className="div557">優惠價$119.00</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">高度狂熱</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover103@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div16">
            <div className="book-intro-div82">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">217.00</span>
                </span>
              </div>
              <div className="div557">優惠價$184.45</div>
              <div className="group-div107">
                <div className="div558">空之城</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover104@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div83">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">160.00</span>
                </span>
              </div>
              <div className="div557">優惠價$136.00</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">記憶冰封之處</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover105@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div84">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">127.00</span>
                </span>
              </div>
              <div className="div557">優惠價$107.95</div>
              <div className="group-div107">
                <div className="div558">失控的照護</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover106@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div85">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">153.00</span>
                </span>
              </div>
              <div className="div557">優惠價$130.05</div>
              <div className="group-div107">
                <div className="div558">耳語人</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover107@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div86">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">117.00</span>
                </span>
              </div>
              <div className="div557">優惠價$99.45</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">貓咪不要哭</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover108@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div17">
            <div className="book-intro-div82">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">130.00</span>
                </span>
              </div>
              <div className="div557">優惠價$110.50</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p136"></p>
                    <p className="p137">沒有女人的男人們</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover109@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div83">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">133.00</span>
                </span>
              </div>
              <div className="div557">優惠價$113.05</div>
              <div className="group-div107">
                <div className="div558">靜水</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover110@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div84">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">120.00</span>
                </span>
              </div>
              <div className="div557">優惠價$102.00</div>
              <div className="group-div107">
                <div className="div558">摩洛哥流謫</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover111@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div85">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">160.00</span>
                </span>
              </div>
              <div className="div557">優惠價$136.00</div>
              <div className="group-div107">
                <div className="div558">人間</div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover112@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div86">
              <div className="div556">
                <span className="txt-span105">
                  $<span className="span149">107.00</span>
                </span>
              </div>
              <div className="div557">優惠價$90.95</div>
              <div className="group-div107">
                <div className="div558">
                  <span className="txt-span105">
                    <p className="p136"></p>
                    <p className="p137">你的右手有蜂蜜香</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon94"
                  alt=""
                  src="./img/fictiontranslate/book-cover113@2x.png"
                />
              </div>
              <Button className="buttondefault93" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="paginationnumbered-div4">
            <div className="div616">
              1
            </div>
            <div className="div617">
              2
            </div>
            <div className="div618">
              3
            </div>
            <img
              className="icons-arrow-drodpdown10"
              alt=""
              src="./img/fictiontranslate/icons--arrowdrodpdown6.svg"
            />
            <img
              className="icons-arrow-drodpdown11"
              alt=""
              src="./img/fictiontranslate/icons--arrowdrodpdown7.svg"
            />
            <img className="active-icon5" alt="" src="./img/fictiontranslate/active1.svg" />
          </div>
        </div>
        <div className="sub-header-categorized3">
          <div className="div619">文學小說</div>
          <div className="div620">{`> `}</div>
          <Link className="a6" to="/">
            主頁
          </Link>
          <div className="line-div13" />
          <div className="div621">{`> `}</div>
          <Link className="a7" to="/fiction1" onClick={onLink1Click}>
            文學小說
          </Link>
          <div className="div622">翻譯文學</div>
        </div>
        <div className="group-div127">
          <div className="paginationnumbered-div5">
            <div className="div623">1</div>
            <div className="div624">2</div>
            <div className="div625">3</div>
            <img
              className="icons-arrow-drodpdown12"
              alt=""
              src="./img/fictiontranslate/icons--arrowdrodpdown1.svg"
            />
            <img
              className="icons-arrow-drodpdown13"
              alt=""
              src="./img/fictiontranslate/icons--arrowdrodpdown3.svg"
            />
            <img className="active-icon5" alt="" src="./img/fictiontranslate/active1.svg" />
          </div>
          <img className="group-icon8" alt="" src="./img/fictiontranslate/group-151.svg" />
          <img className="group-icon9" alt="" src="./img/fictiontranslate/group-161.svg" />
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default FictionTranslate