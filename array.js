//Arrayler birden çok değişkeni tek bir çatı altında toplar
let cars=["Skoda","Audi","Kartal","Tofaş","Şahin","Serçe","Togg","Bmw"];

//Dizi elemanlarına erişelim
console.log(cars[2]);

//Dizi uzunluğunu bulalım
console.log(cars.length)

//Diziye eleman ekleme çıkarma
cars.push("Jeep"); //---eleman ekler
cars.pop(); //Son elemanı kaldırır
cars.shift(); //İlk elemanı çıkarır
cars.unshift("Lamborghini"); //eleman ekler


//Dizide dolaşalım
for(let i=0;i<cars.length;i++){
    console.log(colors[i]);
}
cars.forEach(function(cars){
    console.log(cars);
})

let fruits = ["elma", "armut", "muz"];
let vegetables = ["patates", "havuç", "brokoli"];

let food = fruits.concat(vegetables); // ["elma", "armut", "muz", "patates", "havuç", "brokoli"]
let selectedFruits = fruits.slice(0, 2); // ["elma", "armut"]
let foodString = food.join(", "); // "elma, armut, muz, patates, havuç, brokoli"
vegetables.reverse(); // ["brokoli", "havuç", "patates"]
fruits.sort(); // ["armut", "elma", "muz"]
