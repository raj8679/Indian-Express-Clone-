const healht_news = async()=>{
    let res = await fetch (`https://newsdata.io/api/1/news?apikey=pub_11708b81b08dbf38764b8de0ebefe23602366&q=Health&country=in&category=health `)
    let data =  await res.json();
    let actual_data = data.results
    appendhealth_news(actual_data)
    // console.log(data.results)
}

healht_news()

import {navbar} from "./components/navbar.js"

let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = navbar();




const appendhealth_news = (data) =>{
    let news_div = document.getElementById('display');
    news_div.innerHTML = null
    // console.log(data.articles)

    data.forEach(({pubDate,description,image_url,title})=>{
       
        let div1 = document.createElement('div');
        let div3 = document.createElement('div');
        div3.id = 'show_news' ;

        let image = document.createElement('img')

        image.src = image_url

        let div2 = document.createElement('div');
        div2.id = 'titleanddes'

        let h2 = document.createElement('h2');
        h2.innerHTML = title;
          
        let p1 = document.createElement('p');
        p1.id = 'datetime'
        p1.innerHTML  =pubDate;


        let p2 = document.createElement('p');
        p2.id = 'description' ;
        p2.innerHTML = description ;


        div1.append(image)
        div2.append(h2,p1,p2)

        div3.append(div1,div2)
        news_div.append(div3)
        // console.log(image)

    })
}



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


const health_special = document.getElementById('cricket');
health_special.addEventListener("click",health_page)

function health_page (){
window.location.href="index.html"
}


