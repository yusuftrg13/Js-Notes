//Bir object tanımlayalım
let person={
    firstname:"John",
    lastname:"John",
    age:25,
    city:"California",
    job:"Engineer"
};
//Özelliklere erişim
 console.log(person.firstname); 
 console.log(person.city);

 //Yeni özellik ekleme mevcutu degistirme
 person.age=35;
 person["city"]="Detroit";
 person.driverLicence=false;

 //Özelliklerin üzerlerinde gezinme
 for(let key in person){
    console.log(key + ":"+person[key]);
 }

 //Bir diğer yöntem ise foreach
 Object.keys(person).forEach(function(key){
    console.log(key+":"+person[key]);
 });