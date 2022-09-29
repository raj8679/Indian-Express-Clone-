import { appendingData1 } from "./scripts/appending_rrb.js";



const getIndiaNews = async () => {
    let data_div = document.getElementById("appending_news_rrb");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData1(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getIndiaNews();