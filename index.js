let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let gender = document.getElementsByClassName("gender");
function calculation() {
    let date = document.forms["inputForm"]["trip-start"].value;
    let numDate = Date.parse(date);
    let newDate = new Date(numDate);
    let numDay = newDate.getDay();
    let rightAnswer = document.getElementById("answer");



    if (date = "" && document.getElementById("flexRadioDefault1").checked) {
        alert("Invalid date");
    } else if (date = "" && document.getElementById("flexRadioDefault2").checked) {
        alert("Invalid date");
    }else if (date != "" && document.getElementById("flexRadioDefault1").checked) {
        rightAnswer.innerHTML = (`Your Akan Name is ${male[numDay]}`);
    }else { rightAnswer.innerHTML = (`Your Akan Name is ${female[numDay]}`);
    }
}
calculation();

console.log(newDate.getDay());
// function calculation () {
//     let date = "mm/dd/yyyy";
// let cc = parseInt(date.slice(5,7));
// let yy = parseInt(date.slice(7,10));
// let mm = parseInt(date.slice(2,4));
// let dd = parseInt(date.slice(0,2));
// c = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7
// let akanName = c;

// if (c=0){
//     alert("Akan name is Kwasi");
// }else alert("Akan name is Akosua");
// if (c=1){
//     alert("Akan name is Kwadow");
// }else alert ("Akan name is Adwoa");
// if (c=2){
//     alert("Akan name is Kwabena");
// }else alert("Akan name is Abenaa");
// if (c=3){
//     alert("Akan name is Kwaku");
// }else alert("Akan name is Akua");
// if (c=4){
//     alert("Akan name is Yaw");
// }else alert("Akan name is Yaa");
// if (c=5){
//     alert("Akan name is Kofi");
// }else alert("Akan name is Afua");
// if (c=6){
//     alert("Akan name is Kwame");
// }else alert("Akan name is Ama");

// }
// calculation ();



