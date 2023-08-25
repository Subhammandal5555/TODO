let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let task=document.querySelector("input");
btn.addEventListener("click",function(){
  let ad=document.createElement("li");
  ad.innerText=task.value;
  
  let delBtn=document.createElement("button");
  delBtn.innerText="Delete";
  delBtn.classList.add("delete");
  
  ad.appendChild(delBtn); 
  ul.appendChild(ad);
  task.value="";
})

ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
  let db=event.target.parentElement;
  alert(`${db.innerText}d`)
  db.remove();
}
})