function checklicence(){
    let age=parseInt(document.getElementById("age").value);
    let education = document.getElementById("education").value;

    if(age<21 || (age>=21 && education !=="lise" && education !=="üniversite")){
        document.getElementById("result").textContent = "Ehliyet başvuru durumu:"
    }else{
        document.getElementById("result").textContent = "Ehliyet başvuru durumunuz reddedildi"
    }
     

}