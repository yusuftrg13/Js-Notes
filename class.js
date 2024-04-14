//Sınıf tanımlama
class Person{
    constructor(name,age){ //constructor sınıfın nesnesi oluştuğunda otomatik tanımlanır
        this.name=name;
        this.age=age;
    }

    sayHi(){
        console.log(`Merhaba, ben ${this.name}.`)
    }
    getAge(){
        return this.age;

    }
}

let person1=new Person("Ali",35); //Nesne olusturma
person1.sayHi(); 
console.log(person1.getAge());

//Miras Alma

class Managers extends Person{
    constructor(name,age,grade) {
        super(name,age) //üst sınıfın constructorı çağırır
        this.rank=rank;
    }
    Manager(){
        console.log(`${this.name}is studying`);
    }
}
let managers1= new Managers("Ayşe",45,"CTO")
managers1.sayHi();