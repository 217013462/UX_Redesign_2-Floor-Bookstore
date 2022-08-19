import { useCallback } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link  } from "react-router-dom"
import "../css/fiction1.css"

const Fiction1 = () => {
  const navigate = useNavigate();

  const onText18Click = useCallback(() => {
    navigate("/bestselling");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/fiction3");
  }, [navigate]);

  const onText79Click = useCallback(() => {
    navigate("/fiction1");
  }, [navigate]);

  const onText80Click = useCallback(() => {
    navigate("/fiction2");
  }, [navigate]);

  const onText81Click = useCallback(() => {
    navigate("/fiction3");
  }, [navigate]);

  const onIconsArrowDrodpdownClick = useCallback(() => {
    navigate("/fiction2");
  }, [navigate]);

  return (
    <>
    <Container>

    <div className="fiction1-div">
      <div className="fiction-div6">
        <div className="fiction-menu-div6">
          <div className="categorymenu-div6">
            <b className="b21">分類</b>
            <div className="div826">
              <div className="div827">翻譯文學</div>
            </div>
          </div>
          <div className="div828">
            <div className="div827">華文創作</div>
          </div>
          <div className="div830">
            <div className="div827">文學研究</div>
          </div>
          <div className="div832">
            <div className="div827">國學常識</div>
          </div>
          <div className="div834">
            <div className="div827">懸疑/推理小說</div>
          </div>
          <div className="div836">
            <div className="div827">恐怖/驚悚小說</div>
          </div>
          <div className="div838">
            <div className="div827">華文創作</div>
          </div>
          <div className="div840">
            <div className="div827">詩</div>
          </div>
          <div className="div842">
            <div className="div827">中國古典文學</div>
          </div>
          <div className="div844">
            <div className="div827">世界經典文學</div>
          </div>
          <div className="div846">
            <div className="div827">科幻/奇幻小說</div>
          </div>
          <div className="div848">
            <div className="div827">溫馨/療癒小說</div>
          </div>
          <div className="div850">
            <div className="div827">同性愛小說</div>
          </div>
          <div className="div852">
            <div className="div827">羅曼史/言情小說</div>
          </div>
          <div className="div854">
            <div className="div827">歷史/武俠小說</div>
          </div>
          <div className="div856">
            <div className="div827">其他文學小說</div>
          </div>
        </div>
        <div className="all-fiction-div6">
          <div className="div858">所有文學小說</div>
          <div className="div859" onClick={onText18Click}>
            查看更多...
          </div>
          <div className="books-div26">
            <div className="book-intro-div142">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">133.00</span>
                </span>
              </div>
              <div className="div861">優惠價$126.35</div>
              <div className="group-div170">
                <div className="div862">在世界的盡頭找到我</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover154@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div143">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">93.00</span>
                </span>
              </div>
              <div className="div861">優惠價$79.05</div>
              <div className="group-div170">
                <div className="div862">選戰遊戲</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover155@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div144">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">83.00</span>
                </span>
              </div>
              <div className="div861">優惠價$78.85</div>
              <div className="group-div170">
                <div className="div862">吾妻鎮宅 卷四</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover156@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div145">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">100.00</span>
                </span>
              </div>
              <div className="div861">優惠價$85.00</div>
              <div className="group-div170">
                <div className="div862">背後的數字</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover157@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div146">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">127.00</span>
                </span>
              </div>
              <div className="div861">優惠價$120.65</div>
              <div className="group-div170">
                <div className="div862">再見，最好的妳</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover158@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div27">
            <div className="book-intro-div142">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">117.00</span>
                </span>
              </div>
              <div className="div861">優惠價$99.45</div>
              <div className="group-div170">
                <div className="div862">周作人作品精選15</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover159@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div143">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">140.00</span>
                </span>
              </div>
              <div className="div861">優惠價$119.00</div>
              <div className="group-div170">
                <div className="div862">說文 地名字構形用例研究</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover160@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div144">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">167.00</span>
                </span>
              </div>
              <div className="div861">優惠價$141.95</div>
              <div className="group-div170">
                <div className="div862">網絡英雄傳之黑客訣</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover161@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div145">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">150.00</span>
                </span>
              </div>
              <div className="div861">優惠價$127.50</div>
              <div className="group-div170">
                <div className="div862">死亡是一個小會客室</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover162@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div146">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">127.00</span>
                </span>
              </div>
              <div className="div861">優惠價$107.95</div>
              <div className="group-div170">
                <div className="div862">遇時不候</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover163@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div28">
            <div className="book-intro-div142">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">140.00</span>
                </span>
              </div>
              <div className="div861">優惠價$119.00</div>
              <div className="group-div170">
                <div className="div862">孩子</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover164@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div143">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">150.00</span>
                </span>
              </div>
              <div className="div861">優惠價$127.50</div>
              <div className="group-div170">
                <div className="div862">Little Women 小婦人</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover165@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div144">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">132.3</span>
                </span>
              </div>
              <div className="div861">優惠價$147.00</div>
              <div className="group-div170">
                <div className="div862">紫青雙劍錄第十卷</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover166@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div145">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">93.00</span>
                </span>
              </div>
              <div className="div861">優惠價$79.05</div>
              <div className="group-div170">
                <div className="div862">演員的面具</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover167@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div146">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">100.00</span>
                </span>
              </div>
              <div className="div861">優惠價$85.00</div>
              <div className="group-div170">
                <div className="div862">供奉 村之卷</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover168@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="books-div29">
            <div className="book-intro-div142">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">140.00</span>
                </span>
              </div>
              <div className="div861">優惠價$119.00</div>
              <div className="group-div170">
                <div className="div862">半小時漫畫唐詩</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover169@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div143">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">113.00</span>
                </span>
              </div>
              <div className="div861">優惠價$101.70</div>
              <div className="group-div170">
                <div className="div862">
                  臺灣現當代作家研究資料彙編111：吳漫沙
                </div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover170@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div144">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">133.00</span>
                </span>
              </div>
              <div className="div861">優惠價$119.70</div>
              <div className="group-div170">
                <div className="div862">全臺詩 第伍拾陸冊</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover171@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div145">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">100.00</span>
                </span>
              </div>
              <div className="div861">優惠價$90.00</div>
              <div className="group-div170">
                <div className="div862">捕捉時光，留住晴天</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover172@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
            <div className="book-intro-div146">
              <div className="div860">
                <span className="txt-span181">
                  $<span className="span209">127.00</span>
                </span>
              </div>
              <div className="div861">優惠價$107.95</div>
              <div className="group-div170">
                <div className="div862">咖啡香</div>
                <img
                  className="book-cover-icon154"
                  alt=""
                  src="./img/fiction1-cover173@2x.png"
                />
              </div>
              <Button className="buttondefault153" variant="primary">
                加入購物車
              </Button>
            </div>
          </div>
          <div className="group-div190">
            <img className="group-icon14" alt="" src="group-151.svg" />
            <img
              className="group-icon15"
              alt=""
              src="group-161.svg"
              onClick={onGroupIcon1Click}
            />
            <div className="paginationnumbered-div8">
              <div className="div920" onClick={onText79Click}>
                1
              </div>
              <div className="div921" onClick={onText80Click}>
                2
              </div>
              <div className="div922" onClick={onText81Click}>
                3
              </div>
              <img
                className="icons-arrow-drodpdown18"
                alt=""
                src="icons--arrowdrodpdown1.svg"
                onClick={onIconsArrowDrodpdownClick}
              />
              <img
                className="icons-arrow-drodpdown19"
                alt=""
                src="icons--arrowdrodpdown3.svg"
              />
              <img className="active-icon9" alt="" src="active1.svg" />
            </div>
          </div>
        </div>
        <div className="sub-header-categorized6">
          <div className="div923">文學小說</div>
          <div className="div924">{`> `}</div>
          <Link className="a10" to="/homepage">
            主頁
          </Link>
          <div className="line-div16" />
          <div className="div925">文學小說</div>
        </div>
      </div>
    </div>
      
    </Container>
    </>
  )
}

export default Fiction1