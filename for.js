//Temel denklemde for döngüsü
for(let i=0;i<5;i++){
    console.log(i);
}

//Dizi elemanı yazdırma

let dizi=["Ankara","İstanbul","İzmir","New York","Paris"];
for(let i=0;i<dizi.length;i++){
    console.log(dizi[i]);
}

//Toplama Hesaplama
let numbers=[1,2,3,4,5];
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log("Toplam",sum);

//Çift sayıları yazdırma
for(i=0;i<20;i++){
    if(i%2==0){
        console.log(i);
    }
}