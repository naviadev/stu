let list =[];

function arrManager(){
  pushArr(getElement());
  let div = createList();
  let parent = document.getElementById("parent");
  parent.appendChild(div);
}

function getElement(){
  let string = document.getElementById("list").value;
  return string;
}

function pushArr(getElement){
  list.push(getElement);
}

function createList(){
  let div = document.createElement("div");
  let divText = document.createElement("p");
  divText.innerHTML = list[list.length-1];
  let mainButton = document.createElement("button");
  let buttonSpan = document.createElement("span");
  let button_check = document.createElement("button");
  mainButton.innerHTML="";
  buttonSpan.innerHTML="✔️";
  div.appendChild(divText);
  div.appendChild(mainButton);
  div.appendChild(button_check);
  button_check.appendChild(buttonSpan);
  divSetAtt(div,mainButton,button_check);
  return div;
}
function divSetAtt(div,mainButton,button_check){
  
  div.setAttribute("class","div");
  mainButton.setAttribute("onclick","deleteList(this)");
  // button_check.setAttribute("onclick","deleteList(this)");
  document.getElementById("list").value = "";
}

//무슨 객체에 마우스를 올렸는지 어떻게 알 지
//이 함수를 호출한 객체를 참조하려면 -> this 가능 div 객체를 받아오는
function deleteList(e){
  let div = e.parentNode;
  let p = div.firstChild;
  for(let i = 0; i < list.length; i++){
    if(p.innerHTML == list[i]){list.splice(i,1); div.remove(); return;}
  }
};


  
