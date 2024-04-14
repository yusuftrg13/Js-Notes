//Set oluşturma
//Setler bir elemanın yalnızca bir kez bulunabileceği bir veri yapısıdır

//Boş set oluşturalım
let set1=new Set();

//Elemanları biz girelim
let set2=new Set([1,2,3,4]);

//Eleman ekleme kaldırma

let set=new Set();

set.add(1)
set.add(2)
set.delete(2) // 2 yi kaldırma

//Eleman kontrolü
let newSet=new Set([1,2,3]);
console.log(set.has(2)); //true
console.log(set.has(5)); //false

//Set boyutu

let set3=new Set([1,5,7])
console.log(set3.size);