//Asenkron işlemleri kullanmak için kullanılan yapıdır.Promiseler bir işlem başarıyla tamamlanması yada
//tamamlanmaması durumunda geri dönecek olan nesnelerdir

//Örnek-Promise oluşturma

let newPromise=new Promise(function(resolve,reject){
    let a=5;
    //Asenkron burda olur
    if(a<5) {
        resolve("Başarili");

    }else{
        reject("Başarisiz");
    }
});