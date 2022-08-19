import React from 'react'
import { Container } from 'react-bootstrap'
import { Collapse } from 'antd'

const { Panel } = Collapse

const text1 = `1.只要您加入會員，讓您購書時再也不用踏出家門，Easy完成！
2.本店不時推出免運費優惠，成為會員後會收到本店的優惠通知。
3.除即時享購書優惠外，每次購書的實質書價滿$200可獲「二樓書券」一張，隨後每滿$100再獲一張，如購書$300可獲2張，$400可獲3張，$500可獲4張，如此類推.，每張面值$5，可於下次消費時扣減書價。
**「二樓書券」已於2021年4月1日起停止送贈
4.成為會員，即可不定期收到我們最新的優惠訊息！
`
const text2 = `請檢查有● 號的欄位是否均已填寫，以及欄位的條件是否符合系統的要求。`

const text3 = `無法登入或無法加入新會員，可能的原因有許多。
如果是因為您的瀏覽器不支援加密(SSL)，將使您無法瀏覽本公司加密之網頁，而必須於瀏覽器上更改設定。設定方式如下（以微軟的Internet Explorer瀏覽器為例）：
1.開啟Internet Explorer。
2.選擇「工具(T)」→「網際網路選項」→「進階」→勾選「安全性」中的「SSL2.0」及「SSL3.0」。
3.按「確定」並關閉瀏覽器。
4.重新啟動Internet Explorer，即可正常瀏覽。`

const text4 = `登入後 點選<資料更改>，即可修改。`

const text5 = `在會員專區裡的忘記密碼，可查到您的帳號及密碼，使用方法如下：
你只要輸入您的E-mail address，系統將會將閣下之賬號及密碼，重新電郵到閣下已登記之電郵地址`

const text11 = `1.先登記成為會員
2.登入尋找心愛書籍
3.收取網路訂購成功通知書
4.依法通知書內所列金額付款
5.等待收到書本`

const text12 = `1.請先加入會員
2.確認您的帳號.密碼是否正確無誤
3.請參考本站購書流程
4.如有其他問題，請E-mail至info@2-floor.com`

const text13 = `本店現有五種付款方式供您選擇：
(您可因應自己的情況隨時更改付款方式)
1.直接存款到本店之銀行戶口
2.銀行匯款
3.郵寄支票到本店
4.信用卡付款
5.PayPal付款`

const text14 = `由於出版社／供應商的庫存每刻都在變動著，加上出版社未必主動告訴本店缺貨項目，故此有可能在下單後才得知缺貨的情況。
本店會於確認缺貨後，更新書籍的訂購狀況碼為１４，並以電郵方式告知您缺貨的項目。
如需改訂其他書籍，客戶可通知我們為您處理。
退款將於訂單完結後(即出貨後)3個工作天內辦理。退款方式將因應付款方法而有所不同，如下：

Ａ）現金／轉帳／以支票方式付款
本冶會先把退款存至您的【會員基金】, 留待下次購書時之用. 閣下亦可提供您的匯豐銀行或中國銀行戶口資料, 讓我們直接退款給您.
Ｂ）PAYPAL／信用卡付款
退款將退回您的PAYPAL／信用卡付款戶口. 退款金額會連同該部分的4%手續費 。
`

const text15 = `對於香港出版社 - 如非絕版，一般採購時間約2~ 5天(不包括假日)。
對於簡體書及台灣出版社 - 如非絕版，一般採購時間約7~14天(不包括假日)。
`

const text16 = `所謂的會員基金，指的是存在您的電子帳戶中的金額。
例如： 書款100元，而您付150元， 多出的50元會轉入電子帳戶中， 成為您會員基金，下次購書便可抵扣。
會員基金餘額，可於登入會員後，在【 我的「會員基金」 】 處查詢

使用說明：
會員基金等同現金，可用以支付整張訂單金額，或以「會員基金」支付部分款項；
會員可要求本店以支票形式發還該筆會員基金(只限香港客戶)，本店將收取 HK$1.4 之行政費
`

const text17 = `您可於 會員專區／訂單查詢 ，點選訂單號，即可查詢訂單的處理進度及每本書的處理狀況。`

const text18 = `在香港二樓書店購物，當您完成訂購後我們將發送訂單確認函至您的電子信箱。 出貨時，會發送《出貨通知書》。
若您沒有收到E-mail，可能是被部分mail server擋信或誤分類為垃圾信件，在此提出幾點解決方式：
1.建議您可變更其他E-mail address試試看。若您欲變更，可登入後至【 我的基本資料 】 處修改即可。
2.請將我們發信Email:order@2-floor.com 加入通訊錄名單中。
3.可至首頁右上角『會員專區』處，隨時查詢訂單處理進度。`


const FAQ = () => {
  return (
    <Container>
      <div style={{ textAlign: "left" }}><h1>常見問題</h1></div>
      <div style={{ textAlign: "left" }}><h3>關於會員</h3></div>
      <Collapse accordion>
        <Panel header="加入會員有什麼優惠？" key="1">
          <p>{text1}</p>
        </Panel>
        <Panel header="註冊不成功？" key="2">
          <p>{text2}</p>
        </Panel>
        <Panel header="無法登入或無法加入會員？" key="3">
          <p>{text3}</p>
        </Panel>
        <Panel header="如何修改會員資料？" key="4">
          <p>{text4}</p>
        </Panel>
        <Panel header="忘記帳號、密碼查詢？" key="5">
          <p>{text5}</p>
        </Panel>
      </Collapse>
      <div style={{ textAlign: "left" }}><h3>關於購書</h3></div>
      <Collapse accordion>
        <Panel header="購書流程？" key="11">
          <p>{text11}</p>
        </Panel>
        <Panel header="無法下單訂書？" key="12">
          <p>{text12}</p>
        </Panel>
        <Panel header="有哪些付款方式？" key="13">
          <p>{text13}</p>
        </Panel>
        <Panel header="遇到下單後出版社缺貨，將如何處理？" key="14">
          <p>{text14}</p>
        </Panel>
        <Panel header="「沒有庫存」的書，訂購要多久？" key="15">
          <p>{text15}</p>
        </Panel>
        <Panel header="「會員基金」是什麼？如何使用？" key="16">
          <p>{text16}</p>
        </Panel>
        <Panel header="如何查詢訂單進度？" key="17">
          <p>{text17}</p>
        </Panel>
        <Panel header="為什麼我收不到《出貨通知E-mail》.《取貨通知E-mail》？" key="18">
          <p>{text18}</p>
        </Panel>
      </Collapse>
    </Container>
  )
}

export default FAQ