// 全域環境 在瀏覽器的環境之下，全域作用域的 this 指向 window 物件
// 在Node.js的環境之下，全域作用域的 this 是gobalthis，但在頂層程式碼內this會是空物件{}
console.log(this); 

// 物件方法內的 this 指向該物件
const obj = {
    name: 'EVE',
    greet(){
        console.log(this.name);
    }
};
obj.greet(); // EVE

// 建構函式內的 this 指向新建立的物件 使用 new 關鍵字呼叫建構函式時，this會指向新建立的物件
function Person(name){
    this.name = name;
}
const person1 = new Person('Alice');
console.log(person1.name); // Alice