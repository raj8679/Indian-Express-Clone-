const btn = document.getElementById('menu_btn');

const overlay = document.getElementById('overlay');

const menu = document.getElementById('mobile-menu');
const section = document.getElementById('section_hidden');

btn.addEventListener('click',navToggle)

function navToggle(){
    btn.classList.toggle('open');
    

    overlay.classList.toggle('overlay_show');
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show_menu');
    section.classList.toggle('section')


}