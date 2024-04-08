let list =[];
function arrManager(){
  list.push(document.getElementById("list").value);
  createList();
  document.getElementById("list").value = "";
}
function createList(){
  let div = document.createElement("div");
  let pTag = document.createElement("p");
  let divPtag = document.createElement("div");
  let mainButton = document.createElement("button");
  pTag.innerHTML = list[list.length-1];  
  SetAtt(mainButton,pTag,divPtag, div); 
}
function SetAtt(mainButton,pTag,divPtag, div){
  let parent = document.getElementById("parent");
  divPtag.setAttribute("ondblclick","deleteList(this)");
  mainButton.setAttribute("onclick","makeStyle(this)");
  pTag.setAttribute("id","on");
  
  parent.appendChild(div);
  divPtag.appendChild(pTag);
  div.appendChild(divPtag);
  div.appendChild(mainButton);
}
function makeStyle(e){
  let div = e.parentNode;
  let divPtag = div.firstChild;
  let p = divPtag.firstChild;
  if(p.id === "on"){
    divPtag.style.backgroundColor = "rgba(0, 0, 0, 0.27)"
    p.style.textDecoration =  "line-through";
    p.id = "off"
    e.innerHTML="✔️";
  }
  else{
    divPtag.style.backgroundColor = "rgba(161, 182, 255, 0.44)"
    p.style.textDecoration = "none";
    p.id = "on";
    e.innerHTML="";
  }
}

function deleteList(e){
  let p = e.firstChild;
  let div = e.parentNode;
  for(let i = 0; i < list.length; i++){
    if(p.innerHTML == list[i]){list.splice(i,1); div.remove(); return;}
  }
};


