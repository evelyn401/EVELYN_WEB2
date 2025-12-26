export function NavBar(){
    // 宣告陣列，將元素存入陣列之中;陣列資料，讀取「索引值」，索引值從0開始
    let MenuItems = ["About", "Skill", "Works", "Contact"]; 
    let MenuLinks = ["#Abouts", "#Skills", "#Works", "#Contacts"];

    // 新增 HTML標籤，利用清單列舉資料 ul....li
    
    // 宣告變數 承接資料的主框架（父元素）
    let NavId = document.getElementById("NarBar");
    // 在主框架內新增 ul清單
    let Ul = document.createElement("ul");
    // 添加 ul的 id屬性，樣式表才能讀到，（前面寫"屬性名稱"，後面寫"屬性值"）
    Ul.setAttribute("id", "MenuContent");
    // 將 ul加入到 NavId這個父元素之中
    NavId.appendChild(Ul);
}