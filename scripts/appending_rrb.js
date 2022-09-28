const appendingData1 = (data,container) => {
    container.innerHTML = null;
    data.forEach(el =>{
        if(el.urlToImage === null){
            return false;
        }
        let div_rrb = document.createElement("div");
        div_rrb.id = "container_div_rrb";

        let img_rrb = document.createElement("img");
        img_rrb.src = el.urlToImage;
        img_rrb.id = "image_explained_rrb";

        let p_rrb = document.createElement("p");
        p_rrb.innerText = el.title;
        p_rrb.id = "headline_explained_rrb";

        div_rrb.append(img_rrb,p_rrb);
        container.append(div_rrb);
    });
};

export { appendingData1 };