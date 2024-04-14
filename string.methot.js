//length uzunluk döndürür
let text="Selamlar Javascript"; 

//topUpperCase() ve toLowerCase() stringi büyük ve küçük harfe çevirir
let message="Welcome To Javascript";
console.log(message.toUpperCase());
console.log(message.toLowerCase());

//charAt() charCodeAt() belirtilen konumdaki karakterleri unicode çevirir

let write="Selam";
console.log(text.charAt(0));
console.log(text.charCodeAt(0));

//indexOf lastIndexOf()
let findcharachter="Karakter Bul";
console.log(findcharachter.indexOf("k"));
console.log(findcharachter.lastIndexOf("h"));

//replace() Belirli alt dizeyi başka bir dizeyle değiştirir
let replace="Bu araba skoda";
console.log(text.replace("skoda","audi"));

//split() stringi parçalara ayırır diziye çevirir
let cevir="Merhaba,Dünya";
console.log(cevir.split("."));