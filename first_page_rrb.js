import { navbar } from "./components/navbar.js";
let navbar_div_rrb =  document.getElementById("navbar_rrb");
navbar_div_rrb.innerHTML = navbar();


const getData = async () => {
    let data_div = document.getElementById("container_rrb");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/everything?q=India&from=2022-09-28&sortBy=popularity&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        
        console.log(data_rrb.articles);
        actual_data_rrb.forEach(el => {

            // console.log(el);
            if(el.urlToImage === null){
                return false;
            }
            if(el.title === null){
                return false;
            }

            let box = document.createElement("div");
            box.id = "container_div_rrb";
            box.addEventListener("click",function(){
                localStorage.setItem("news_rrb",JSON.stringify(el));
                window.location.href = "Onclick_News_append.html";
            })
        
            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.id = "image_explained_rrb";
        
            let h = document.createElement("h3");
            h.innerText = el.title;
            h.id = "headline_explained_rrb";

            

            box.append(img,h);
            data_div.append(box);
        });
    }catch(e){
        console.log(e);
    }
}
getData();


