import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/fiction2.css"

const Fiction2 = () => {
  const navigate = useNavigate()

  const onText18Click = useCallback(() => {
    navigate("/best-selling")
  }, [navigate])

  const onGroupIconClick = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  const onGroupIcon1Click = useCallback(() => {
    navigate("/fiction3")
  }, [navigate])

  const onText79Click = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  const onText80Click = useCallback(() => {
    navigate("/fiction2")
  }, [navigate])

  const onText81Click = useCallback(() => {
    navigate("/fiction3")
  }, [navigate])

  const onIconsArrowDrodpdownClick = useCallback(() => {
    navigate("/fiction3")
  }, [navigate])

  const onIconsArrowDrodpdown1Click = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  
  return (
    <>
    <Container>

      <div className="fiction2-div">
      <div className="fiction-div5">
        <div className="fiction-menu-div5">
          <div className="categorymenu-div5">
            <b className="b20">分類</b>
            <div className="div726">
              <div className="div727">翻譯文學</div>
            </div>
          </div>
          <div className="div728">
            <div className="div727">華文創作</div>
          </div>
          <div className="div730">
            <div className="div727">文學研究</div>
          </div>
          <div className="div732">
            <div className="div727">國學常識</div>
          </div>
          <div className="div734">
            <div className="div727">懸疑/推理小說</div>
          </div>
          <div className="div736">
            <div className="div727">恐怖/驚悚小說</div>
          </div>
          <div className="div738">
            <div className="div727">華文創作</div>
          </div>
          <div className="div740">
            <div className="div727">詩</div>
          </div>
          <div className="div742">
            <div className="div727">中國古典文學</div>
          </div>
          <div className="div744">
            <div className="div727">世界經典文學</div>
          </div>
          <div className="div746">
            <div className="div727">科幻/奇幻小說</div>
          </div>
          <div className="div748">
            <div className="div727">溫馨/療癒小說</div>
          </div>
          <div className="div750">
            <div className="div727">同性愛小說</div>
          </div>
          <div className="div752">
            <div className="div727">羅曼史/言情小說</div>
          </div>
          <div className="div754">
            <div className="div727">歷史/武俠小說</div>
          </div>
          <div className="div756">
            <div className="div727">其他文學小說</div>
          </div>
        </div>
        <div className="all-fiction-div5">
          <div className="div758">所有文學小說</div>
          <div className="div759" onClick={onText18Click}>
            查看更多...
          </div>
          <div className="books-div22">
            <div className="book-intro-div122">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">140.00</span>
                </span>
              </div>
              <div className="div761">優惠價$119.00</div>
              <div className="group-div149">
                <div className="div762">
                  <span className="txt-span156">
                    <p className="p159">文學一甲子2：</p>
                    <p className="p160">吳晟的文學情誼</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover134@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div123">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">110.00</span>
                </span>
              </div>
              <div className="div761">優惠價$93.50</div>
              <div className="group-div149">
                <div className="div762">{`孝子 `}</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover135@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div124">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">140.00</span>
                </span>
              </div>
              <div className="div761">優惠價$119.00</div>
              <div className="group-div149">
                <div className="div762">
                  <span className="txt-span156">
                    <p className="p159">文學一甲子1：</p>
                    <p className="p160">吳晟的詩情詩緣</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover136@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div125">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">133.00</span>
                </span>
              </div>
              <div className="div761">優惠價$113.05</div>
              <div className="group-div149">
                <div className="div762">空笑夢</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover137@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div126">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">127.00</span>
                </span>
              </div>
              <div className="div761">優惠價$107.95</div>
              <div className="group-div149">
                <div className="div762">萬福瑪麗亞</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover138@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div23">
            <div className="book-intro-div122">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">83.00</span>
                </span>
              </div>
              <div className="div761">優惠價$70.55</div>
              <div className="group-div149">
                <div className="div762">幽暗之地：止微室談詩</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover139@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div123">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">83.00</span>
                </span>
              </div>
              <div className="div761">優惠價$70.55</div>
              <div className="group-div149">
                <div className="div762">老人與海</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover140@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div124">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">127.00</span>
                </span>
              </div>
              <div className="div761">優惠價$107.95</div>
              <div className="group-div149">
                <div className="div762">紅樓夢小人物探微</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover141@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div125">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">253.00</span>
                </span>
              </div>
              <div className="div761">優惠價$227.70</div>
              <div className="group-div149">
                <div className="div762">啟功講學錄</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover142@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div126">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">100.00</span>
                </span>
              </div>
              <div className="div761">優惠價$85.00</div>
              <div className="group-div149">
                <div className="div762">
                  <span className="txt-span156">
                    <p className="p159"></p>
                    <p className="p160">{`卡里古拉 `}</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover143@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div24">
            <div className="book-intro-div122">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">133.00</span>
                </span>
              </div>
              <div className="div761">優惠價$113.05</div>
              <div className="group-div149">
                <div className="div762">向光植物</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover144@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div123">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">107.00</span>
                </span>
              </div>
              <div className="div761">優惠價$96.30</div>
              <div className="group-div149">
                <div className="div762">
                  <span className="txt-span156">
                    <p className="p159">挑剔的哲學：</p>
                    <p className="p160">徐望雲讀書筆記</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover145@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div124">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">193.00</span>
                </span>
              </div>
              <div className="div761">優惠價$164.05</div>
              <div className="group-div149">
                <div className="div762">細說金瓶梅</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover146@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div125">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">60.00</span>
                </span>
              </div>
              <div className="div761">優惠價$51.00</div>
              <div className="group-div149">
                <div className="div762">
                  <span className="txt-span156">
                    <p className="p159"></p>
                    <p className="p160">張愛玲：孤獨的人有他們自己的泥沼</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover147@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div126">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">107.00</span>
                </span>
              </div>
              <div className="div761">優惠價$90.95</div>
              <div className="group-div149">
                <div className="div762">隱形古物商</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover148@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div25">
            <div className="book-intro-div122">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">127.00</span>
                </span>
              </div>
              <div className="div761">優惠價$107.95</div>
              <div className="group-div149">
                <div className="div762">創作者的故事設定攻略</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover149@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div123">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">120.00</span>
                </span>
              </div>
              <div className="div761">優惠價$108.00</div>
              <div className="group-div149">
                <div className="div762">香港文學半生緣</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover150@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div124">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">177.00</span>
                </span>
              </div>
              <div className="div761">優惠價$159.30</div>
              <div className="group-div149">
                <div className="div762">異國文學行腳</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover151@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div125">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">117.00</span>
                </span>
              </div>
              <div className="div761">優惠價$99.45</div>
              <div className="group-div149">
                <div className="div762">咆哮山莊</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover152@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div126">
              <div className="div760">
                <span className="txt-span156">
                  $<span className="span189">133.00</span>
                </span>
              </div>
              <div className="div761">優惠價$119.70</div>
              <div className="group-div149">
                <div className="div762">{`人倫之愛 `}</div>
                <img
                  className="book-cover-icon134"
                  alt=""
                  src="./img/fiction2/book-cover153@2x.png"
                />
              </div>
              <Button className="buttondefault133" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="group-div169">
            <img
              className="group-icon12"
              alt=""
              src="./img/fiction2/group-172.svg"
              onClick={onGroupIconClick}
            />
            <img
              className="group-icon13"
              alt=""
              src="./img/fiction2/group-182.svg"
              onClick={onGroupIcon1Click}
            />
            <div className="paginationnumbered-div7">
              <div className="div820" onClick={onText79Click}>
                1
              </div>
              <div className="div821" onClick={onText80Click}>
                2
              </div>
              <div className="div822" onClick={onText81Click}>
                3
              </div>
              <img
                className="icons-arrow-drodpdown16"
                alt=""
                src="./img/fiction2/icons--arrowdrodpdown1.svg"
                onClick={onIconsArrowDrodpdownClick}
              />
              <img
                className="icons-arrow-drodpdown17"
                alt=""
                src="./img/fiction2/icons--arrowdrodpdown3.svg"
                onClick={onIconsArrowDrodpdown1Click}
              />
              <img className="active-icon8" alt="" src="./img/fiction2/active1.svg" />
            </div>
          </div>
        </div>
        <div className="sub-header-categorized5">
          <div className="div823">文學小說</div>
          <div className="div824">文學小說</div>
          <div className="div825">{`> `}</div>
          <Link className="a9" to="/">
            主頁
          </Link>
          <div className="line-div15" />
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default Fiction2