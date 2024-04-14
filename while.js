//Temel while döngüsü
let counter=0;
while(counter<10){
    console.log(counter);
    counter++
}

//Kullanıcıdan bilgi alarak oturum açalım
let password=prompt("Şifrenizi giriniz:");
let correctPasword="1234";

while(password !== correctPasword){
    password = prompt("Hatali Şifre Tekrar Deneyin");
}
console.log("Giriş başarili");

//Dizi elemanlarını yazdırma
let dizim1 = ["sari","lacivert",15,25,"skoda","passat"];
let index=0;

while(index<colors.dizim1){
    console.log(dizim1[index]);
    index++;
}