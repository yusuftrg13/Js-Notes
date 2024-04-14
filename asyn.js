//async await kodun daha okunabilir olmasını sağlayan yapılardır sanki senkron gibi kod çalışır

//Bir async fonk tanımlayalım
async function myFunction(){
    return 58;
}

//await ifadesi asenkron islemi beklerken kullanılır."await","async icinde kuulanılır"

async function fetchData(){
    let response=await fetch("api.blabla");
    let data=await response.json();
    return data;
}