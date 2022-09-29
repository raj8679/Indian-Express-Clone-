const appendingData2 = (data,container) => {
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
        
        let div_rrb = document.createElement("div");

        let div_new_rrb = document.createElement("div");
        
        let img_rrb = document.createElement("img");
        img_rrb.src = el.urlToImage;
    

        let h_rrb = document.createElement("h2");
        h_rrb.innerText = el.title;

        let p_rrb = document.createElement("p");
        p_rrb.innerText = el.description;

        let p_new_rrb = document.createElement("p");
        p_new_rrb.innerText = el.publishedAt;

        div_rrb.append(img_rrb);
        div_new_rrb.append(h_rrb,p_new_rrb,p_rrb);
        box_div_rrb.append(div_rrb,div_new_rrb);
        container.append(box_div_rrb);
    });
};

export { appendingData2 };