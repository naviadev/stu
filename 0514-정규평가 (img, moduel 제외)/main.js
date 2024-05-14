let en;
let move1 = document.getElementsByName("moves1")[0];
let pokemonName = document.getElementsByName("pokemonName")[0];
let userGender = document.getElementById("GenderImage-User1");
let imgTag = document.getElementById("imgTag");
let batteImgTagPlayer = document.getElementById("battleImg-player");
let battleNamePlayer = document.getElementById("Battle-name");
let isShiny = document.getElementById("isShiny");
let isGender = document.getElementById("GenderSelect")
let typeBox = document.getElementById("typeBox");
let typeArr = [document.getElementById("type1"), document.getElementById("type2")]

function addInputEvent(){

  let inputEle = {
    h : document.getElementById("Hp"),
    a : document.getElementById("Attack"),
    d : document.getElementById("Defense"),
    spa : document.getElementById("SpAttack"),
    spd : document.getElementById("SpDefense"),
    s : document.getElementById("Speed")
  }

  let pTag = {
    h:document.getElementById("hpValue"),
    a : document.getElementById("attackValue"),
    d : document.getElementById("defenseValue"),
    spa : document.getElementById("spAttackValue"),
    spd : document.getElementById("spDefenseValue"),
    s : document.getElementById("speedValue")

  }

  let key = Object.keys(inputEle);
  
  for(let ele in key){
    
    inputEle[key[ele]].addEventListener("input", (e)=>{
      pTag[key[ele]].innerText = e.target.value
    })

  }

}




move1.addEventListener("change", async (e) => {
  
  let p = e.target.value
  
  let res = await fetch(`/moves/${p}`, { method: 'GET' });
  let jsonData = await res.json();
  
  console.log(jsonData)
  
})



pokemonName.addEventListener("change", async(e)=>{
  
  if(e.target.value == "아구몬"){
    imgTag.setAttribute("src", `https://play.pokemonshowdown.com/sprites/digimon/sprites/digimonani/agumonx.gif`)
  }

  let p = e.target.value
  let res = await fetch(`pokemonName/${p}`, { method: 'GET' });
  let jsonData = await res.json();
  en = jsonData.enName.toLowerCase()
  let typeString = jsonData.type.split(",");
  
  for(let j = 0; j < 2; j++){
    typeArr[j].innerHTML = "";
  }
  for(let i = 0; i < typeString.length; i++){
    typeArr[i].innerHTML = typeString[i];
  }


  if(isShiny.value == "none"){
    imgTag.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani/${en}.gif`)
    batteImgTagPlayer.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-back/${en}.gif`)
  }
  else if(isShiny.value == "Shiny"){
    imgTag.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-shiny/${en}.gif`)
    batteImgTagPlayer.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-back-shiny/${en}.gif`)

  }
})



isShiny.addEventListener("change",()=>{
  console.log("on")
  if(isShiny.value == "none"){
    imgTag.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani/${en}.gif`)
    batteImgTagPlayer.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-back/${en}.gif`)
  }
  else if(isShiny.value == "Shiny"){
    imgTag.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-shiny/${en}.gif`)
    batteImgTagPlayer.setAttribute("src", `https://play.pokemonshowdown.com/sprites/ani-back-shiny/${en}.gif`)

  }

})


isGender.addEventListener("change" , (e)=>{
  if(e.target.value == "Male"){
    userGender.setAttribute("src", "https://play.pokemonshowdown.com/fx/gender-m.png")
  }else if(e.target.value == "Female"){
    userGender.setAttribute("src", "https://play.pokemonshowdown.com/fx/gender-f.png")
  }
  else{
    userGender.setAttribute("src", "")
  }

})




async function getCat(str){
  let img = await fetch("/img/test.gif", {method:"GET"});
  let p = await img.blob()
  let j=  await window.URL.createObjectURL(p);
  
  imgTag.setAttribute("src", `${j.split("blob:")[1]}`) 
}


addInputEvent()