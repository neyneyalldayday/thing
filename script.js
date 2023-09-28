const chineseChicken =
  "http://ccdb.hemiola.com/characters/radicals/85?filter=gb&fields=kDefinition,kMandarin";
const baconChicken = "https://cataas.com/api/cats";
const chickenButton = document.querySelector("#chickenBtn");
const chickenHome = document.querySelector(".chickenhome");
const catStuff = document.querySelector(".collection");
function searchPoneChickenChinese() {
  fetch(chineseChicken)
    .then(function (bananna) {
      return bananna.json();
    })
    .then(function (chicken) {
      console.log(chicken);
      let chickenData = chicken[0].kDefinition;
      let chickenStuff = ``;
      for (let i = 0; i < chickenData.length; i++) {
        chickenStuff += `
           
                <li class="btn-floating pulse  word">Mandarin word: ${chicken[i].kMandarin}</li>        
                <li class="text-large font-bold" >The Fuck it means::  ${chicken[i].kDefinition}</li>                            
            `;
        chickenHome.innerHTML = chickenStuff;
      }

      fetch(baconChicken)
        .then(function (bananna) {
          return bananna.json();
        })
        .then(function (chickentwo) {
          console.log(chickentwo);
          let chickentwodata = ``;
          for (let i = 0; i < chickentwo.length; i++) {
            chickentwodata += `
            <div class="card ">
            <h2>Available : ${chickentwo[i].createdAt}</h2>
            <p>${chickentwo[i].tags[0]}</p>
            <p>${chickentwo[i].tags[1]}</p>
            <p>${chickentwo[i].tags[2]}</p>
            </div>
            `;
            catStuff.innerHTML = chickentwodata;
          }
        });
    });
}

chickenButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked button");
  searchPoneChickenChinese();
});
