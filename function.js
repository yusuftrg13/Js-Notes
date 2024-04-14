//Parametresiz Fonksiyon Tanımı
function sayhello(){
    console.log("Merhaba");
}

//Parametre vererek yazalım
function sayname(name){
    console.log("Merhabalar:"+name)
}
sayname("Ayşe");

//Fonksiyonlar birer parametre döndürebilir
function add(x,y){
    return x+y;
}
let result=add(5,9);
console.log(result);

//Arrow function
let double = (x) =>{
    return x*4;
}
console.log(double(10));