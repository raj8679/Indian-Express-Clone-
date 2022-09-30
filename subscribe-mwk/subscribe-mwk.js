let faqLabel=document.querySelectorAll(".faq-label");

faqLabel.forEach(item=>item.onclick=()=>{
 item.nextElementSibling.classList.toggle('active');
 
 
 let labelIcon=item.lastElementChild;
 let icons=labelIcon.lastElementChild;
 icons.classList.toggle('rotate');

 
})