let onBtn = document.querySelector('.on');
let image = document.querySelector('.img');


onBtn.addEventListener('click',function(){
    image.src="./assets/images/pic_bulbon.gif";
})

let off =document.querySelector('.off');
off.addEventListener('click', function(){
    image.src="./assets/images/pic_bulboff.gif";
})