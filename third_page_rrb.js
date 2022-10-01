import { appendingData2 } from "./scripts/appending_second_rrb.js";

import { appendingData3 } from "./scripts/appending_second_cols_rrb.js";

import { navbar } from "./components/navbar.js";
let navbar_div_rrb =  document.getElementById("navbar_rrb");
navbar_div_rrb.innerHTML = navbar();

import {footer} from "./components/footer.js"
    let footer_div=document.getElementById("footer_rj");
    footer_div.innerHTML=footer();

const getIndiaNews = async () => {
    let data_div = document.getElementById("appending_news_rrb");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData2(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getIndiaNews();

const getIndiaNew = async () => {
    let data_div = document.getElementById("appending_new_rrb");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData3(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getIndiaNew();