//Boş bir oluşturma
let map1=new Map();

//Key-Value tarzı birleştirmeler yapalım
let map2 = new Map([
    ["araba1","skoda"],
    ["araba2","audi"],
    ["araba3","bmw"]
]);

//Anahtar-Deger Ekleme ve Kaldırma
let map = new Map();

map.set("anahtar1","deger");
map.set("anahtar2","deger2");
map.delete("anahtar2");
map.clear();

console.log(map.get("anahtar1"));

map.forEach(function(deger,anahar){
    console.log(anahtar+":"+deger);
})