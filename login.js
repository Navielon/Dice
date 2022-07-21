var card=document.getElementById("card");
function openRegister(){
   document.querySelector('.card-front').classList.add('hidden')
   document.querySelector('.card-back').classList.remove('hidden')
   //  card.style.transform="rotateY(-180deg)";
   //  card.style.transform="rotate(360deg)";
}
function openLogin(){
    card.style.transform="rotateY(0deg)";
   document.querySelector('.card-front').classList.remove('hidden')
   document.querySelector('.card-back').classList.add('hidden')

}