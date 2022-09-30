const appendingData3 = (data,container) => {
    container.innerHTML = null;
    data.forEach(el =>{
        if(el.urlToImage === null){
            return false;
        }
        if(el.title === null){
            return false;
        }

        let box_div_rrb = document.createElement("div");
        box_div_rrb.id = "flex_div_rrb";
        box_div_rrb.addEventListener("click",function(){
            localStorage.setItem("news_rrb",JSON.stringify(el));
            window.location.href = "Onclick_News_append.html";
        });
        
        let div_rrb = document.createElement("div");

        let div_new_rrb = document.createElement("div");
        
        let img_rrb = document.createElement("img");
        img_rrb.src = el.urlToImage;
    

        let h_rrb = document.createElement("p");
        h_rrb.innerText = el.title;

        

        div_rrb.append(img_rrb);
        div_new_rrb.append(h_rrb);
        box_div_rrb.append(div_rrb,div_new_rrb);
        container.append(box_div_rrb);
    });
};

export { appendingData3 };

