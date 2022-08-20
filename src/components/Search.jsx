import { useCallback, useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import "../css/search.css"

const Search = () => {
  const navigate = useNavigate()

  const onTheTalesOfClick = useCallback(() => {
    navigate("/book-detail")
  }, [navigate])

  const onBookCoverImageClick = useCallback(() => {
    navigate("/book-detail")
  }, [navigate])
  
  const onClickToCart = useCallback(() => {
    navigate("/shopping-cart-something")
  }, [navigate])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
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
        <div className="search-div">
      <div className="search-result-div">
        <div className="jk-rowling-22414-1">
          <span>{`搜尋  “ `}</span>
          <span className="jk-rowling-span">JK Rowling</span>
          <span>{` ”  一共找到  `}</span>
          <span className="jk-rowling-span">22414</span>
          <span> 個結果 (1.49秒)</span>
        </div>
        <div className="search-result-sample">
          <div
            className="the-tales-of-beedle-the-bard3"
            onClick={onTheTalesOfClick}
          >
            The Tales of Beedle the Bard
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2008年12月04日</div>
          <div className="jk-div1">
            <p className="dark-times-have">魔法界最著名的童話書！</p>
            <p className="dark-times-have">打敗佛地魔的關鍵線索！</p>
            <p className="the-dark-forces">
              妙麗親筆翻譯＋J.K.羅琳手繪插圖＋鄧不利多獨家註解！
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">130.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">123.50</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img
            className="book-cover-icon24"
            alt=""
            src="./img/search/book-cover24@2x.png"
            onClick={onBookCoverImageClick}
          />
          <Button className="buttondefault23" variant="primary" onClick={handleShow}>
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample1">
          <div className="the-tales-of-beedle-the-bard4">
            Quidditch Through the Ages
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2017年1月12日</div>
          <div className="jk-div1">
            <p className="dark-times-have">
              「金探子」到底是打哪兒來的？「搏格」是怎麼產生的？維格城流浪者隊的隊袍上又為什麼繡了把菜刀？
            </p>
            <p className="dark-times-have">
              如果你對這些感到好奇，那麼《穿越歷史的魁地奇》將是你絕對不可錯過的一本書！這本書介紹了魁地奇源遠流長的歷史，
            </p>
            <p className="the-dark-forces">
              從飛天掃帚在形式和速度上的演變、金探鳥到金探子的發明、球賽規則、世界各地魁地奇隊伍的介紹，乃至球賽作弊的方式……等等。
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">88.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">83.60</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover25@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample2">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter and the Chamber of Secrets
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月01日</div>
          <div className="jk-div1">
            <p className="dark-times-have">
              這個夏天結束前，哈利本來應該能夠順利重返霍格華茲。但人算不如天算，家庭小精靈多比突然造訪，警告他若是回到學校，
            </p>
            <p className="the-dark-forces">
              將面臨生命危險！為了讓哈利徹底「斷念」，多比不但攔截了所有朋友們寄來的信，還用魔法陷害他，害他慘遭禁足。
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">146.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">124.10</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover23@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample3">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter and the Order of the Phoenix
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月01日</div>
          <div className="jk-div1">
            <p className="dark-times-have">
              Dark times have come to Hogwarts. After the Dementors attack on
              his cousin Dudley, Harry Potter knows that Voldemort will stop at
              nothing
            </p>
            <p className="dark-times-have">
              to find him. There are many who deny the Dark Lords return, but
              Harry is not alone: a secret order gathers at Grimmauld Place to
              fight against
            </p>
            <p className="the-dark-forces">
              the Dark forces. Harry must allow Professor Snape to teach him how
              to protect himself from Voldemorts savage assaults on his mind.
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">148.50</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 9 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">165.00</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover27@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample4">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter and the Prisoner of Azkaban
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月01日</div>
          <div className="jk-div1">
            <p className="dark-times-have">
              瑪姬姑姑又要來了！這個名字一出現在德思禮家，就代表著哈利為期一週的惡夢。小時候玩大風吹，她會用手杖猛敲哈利的腳，
            </p>
            <p className="dark-times-have">
              免得他贏過達力，有一年他不小心踩到了瑪姬養的牛頭犬，只能在樹上躲到三更半夜。瑪姬姑姑跟德思禮家所有人一樣，都以貶低他為樂，
            </p>
            <p className="the-dark-forces">
              直到她侮辱了哈利的父母，被他用魔法變成大氣球……
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">146.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">138.70</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover20@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample5">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter and the Half-Blood Prince
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月01日</div>
          <div className="jk-div1">
            成為那個「被選中的人」，哈利波特將付出什麼無法想像的代價？
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">165.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 85 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">140.25</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover21@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample6">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter and the Philosopher’s Stone
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月01日</div>
          <div className="jk-div1">
            <p className="dark-times-have">
              Harry Potter has never even heard of Hogwarts when the letters
              start dropping on the doormat at number four, Privet Drive.
              Addressed in
            </p>
            <p className="dark-times-have">
              green ink on yellowish parchment with a purple seal, they are
              swiftly confiscated by his grisly aunt and uncle. Then, on Harrys
              eleventh
            </p>
            <p className="the-dark-forces">
              birthday, a great beetle-eyed giant of a man called Rubeus Hagrid
              bursts in with some astonishing news: Harry Potter is a wizard...
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">105.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">99.75</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover22@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample7">
          <div className="the-tales-of-beedle-the-bard4">
            Fantastic Beasts and Where to Find Them
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2017年11月07日</div>
          <div className="jk-div1">
            <p className="dark-times-have">魔法界最著名的童話書！</p>
            <p className="dark-times-have">打敗佛地魔的關鍵線索！</p>
            <p className="the-dark-forces">
              妙麗親筆翻譯＋J.K.羅琳手繪插圖＋鄧不利多獨家註解！
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">325.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 9 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">292.50</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover19@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample8">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter Box Set: The Complete Collection
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2014年9月10日 </div>
          <div className="jk-div1">
            <p className="dark-times-have">
              A beautiful boxed set containing all seven Harry Potter novels in
              paperback. These new editions of the classic and internationally
              bestselling,
            </p>
            <p className="dark-times-have">
              multi-award-winning series feature instantly pick-up-able new
              jackets by Jonny Duddle, with huge child appeal, to bring Harry
              Potter to the
            </p>
            <p className="the-dark-forces">
              next generation of readers. Its time to PASS THE MAGIC ON .
            </p>
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">1100.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">990.00</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover32@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="search-result-sample9">
          <div className="the-tales-of-beedle-the-bard4">
            Harry Potter Boxed Set: Books 1-7
          </div>
          <div className="jk-rowling-div3">作者: J.K. Rowling</div>
          <div className="bloomsbury-publishing-div1">
            出版社 : Bloomsbury Publishing
          </div>
          <div className="div163">發行日 : 2007年10月16日</div>
          <div className="jk-div1">
            本商品為哈利波特系列1~7集、美國精裝版套書，精美藏寶盒裝，外箱附手提把與鎖，並含貼紙。數量有限，敬請把握。
          </div>
          <div className="div164">
            <p className="dark-times-have">
              <span>
                <span className="span29">{`原價 : `}</span>
                <span className="span30">1950.00</span>
                <span className="span29"> 元　</span>
              </span>
            </p>
            <p className="the-dark-forces">
              <span>
                <span className="jk-rowling-span">{`特價 : 95 折 `}</span>
              </span>
              <span className="jk-rowling-span">
                <b className="b5">1657.50</b>
                <span className="b5"> 元</span>
              </span>
            </p>
          </div>
          <img className="book-cover-icon25" alt="" src="./img/search/book-cover33@2x.png" />
          <Button className="buttondefault23" variant="primary">
            加入購物車
          </Button>
        </div>
        <div className="page-div">
          <img className="active-icon" alt="" src="./img/search/active.svg" />
          <img
            className="icons-arrow-drodpdown"
            alt=""
            src="./img/search/icons--arrowdrodpdown.svg"
          />
          <img className="group-icon" alt="" src="./img/search/group-15.svg" />
          <img className="group-icon1" alt="" src="./img/search/group-16.svg" />
          <img
            className="icons-arrow-drodpdown1"
            alt=""
            src="./img/search/icons--arrowdrodpdown1.svg"
          />
          <div className="div183">3</div>
          <div className="div184">......</div>
          <div className="div185">2242</div>
          <div className="div186">2</div>
          <div className="div187">1</div>
        </div>
        <div className="div188">搜尋結果</div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default Search