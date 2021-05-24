'use strict';


const btnOpen = document.querySelectorAll('.show-modal')

const modal = document.querySelector('.modal')


const btnClose = document.querySelector('.close-modal')

const overlay = document.querySelector('.overlay')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i = 0; i < btnOpen.length; i++ ){
    console.log(btnOpen[i])

    btnOpen[i].addEventListener('click',openModal)

}

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnClose.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)


document.addEventListener('keydown', function(e){
    console.log("was pressed")
    if(e.key == "Escape"){
        if(!modal.classList.contains('hidden')){
            closeModal()

        }
    }
})