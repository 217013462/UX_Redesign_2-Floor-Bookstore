import React, { useState, useCallback } from 'react'
import { Container, Carousel, Button } from 'react-bootstrap'
import { useNavigate, Link } from "react-router-dom"
import '../css/homepage.css'

const Homepage = () => {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const onText1Click = useCallback(() => {
    navigate("/new-release")
  }, [navigate])

  const onText17Click = useCallback(() => {
    navigate("/hot-deal")
  }, [navigate])

  const onText35Click = useCallback(() => {
    navigate("/best-selling")
  }, [navigate])



  return ( <>
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/best-selling">
          <img
            className="d-block w-100"
            src="../img/slider2.png"
            alt="Second slide"
          />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/hot-deal">
          <img
            className="d-block w-100"
            src="../img/slider3.png"
            alt="Third slide"
          />
          </Link>
        </Carousel.Item>
      </Carousel>
    </Container>

  
      <div className="homepage-div">
      <div className="group-div">
        <div className="div">
          <div className="div1">本月新書</div>
          <div className="div2" onClick={onText1Click}>
            查看更多...
          </div>
          <div className="books-div">
            <div className="book-intro-div">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">133.00</span>
                </span>
              </div>
              <div className="div4">優惠價$113.05</div>
              <div className="group-div1">
                <div className="div5">愛是一條線</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div1">
              <div className="div6">$127.00</div>
              <div className="div4">優惠價$107.95</div>
              <div className="group-div1">
                <div className="div5">不存在的書</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover1@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div2">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">100.00</span>
                </span>
              </div>
              <div className="div4">優惠價$85.00</div>
              <div className="group-div1">
                <div className="div5">揚子堂糕餅舖</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover2@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div3">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">140.00</span>
                </span>
              </div>
              <div className="div4">優惠價$119.00</div>
              <div className="group-div1">
                <div className="div5">隱市致富地圖＋多空交戰下的贏勢攻略</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover3@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div4">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">118.00</span>
                </span>
              </div>
              <div className="div4">優惠價$100.00</div>
              <div className="group-div1">
                <div className="div5">雞雞到底神不神？</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover4@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
        </div>
        <div className="div18">
          <div className="div19" onClick={onText17Click}>
            查看更多...
          </div>
          <div className="div20">最新優惠</div>
          <div className="books-group-1">
            <div className="book-intro-div1">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">133</span>
                </span>
              </div>
              <div className="div4">優惠價$93.10</div>
              <div className="group-div1">
                <div className="div5">北海道親子遊</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover5@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">87.00</span>
                </span>
              </div>
              <div className="div4">優惠價$57.50</div>
              <div className="group-div1">
                <div className="div5">30天，世界玩一圈！</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover6@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div2">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">100.00</span>
                </span>
              </div>
              <div className="div4">優惠價$65.00</div>
              <div className="group-div1">
                <div className="div5">
                  <span className="txt-span">
                    <p className="iii-p">福爾摩斯先生收III：</p>
                    <p className="p">來自台灣的委託</p>
                  </span>
                </div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover7@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div3">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">140.00</span>
                </span>
              </div>
              <div className="div4">優惠價$91.00</div>
              <div className="group-div1">
                <div className="div5">攝影本事</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover8@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div4">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">107.00</span>
                </span>
              </div>
              <div className="div4">優惠價$58.85</div>
              <div className="group-div1">
                <div className="div5">愛的69種玩法III：微醺</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover9@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
        </div>
        <div className="div36">
          <div className="div1">暢銷書籍</div>
          <div className="div38" onClick={onText35Click}>
            查看更多...
          </div>
          <div className="books-div">
            <div className="book-intro-div">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">120.00</span>
                </span>
              </div>
              <div className="div4">優惠價$102.00</div>
              <div className="group-div1">
                <div className="div5">蒼之炎</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover10@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div1">
              <div className="div6">$140.00</div>
              <div className="div4">優惠價$119.00</div>
              <div className="group-div1">
                <div className="div5">蒼之炎II-飛翔編</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover11@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div2">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">120.00</span>
                </span>
              </div>
              <div className="div4">優惠價$108.00</div>
              <div className="group-div1">
                <div className="div5">用十張地圖看懂全球政經局勢</div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover12@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div3">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">100.00</span>
                </span>
              </div>
              <div className="div4">優惠價$85.00</div>
              <div className="group-div1">
                <div className="div5">
                  被討厭的勇氣：自我啟發之父「阿德勒」的教導
                </div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover13@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div4">
              <div className="div3">
                <span className="txt-span">
                  $<span className="span">110.00</span>
                </span>
              </div>
              <div className="div4">優惠價$93.50</div>
              <div className="group-div1">
                <div className="div5">
                  原子習慣：細微改變帶來巨大成就的實證法則
                </div>
                <img
                  className="book-cover-icon"
                  alt=""
                  src="./img/homepage/book-cover14@2x.png"
                />
              </div>
              <Button className="buttondefault" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
  </>)
}

export default Homepage