"use strict"

let Bottle1=[];
let Bottle2=[];
let Bottle3=[];
let Bottle4=[];
let Bottle5=[];
let Bottle6=[];
let Bottle7=[];
let Bottle8=[];

let Bottles=[Bottle1,Bottle2,Bottle3,Bottle4,Bottle5,Bottle6,Bottle7,Bottle8];

function startGame(){
  Bottle1=[];
  Bottle2=[];
  Bottle3=[];
  Bottle4=[];
  Bottle5=[];
  Bottle6=[];

  let colors=["red","red","red","red",
  "blue","blue","blue","blue",
  "yellow","yellow","yellow","yellow",
  "green","green","green","green",
  "black","black","black","black",
  "orange","orange","orange","orange",
];

  for(let c=colors.length;c>1;c--){//色をシャッフル
    let num=Math.floor(Math.random()*colors.length);
    [colors[num],colors[c-1]]=[colors[c-1],colors[num]];
  }
  console.log(colors);
  
  const allBottles=document.getElementsByClassName("bottle");
  console.log(allBottles);
  for(let a=0;a<Bottles.length;a++){
    allBottles[a].innerHTML="";
  }//すべての瓶を空にする。

  for(let B=1;B<7;B++){//球を入れる瓶の本数だけ繰り返す。
    
    let b=0;
    for(b=1;b<5;b++){//球を4つ作る。
    let newBall=document.createElement("p");
    newBall.setAttribute("class","ball");
    // newBall.setAttribute("class","bottle"+B);
    newBall.setAttribute("id","ball"+b+"B"+B);
    let theBottle=document.getElementById("bottle"+B);
    let newContent=document.createTextNode("ball"+b+"B"+B);
    newBall.appendChild(newContent);
    theBottle.insertBefore(newBall,theBottle.firstChild);
    
    let ball=document.getElementById("ball"+b+"B"+B);//球に色を付ける。
    ball.style.backgroundColor=colors[(B-1)*4+b-1];

  }
}
//球を配列に追加
let ballB1=document.getElementsByClassName("ball");
Bottle1.from=(ballB1);
console.log(Bottle1);
console.log(Bottle2);
console.log(Bottle3);
  console.log(Bottle4);
  console.log(Bottle5);
  console.log(Bottle6);
  console.log(allBottles);
}



// function startGame(){
//   let colors=["red","blue","green","black",
//   "red","blue","green","black",
//   "red","blue","green","black",
//   "red","blue","green","black",
//   "red","blue","green","black",
//   "red","blue","green","black",];
//   const allBottle=document.getElementsByClassName("bottle");
//   for(let a=0;a<allBottle.length;a++){allBottle[a].innerHTML="";
// }
//   for(let b=1;b<7;b++){

//     for(i=1;i<5;i++){
//     let newBall=document.createElement("p");
//     newBall.setAttribute("class","ball");
//     newBall.setAttribute("id",b+"ball"+i);
//     let bottle=document.getElementById("bottle"+b);
//     let newContent=document.createTextNode(b+"ball"+i);
//     newBall.appendChild(newContent);
//     bottle.insertBefore(newBall,bottle.firstChild);}
    
//   let ball=document.getElementById(b+"ball"+i);

//   for(i=1;i<5;i++){
//     let num=0;
//     do{
//     num=Math.floor(Math.random()*(colors.length+1));
//     console.log(num);
//     console.log(colors[num]);
//     console.log(i);
//   }while(typeof colors[num]==="undefined");
//     console.log(b+"ball"+i);  
//     document.getElementById(b+"ball"+i).style.backgroundColor=colors[num];
//     console.log(num);
//     delete colors[num];
//     console.log(colors)
// }
// }
// }


document.getElementById("start").addEventListener("click",startGame);

function exchange(){
  let bottle1=document.getElementById("bottle1").firstElementChild;
  let bottle2=document.getElementById("bottle2").firstElementChild;
  // let bottle7=document.getElementById("bottle7").firstElementChild;
  console.log(Bottle1);
  console.log(Bottle2);
  bottle1.style.backgroundColor=Bottle2[3];
  bottle2.style.backgroundColor=Bottle1[3];//色を入れ替える
  let origin1=Bottle1.pop();
  let origin2=Bottle2.pop();
  origin1;
  origin2;
  Bottle1.push(origin2);
  Bottle2.push(origin1);
  console.log(Bottle1);
  console.log(Bottle2);
};

document.getElementById("exchange").addEventListener("click",exchange);






// function selectTarget2(){target=[Array2,document.getElementById("bottle2")];}
// function selectTarget3(){target=[Array3,document.getElementById("bottle3")];}
// function selectTarget4(){target=[Array4,document.getElementById("bottle4")];}
// function selectTarget5(){target=[Array5,document.getElementById("bottle5")];}
// function selectTarget6(){target=[Array6,document.getElementById("bottle6")];}
// function selectTarget7(){target=[Array7,document.getElementById("bottle7")];}
// function selectTarget8(){target=[Array8,document.getElementById("bottle8")];}


// function selectOrigin2(){origin=[Array2,document.getElementById("bottle2")];}
// function selectOrigin3(){origin=[Array3,document.getElementById("bottle3")];}
// function selectOrigin4(){origin=[Array4,document.getElementById("bottle4")];}
// function selectOrigin5(){origin=[Array5,document.getElementById("bottle5")];}
// function selectOrigin6(){origin=[Array6,document.getElementById("bottle6")];}
// function selectOrigin7(){origin=[Array7,document.getElementById("bottle7")];}
// function selectOrigin8(){origin=[Array8,document.getElementById("bottle8")];}





// function selectTarget1(){
// if(f===0&&Array1.length!==0){
//   origin=[Array1,document.getElementById("bottle1")];
//   origin[1].firstElementChild.style.position="absolute";
//   origin[1].firstElementChild.style.bottom="250px";
//   f=1;
//   document.getElementById("instruct").innerHTML="移動先を選択"
// }else if(f===1){
//   target=[Array1,document.getElementById("bottle1")];
//   f=2;
//   document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}

// function selectTarget2(){
//   if(f===0&&Array2.length!==0){
//     origin=[Array2,document.getElementById("bottle2")];
//     origin[1].firstElementChild.style.position="absolute";
//     origin[1].firstElementChild.style.bottom="250px";
//   f=1;
//   document.getElementById("instruct").innerHTML="移動先を選択"
// }else if(f===1){
//   target=[Array2,document.getElementById("bottle2")];
//   f=2;
//   document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}

// function selectTarget3(){
//   if(f===0&&Array3.length!==0){
//     origin=[Array3,document.getElementById("bottle3")];
//     origin[1].firstElementChild.style.position="absolute";
//     origin[1].firstElementChild.style.bottom="250px";
//   f=1;
//   document.getElementById("instruct").innerHTML="移動先を選択"
// }else if(f===1){
//   target=[Array3,document.getElementById("bottle3")];
//   f=2;
//   document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}

// function selectTarget4(){
// if(f===0&&Array4.length!==0){
//   origin=[Array4,document.getElementById("bottle4")];
//   origin[1].firstElementChild.style.position="absolute";
//   origin[1].firstElementChild.style.bottom="250px";
//   f=1;
//   document.getElementById("instruct").innerHTML="移動先を選択"
// }else if(f===1){
//   target=[Array4,document.getElementById("bottle4")];
//   f=2;
//   document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}

// function selectTarget5(){
//   if(f===0&&Array5.length!==0){
//     origin=[Array5,document.getElementById("bottle5")];
//     origin[1].firstElementChild.style.position="absolute";
//     origin[1].firstElementChild.style.bottom="250px";
//     f=1;
//   document.getElementById("instruct").innerHTML="移動先を選択"
// }else if(f===1){
//   target=[Array5,document.getElementById("bottle5")];
//   f=2;
//   document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}

// function selectTarget6(){
//   if(f===0&&Array6.length!==0){
//     origin=[Array6,document.getElementById("bottle6")];
//     origin[1].firstElementChild.style.position="absolute";
//     origin[1].firstElementChild.style.bottom="250px";
//     f=1;
//     document.getElementById("instruct").innerHTML="移動先を選択"
//   }else if(f===1){
//     target=[Array6,document.getElementById("bottle6")];
//     f=2;
//     document.getElementById("instruct").innerHTML="どのボールを動かす？"
//   }}
  
//   function selectTarget7(){
//     if(f===0&&Array7.length!==0){
//       origin=[Array7,document.getElementById("bottle7")];
//       origin[1].firstElementChild.style.position="absolute";
//       origin[1].firstElementChild.style.bottom="250px";
//       f=1;
//     document.getElementById("instruct").innerHTML="移動先を選択"
//   }else if(f===1){
//     target=[Array7,document.getElementById("bottle7")];
//     f=2;
//     document.getElementById("instruct").innerHTML="どのボールを動かす？"
//   }}
  
//   function selectTarget8(){
//   if(f===0&&Array8.length!==0){
//     origin=[Array8,document.getElementById("bottle8")];
//     origin[1].firstElementChild.style.position="absolute";
//     origin[1].firstElementChild.style.bottom="250px";
//     f=1;
//     document.getElementById("instruct").innerHTML="移動先を選択"
//   }else if(f===1){
//     target=[Array8,document.getElementById("bottle8")];
//     f=2;
//     document.getElementById("instruct").innerHTML="どのボールを動かす？"
// }}
