



// function getPizza(){
//     return new Promise(function(resolved){
//          //! instance
//   let myHttp = new XMLHttpRequest();

//   //!mestablish connection (kobry)
//   myHttp.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");

//   //! msendrequest (3rbya n2l)
//   myHttp.send();
//   //!readystate
//   let data;
//   myHttp.addEventListener("readystatechange", function () {
//     if (this.readyState == 4) {
//       var result = JSON.parse(myHttp.response);
//       data = result.recipes;

//       console.log("pizzaa");
//       console.log(data);
      
//       //    display(data);
//       resolved();
//     }
//   });
//     })
 
// }
// function getPasta() {
//         return new Promise(function (resolved) {
//           //! instance
//           let myHttp = new XMLHttpRequest();

//           //!mestablish connection (kobry)
//           myHttp.open(
//             "GET",
//             "https://forkify-api.herokuapp.com/api/search?q=pasta"
//           );

//           //! msendrequest (3rbya n2l)
//           myHttp.send();
//           //!readystate
//           let data;
//           myHttp.addEventListener("readystatechange", function () {
//             if (this.readyState == 4) {
//               var result = JSON.parse(myHttp.response);
//               data = result.recipes;

//               console.log("pastaaaaaaaaaaa");
//               console.log(data);
//               resolved();

//               //    display(data);
//             }
//           });
//         });

// }
// function test(){
//     console.log("hiiiiiiiiiiiiiiiiiii");
    
// } 



// function one(callback){
// console.log("one");
// callback();
// }
// function two(callback) {
//   console.log("two");
//   callback();
// }
// function three(callback) {
//   console.log("three");
//   callback();

// }
// one(function(){
//     two()
// })


//?call back
// getPasta(function(){
//     getPizza(test)
// })

// promise

// var x=new Promise(function(resolved,rejected){
//     console.log("hassan");
    
//     var flag=false
//     if(flag){
//         resolved()
//     }
//     else{
//         rejected()
//     }

// })
// function tmam(){
//     console.log("tamm");
    
// }
// function errr() {
//   console.log("errr");
// }
// x.then(tmam).catch(errr)

//? promise
// getPasta().then(getPizza).then(test)
// getPasta().then(function(){
//    return getPizza()}).then(test)


//TODO async & await

// async function getData(){
//     await getPasta();
//     // await getPizza();
//     test()
// }
// getData()
let data=[]
// async function getPasta(){
//     let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pasta')
//     let finalRes=await response.json()
//     data=finalRes.recipes
//     console.log(data);
    
// }
// async function getPizza(){
//     let finalRes=await response.json()
//     data=finalRes.recipes
//     console.log(data);
    
// }
async function getMeals(mealName="pizza"){
    let response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${mealName}`)
    let finalRes = await response.json();

    data = finalRes.recipes;
    display(data);
    endload()

}

function display(arr) {
  var cartona = "";
  for (var i = 0; i < arr.length; i++) {
    cartona += ` <div class="col-md-3">
            <div class="card" >
              <img src="${arr[i].image_url}" class="card-img-top w-100" alt="..." />
              <div class="card-body">
                <p class="card-text">
                ${arr[i].title}
                </p>
              </div>
            </div>
          </div>`;
  }
  document.getElementById("row-body").innerHTML = cartona;
}
var btns=document.querySelectorAll('.nav-link')
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        getMeals(this.innerHTML);

    })
}
getMeals()


const loadingScreen=document.getElementById('loading')

function endload(){
 loadingScreen.classList.add("d-none");
 document.body.classList.remove("overflow-hidden");
}