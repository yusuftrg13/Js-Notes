//Callbacks işlemleri yerine getirmesi işlemler tamamlandığında koşul sağlandığında ise çağrılması için kullanılan yapıdır.

function selamla(name){
    console.log("Merhaba,"+name+"!");
}
function sayhi(callback){

    callback("Ahmet");
}
sayhi(selamla);

//Asenkron İşlemlerle Kullanımı
function fetchData(callback){
    setTimeout(function(){
        let data="Veriler alindi!";
        callback(data);
    },2000);
}
function processData(data){
    console.log("Veri işlendi:",data);
}
fetchData(processData)