// function Showpopup(event){
//     event.preventDefault();

//     if(document.getElementyById('popup').checkValidity()){
//         alert('Succesfully Submited')
//     }
//     else
//     (document.getElementById('popup').reportValidity())
// }
setInterval(function () {
    document.getElementById("clock").innerHTML = new Date().toLocaleString();
}, 1000);