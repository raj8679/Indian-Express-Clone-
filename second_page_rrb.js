import { appendingData2 } from "./scripts/appending_second_rrb.js";



const getDataSecond = async () => {
    let data_div = document.getElementById("political_div");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData2(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getDataSecond();

const getDatasecond = async () => {
    let data_div = document.getElementById("politicals_div");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData2(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getDatasecond();