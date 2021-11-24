const section = document.getElementsByClassName('flex--direction')[0];
const profile = document.getElementsByClassName('card--profile--position')[0];
const mobile = document.getElementsByClassName('card--profile--active')[0];
const share = document.getElementById('icon');
const icon = share.childNodes[0];
const shareModal = document.getElementsByClassName('share')[0];
const isTrue = true;
share.addEventListener('click',()=>{
    if((window.innerWidth)<1024){
        section.classList.toggle('card--profile');
        profile.classList.toggle('hidden');
        mobile.classList.toggle('hidden');
    }
    share.classList.toggle('mobile');
    icon.classList.toggle('card--share--icon--color')
    if(window.innerWidth>1024){
        shareModal.classList.toggle('hidden')
    }
})

