import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/newrelease.css"

const NewRelease = () => {
  return (
    <>
    <Container>

    <div className="newrelease-div">
      <div className="new-releases-div">
        <div className="div973">本月新書</div>
        <div className="books-group-14">
          <div className="book-intro-div174">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">73.00</span>
              </span>
            </div>
            <div className="div975">優惠價$69.35</div>
            <div className="group-div203">
              <div className="div976">風格練習</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover186@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div175">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">133.00</span>
              </span>
            </div>
            <div className="div975">優惠價$113.05</div>
            <div className="group-div203">
              <div className="div976">愛是一條線</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div176">
            <div className="div980">$127.00</div>
            <div className="div975">優惠價$107.95</div>
            <div className="group-div203">
              <div className="div976">不存在的書</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover1@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div177">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">100.00</span>
              </span>
            </div>
            <div className="div975">優惠價$85.00</div>
            <div className="group-div203">
              <div className="div976">揚子堂糕餅舖</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover2@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div178">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">140.00</span>
              </span>
            </div>
            <div className="div975">優惠價$119.00</div>
            <div className="group-div203">
              <div className="div976">隱市致富地圖＋多空交戰下的贏勢攻略</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover3@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div179">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">118.00</span>
              </span>
            </div>
            <div className="div975">優惠價$100.00</div>
            <div className="group-div203">
              <div className="div976">雞雞到底神不神？</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover4@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-15">
          <div className="book-intro-div180">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">117.00</span>
              </span>
            </div>
            <div className="div975">優惠價$99.45</div>
            <div className="group-div203">
              <div className="div976">六弄咖啡館</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover192@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div181">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">160.00</span>
              </span>
            </div>
            <div className="div975">優惠價$136.00</div>
            <div className="group-div203">
              <div className="div976">我的插畫史</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover193@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div182">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">163.00</span>
              </span>
            </div>
            <div className="div975">優惠價$138.55</div>
            <div className="group-div203">
              <div className="div976">第一次就成功的麵食料理書</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover194@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div183">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">127.00</span>
              </span>
            </div>
            <div className="div975">優惠價$107.95</div>
            <div className="group-div203">
              <div className="div976">投資的奧義</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover195@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div184">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">217.00</span>
              </span>
            </div>
            <div className="div975">優惠價$195.30</div>
            <div className="group-div203">
              <div className="div976">火燒島：流麻溝十五號</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover196@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div174">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">107.00</span>
              </span>
            </div>
            <div className="div975">優惠價$90.95</div>
            <div className="group-div203">
              <div className="div976">嗅聞樹木的十三種方式</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover197@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-16">
          <div className="book-intro-div180">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">140.00</span>
              </span>
            </div>
            <div className="div975">優惠價$119.00</div>
            <div className="group-div203">
              <div className="div976">你所不知道的自戀狂</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover198@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div181">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">140.00</span>
              </span>
            </div>
            <div className="div975">優惠價$119.00</div>
            <div className="group-div203">
              <div className="div976">人類圖，你與世界和解的開始</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover199@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div182">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">140.00</span>
              </span>
            </div>
            <div className="div975">優惠價$119.00</div>
            <div className="group-div203">
              <div className="div976">
                <span className="txt-span215">
                  <p className="p173">專業新聞英文搭配詞</p>
                  <p className="news-collocations-p">News Collocations</p>
                </span>
              </div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover200@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div183">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">73.00</span>
              </span>
            </div>
            <div className="div975">優惠價$62.05</div>
            <div className="group-div203">
              <div className="div976">接近無限透明的藍</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover201@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div184">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">107.00</span>
              </span>
            </div>
            <div className="div975">優惠價$90.95</div>
            <div className="group-div203">
              <div className="div976">我55個賺到錢的斜槓人生</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover202@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div174">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">150.00</span>
              </span>
            </div>
            <div className="div975">優惠價$127.50</div>
            <div className="group-div203">
              <div className="div976">游能俊醫師的133低醣瘦身餐盤</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover203@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-17">
          <div className="book-intro-div180">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">127.00</span>
              </span>
            </div>
            <div className="div975">優惠價$107.95</div>
            <div className="group-div203">
              <div className="div976">高階覺察</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover204@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div181">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">150.00</span>
              </span>
            </div>
            <div className="div975">優惠價$127.50</div>
            <div className="group-div203">
              <div className="div976">不實在的現實</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover205@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div182">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">193.00</span>
              </span>
            </div>
            <div className="div975">優惠價$164.05</div>
            <div className="group-div203">
              <div className="div976">他的地板是你的天花板</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover206@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div183">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">127.00</span>
              </span>
            </div>
            <div className="div975">優惠價$107.95</div>
            <div className="group-div203">
              <div className="div976">順勢溝通</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover207@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div184">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">250.00</span>
              </span>
            </div>
            <div className="div975">優惠價$212.50</div>
            <div className="group-div203">
              <div className="div976">室內植物圖鑑</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover208@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div174">
            <div className="div974">
              <span className="txt-span215">
                $<span className="span241">200.00</span>
              </span>
            </div>
            <div className="div975">優惠價$180.00</div>
            <div className="group-div203">
              <div className="div976">Figma UI/UX設計技巧實戰</div>
              <img
                className="book-cover-icon186"
                alt=""
                src="./img/newrelease/book-cover209@2x.png"
              />
            </div>
            <Button className="buttondefault185" variant="primary">
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

export default NewRelease