## 請解釋後端與前端的差異。
前端:簡單來說就是一個網頁上我們可以看到的畫面和一些基本的資料處理邏輯，根據我們做的動作像server發出request。
後台:server收到前台resquest後會發送給DB(資料庫)，由DB回傳資料給server，再由server發送給錢台做顯示。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
按下enter後會先向dns詢問google的ip網址，得到這個網址後會將javascript傳送給位在該ip網址的server，再由server發送給後台資料庫，資料庫查詢javascript的資料後回傳給server，再response給前台顯示出搜尋結果


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. **ping ip位址**:輸入此指令若有回傳代表與此ip位址有連線
2. **tail**:顯示檔案最後面的內容
3. **df -h**:檢查硬碟空間