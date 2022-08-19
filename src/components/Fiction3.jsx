import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/fiction3.css"

const Fiction3 = () => {
  const navigate = useNavigate()

  const onText18Click = useCallback(() => {
    navigate("/best-selling")
  }, [navigate])

  const onText82Click = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  const onText83Click = useCallback(() => {
    navigate("/fiction2")
  }, [navigate])

  const onText84Click = useCallback(() => {
    navigate("/fiction3")
  }, [navigate])

  const onIconsArrowDrodpdown1Click = useCallback(() => {
    navigate("/fiction2")
  }, [navigate])

  const onGroupIconClick = useCallback(() => {
    navigate("/fiction1")
  }, [navigate])

  
  return (
    <>
    <Container>

    <div className="fiction3-div">
      <div className="fiction-div4">
        <div className="fiction-menu-div4">
          <div className="categorymenu-div4">
            <b className="b19">分類</b>
            <div className="div626">
              <div className="div627">翻譯文學</div>
            </div>
          </div>
          <div className="div628">
            <div className="div627">華文創作</div>
          </div>
          <div className="div630">
            <div className="div627">文學研究</div>
          </div>
          <div className="div632">
            <div className="div627">國學常識</div>
          </div>
          <div className="div634">
            <div className="div627">懸疑/推理小說</div>
          </div>
          <div className="div636">
            <div className="div627">恐怖/驚悚小說</div>
          </div>
          <div className="div638">
            <div className="div627">華文創作</div>
          </div>
          <div className="div640">
            <div className="div627">詩</div>
          </div>
          <div className="div642">
            <div className="div627">中國古典文學</div>
          </div>
          <div className="div644">
            <div className="div627">世界經典文學</div>
          </div>
          <div className="div646">
            <div className="div627">科幻/奇幻小說</div>
          </div>
          <div className="div648">
            <div className="div627">溫馨/療癒小說</div>
          </div>
          <div className="div650">
            <div className="div627">同性愛小說</div>
          </div>
          <div className="div652">
            <div className="div627">羅曼史/言情小說</div>
          </div>
          <div className="div654">
            <div className="div627">歷史/武俠小說</div>
          </div>
          <div className="div656">
            <div className="div627">其他文學小說</div>
          </div>
        </div>
        <div className="all-fiction-div4">
          <div className="div658">所有文學小說</div>
          <div className="div659" onClick={onText18Click}>
            查看更多...
          </div>
          <div className="books-div18">
            <div className="book-intro-div102">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">120.00</span>
                </span>
              </div>
              <div className="div661">優惠價$102.00</div>
              <div className="group-div128">
                <div className="div662">毛姆文學課</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover114@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div103">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">140.00</span>
                </span>
              </div>
              <div className="div661">優惠價$119.00</div>
              <div className="group-div128">
                <div className="div662">斯德哥爾摩復活人</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover115@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div104">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">100.00</span>
                </span>
              </div>
              <div className="div661">優惠價$85.00</div>
              <div className="group-div128">
                <div className="div662">另一個世界奏響的月光曲</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover116@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div105">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">160.00</span>
                </span>
              </div>
              <div className="div661">優惠價$136.00</div>
              <div className="group-div128">
                <div className="div662">輝耀之山：兩位如風少年的絕壁長征</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover117@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div106">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">117.00</span>
                </span>
              </div>
              <div className="div661">優惠價$99.45</div>
              <div className="group-div128">
                <div className="div662">世界</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover118@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div19">
            <div className="book-intro-div102">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">120.00</span>
                </span>
              </div>
              <div className="div661">優惠價$102.00</div>
              <div className="group-div128">
                <div className="div662">{`一九四二未來戰艦基隆號 `}</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover119@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div103">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">140.00</span>
                </span>
              </div>
              <div className="div661">優惠價$119.00</div>
              <div className="group-div128">
                <div className="div662">少女A</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover120@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div104">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">130.00</span>
                </span>
              </div>
              <div className="div661">優惠價$110.50</div>
              <div className="group-div128">
                <div className="div662">直男癌病史</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover121@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div105">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">50.00</span>
                </span>
              </div>
              <div className="div661">優惠價$47.50</div>
              <div className="group-div128">
                <div className="div662">{`在生活中寫的詭故事 `}</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover122@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div106">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">150.00</span>
                </span>
              </div>
              <div className="div661">優惠價$127.50</div>
              <div className="group-div128">
                <div className="div662">破咒師</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover123@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div20">
            <div className="book-intro-div102">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">93.00</span>
                </span>
              </div>
              <div className="div661">優惠價$79.05</div>
              <div className="group-div128">
                <div className="div662">嶼滔：夸父之墜</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover124@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div103">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">100.00</span>
                </span>
              </div>
              <div className="div661">優惠價$85.00</div>
              <div className="group-div128">
                <div className="div662">
                  <span className="txt-span134">
                    <p className="p155"></p>
                    <p className="p156">圖解希臘神話</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover125@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div104">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">117.00</span>
                </span>
              </div>
              <div className="div661">優惠價$99.45</div>
              <div className="group-div128">
                <div className="div662">
                  <span className="txt-span134">
                    <p className="p155"></p>
                    <p className="p156">靈異錯別字：夜訪百鬼</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover126@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div105">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">133.00</span>
                </span>
              </div>
              <div className="div661">優惠價$113.05</div>
              <div className="group-div128">
                <div className="div662">封印</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover127@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div106">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">133.00</span>
                </span>
              </div>
              <div className="div661">優惠價$113.05</div>
              <div className="group-div128">
                <div className="div662">
                  人但有追求，世界亦會指路：愛默生散文精選集
                </div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover128@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div21">
            <div className="book-intro-div102">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">150.00</span>
                </span>
              </div>
              <div className="div661">優惠價$127.50</div>
              <div className="group-div128">
                <div className="div662">孤獨</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover129@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div103">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">60.00</span>
                </span>
              </div>
              <div className="div661">優惠價$51.00</div>
              <div className="group-div128">
                <div className="div662">自由集 The Freedom</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover130@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div104">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">87.00</span>
                </span>
              </div>
              <div className="div661">優惠價$73.95</div>
              <div className="group-div128">
                <div className="div662">網路上的魚與貓</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover131@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div105">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">87.00</span>
                </span>
              </div>
              <div className="div661">優惠價$73.95</div>
              <div className="group-div128">
                <div className="div662">麻躐者與海</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover132@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div106">
              <div className="div660">
                <span className="txt-span134">
                  $<span className="span169">133.00</span>
                </span>
              </div>
              <div className="div661">優惠價$113.05</div>
              <div className="group-div128">
                <div className="div662">孺子帝：卷一</div>
                <img
                  className="book-cover-icon114"
                  alt=""
                  src="./img/fiction3/book-cover133@2x.png"
                />
              </div>
              <Button className="buttondefault113" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
        </div>
        <div className="sub-header-categorized4">
          <div className="div720">文學小說</div>
          <div className="div721">文學小說</div>
          <div className="div722">{`> `}</div>
          <Link className="a8" to="/">
            主頁
          </Link>
          <div className="line-div14" />
        </div>
        <div className="group-div148">
          <div className="paginationnumbered-div6">
            <div className="div723" onClick={onText82Click}>
              1
            </div>
            <div className="div724" onClick={onText83Click}>
              2
            </div>
            <div className="div725" onClick={onText84Click}>
              3
            </div>
            <img
              className="icons-arrow-drodpdown14"
              alt=""
              src="./img/fiction3/icons--arrowdrodpdown1.svg"
            />
            <img
              className="icons-arrow-drodpdown15"
              alt=""
              src="./img/fiction3/icons--arrowdrodpdown3.svg"
              onClick={onIconsArrowDrodpdown1Click}
            />
            <img className="active-icon7" alt="" src="./img/fiction3/active1.svg" />
          </div>
          <img
            className="group-icon10"
            alt=""
            src="./img/fiction3/group-17.svg"
            onClick={onGroupIconClick}
          />
          <img className="group-icon11" alt="" src="./img/fiction3/group-18.svg" />
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default Fiction3