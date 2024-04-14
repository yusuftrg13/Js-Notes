//Kullanıcıdan ad-soyad bilgisi alan bir fonksiyon çağıralım

function getFullName(){
    let firstname=prompt("Lütfen adinizi giriniz:");
    let lastname=prompt("Lütfen soyadinizi giriniz:");
    return firstname+" "+lastname;
}

//Kullanıcıdan yaş bilgisi almak için fonksiyon yazalım
function getAge(){
    let age=prompt("Lütfen yaş bilgisini giriniz:");
    return parseInt(age); //String olarak alınan yaş bilgisini sayıya çevirmeliyiz
}

//Kullanıcıdan bir de eğitim bilgisi alalım
function getEducation(){
    let education = prompt("Eğitim durumunuzu giriniz(Lise veya üni olmali)");
    return education.toLowerCase(); //yazıyı küçük hale getirelim 
}

//Ehliyet alma durumunu kontrol edelim
function checkLicence(age,education){
    if(age < 21 || (age >= 21 && education !== "lise" && education !== "üniversite")){
        return false;

    }else{
        return true;
    }

}
//Ana işlev
function mainprocess(){
    let fullname=getFullName();
    let age = getAge();
    let education = getEducation();

    if(checkLicence(age,education)){
        console.log(fullname + ", Ehliyet alabilirsiniz:");

    }else{
        console.log(fullname+",ehliyet alamazsiniz");
    }
}
mainprocess();