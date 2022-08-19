import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import "../css/bestselling.css"

const BestSelling = () => {
  
  return (
    <>
    <Container>
      
    <div className="bestselling-div">
      <div className="bestselling-div1">
        <div className="div1046">本星期暢銷榜</div>
        <div className="books-group-18">
          <div className="book-intro-div198">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">133.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$113.05</div>
            <div className="group-div227">
              <div className="div1049">別管黑洞了，跟著霍金上太空！</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover210@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div199">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">120.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$102.00</div>
            <div className="group-div227">
              <div className="div1049">蒼之炎</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover10@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div200">
            <div className="div1053">$140.00</div>
            <div className="div1048">優惠價$119.00</div>
            <div className="group-div227">
              <div className="div1055">
                蒼之炎II-飛翔編
              </div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover11@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div201">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">120.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$108.00</div>
            <div className="group-div227">
              <div className="div1049">用十張地圖看懂全球政經局勢</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover12@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div202">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">100.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$85.00</div>
            <div className="group-div227">
              <div className="div1049">被討厭的勇氣</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover13@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div203">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">110.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$93.50</div>
            <div className="group-div227">
              <div className="div1049">原子習慣</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover14@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-19">
          <div className="book-intro-div204">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">70.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$59.50</div>
            <div className="group-div227">
              <div className="div1049">
                <span className="txt-span239">
                  <p className="p174">德蕾莎修女：</p>
                  <p className="n-p">一條簡單的道路</p>
                </span>
              </div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover216@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div205">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">117.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$99.45</div>
            <div className="group-div227">
              <div className="div1049">對人類的未來下注</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover217@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div206">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">67.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$63.65</div>
            <div className="group-div227">
              <div className="div1049">
                <span className="txt-span239">
                  <p className="p174">【幼兒益智教具】</p>
                  <p className="n-p">持續專注力訓練 (N次寫)</p>
                </span>
              </div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover218@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div207">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">127.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$120.65</div>
            <div className="group-div227">
              <div className="div1049">一眼就愛上！我的北歐風手作布包</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover219@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div208">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">107.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$90.95</div>
            <div className="group-div227">
              <div className="div1049">
                <span className="txt-span239">
                  <p className="p174">被討厭的勇氣</p>
                  <p className="n-p">二部曲完結篇</p>
                </span>
              </div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover220@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div198">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">113.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$96.05</div>
            <div className="group-div227">
              <div className="div1049">和好：療癒你的內在小孩</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover221@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-110">
          <div className="book-intro-div204">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">127.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$114.30</div>
            <div className="group-div227">
              <div className="div1049">跳進嘴裡的豐盛義大利</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover222@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div205">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">107.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$90.95</div>
            <div className="group-div227">
              <div className="div1049">刻意練習</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover223@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div206">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">150.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$135.00</div>
            <div className="group-div227">
              <div className="div1049">日本語GOGOGO 1</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover224@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div207">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">127.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$107.95</div>
            <div className="group-div227">
              <div className="div1049">賺錢，再自然不過</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover225@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div208">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">100.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$85.00</div>
            <div className="group-div227">
              <div className="div1049">口袋裡的印鈔機</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover226@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div198">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">83.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$70.55</div>
            <div className="group-div227">
              <div className="div1049">一行禪師 你可以不生氣</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover227@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
        </div>
        <div className="books-group-111">
          <div className="book-intro-div204">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">110.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$93.50</div>
            <div className="group-div227">
              <div className="div1049">靈魂的出生前計畫</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover228@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div205">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">117.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$99.45</div>
            <div className="group-div227">
              <div className="div1049">
                <span className="txt-span239">
                  <p className="p174">盛世君臣</p>
                  <p className="n-p">乾隆、和珅與劉墉</p>
                </span>
              </div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover229@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div206">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">140.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$126.00</div>
            <div className="group-div227">
              <div className="div1049">Costco海鮮料理好食提案</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover230@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div207">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">127.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$107.95</div>
            <div className="group-div227">
              <div className="div1049">投資最重要的事</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover231@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div208">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">107.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$90.95</div>
            <div className="group-div227">
              <div className="div1049">大師教你畫一個好故事！</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover232@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
              加入購物車
            </Button>
          </div>
          <div className="book-intro-div198">
            <div className="div1047">
              <span className="txt-span239">
                $<span className="span264">113.00</span>
              </span>
            </div>
            <div className="div1048">優惠價$96.05</div>
            <div className="group-div227">
              <div className="div1049">永樂皇帝：征戰一生</div>
              <img
                className="book-cover-icon210"
                alt=""
                src="./img/bestselling/book-cover233@2x.png"
              />
            </div>
            <Button className="buttondefault209" variant="primary">
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

export default BestSelling