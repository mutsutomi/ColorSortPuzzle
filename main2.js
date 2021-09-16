"use strict"

let Array0=[];
let Array1=[];
let Array2=[];
let Array3=[];
let Array4=[];
let Array5=[];
let Array6=[];
let Array7=[];
let Arrays=[Array0,Array1,Array2,Array3,Array4,Array5,Array6,Array7];
let colors=[];
let bottlesElement=[
  document.getElementById("bottle0"),
  document.getElementById("bottle1"),
  document.getElementById("bottle2"),
  document.getElementById("bottle3"),
  document.getElementById("bottle4"),
  document.getElementById("bottle5"),
  document.getElementById("bottle6"),
  document.getElementById("bottle7"),
];

function startGame(){
  const bottlesElement=document.getElementsByClassName("bottle");  
  for(let a=0;a<bottlesElement.length;a++){
    bottlesElement[a].innerHTML="";
    Arrays[a].length=0;
  };//すべてのボトルと配列の中身を消す
  
  colors=["red","red","red","red",
  "blue","blue","blue","blue",
  "yellow","yellow","yellow","yellow",
  "green","green","green","green",
  "black","black","black","black",
  "orange","orange","orange","orange",
  ];//色の配列を初期化
  
  for(let c=colors.length;c>1;c--){
    let num=Math.floor(Math.random()*colors.length);
    [colors[num],colors[c-1]]=[colors[c-1],colors[num]];
  }//色をシャッフル
  console.log(colors);
  
  
  for(let B=1;B<7;B++){//Bは何本目のボトルかを示す
    let theBottle=document.getElementById("bottle"+B)
    theBottle.style.backgroundColor=""
    for(let b=1;b<5;b++){//ｂは何個目のボールかを示す
      let newBall=document.createElement("p");
      newBall.setAttribute("class","ball");//ボールを作る
      newBall.setAttribute("id","ball"+b+"B"+B);
      theBottle.insertBefore(newBall,theBottle.firstChild);
      // let ballText=document.createTextNode("ball"+b+"B"+B);
      // newBall.appendChild(ballText);//ボールを識別するための印をつける

      newBall.style.backgroundColor=colors[(B-1)*4+b-1];
      Arrays[B-1].push(colors[(B-1)*4+b-1]);
    }
    console.log(Arrays[B-1]);
  } 
  document.getElementById("bottle7").style.backgroundColor="";
  document.getElementById("bottle8").style.backgroundColor="";
  document.getElementById("clear").textContent="";
}


document.getElementById("start").addEventListener("click",startGame);




let target=[];
let origin=[];
let f=0;



let num=0;

function selectTarget(){
  if(f===0&&Arrays[this.num]!==0){
    console.log(this.num);
  origin=[Arrays[this.num],document.getElementById("bottle"+this.num)];
  origin[1].firstElementChild.style.position="absolute";
  origin[1].firstElementChild.style.bottom="250px";
  f=1;
  document.getElementById("instruct").innerHTML="移動先を選択"
}else if(f===1){
  target=[Arrays[this.num],document.getElementById("bottle"+this.num)];
  f=2;
  document.getElementById("instruct").innerHTML="どのボールを動かす？"
}}


  
  
  function transport(){
    if(f===2){
      let originArray=origin[0];
      // console.log(originArray);
      let originBottle=origin[1];
      // console.log(originBottle);
      let theBall=originBottle.firstElementChild;
      
      let targetArray=target[0];
      // console.log(targetArray);
      let targetBottle=target[1]; 
      // console.log(targetBottle);
      
      if(targetArray.length===0){//移動先のボトルが空の場合
        targetBottle.insertBefore(theBall,targetBottle.firstElementChild);
        let after=originArray.pop();
        targetArray.push(after);
        // console.log(originArray);
        // console.log(targetArray);
      }else if(targetArray[targetArray.length-1]===originArray[originArray.length-1]&&targetArray.length<4){//色が同じ場合
      targetBottle.insertBefore(theBall,targetBottle.firstElementChild);
      let after=originArray.pop();
      targetArray.push(after);
      // console.log(originArray);
      // console.log(targetArray);
    }else if(targetArray.length>3&&targetArray!==originArray){
      alert("一つのボトルには4つのボールしか入れられません！")
    }else if(targetArray===originArray){
      //何も起こらない
    }else {//色が違う場合
      alert("違う色のボールには重ねられません！");
    }
    if(targetArray[0]===targetArray[1]&&targetArray[0]===targetArray[2]&&targetArray[0]===targetArray[3]){
      console.log(targetArray);
      originBottle.style.backgroundColor="";
      targetBottle.style.backgroundColor="gold";
      gameClear();
    
    }else{
      originBottle.style.backgroundColor="";
    }
    theBall.style.margin="2px 0";
    theBall.style.position="static";
    // origin=[];
    // target=[];
    f=0;
  }
};

let completeBottle=0;

function gameClear(){
  completeBottle=0
  for(let B=0;B<6;B++){
    if(Arrays[B][0]===Arrays[B][1]&&Arrays[B][0]===Arrays[B][2]&&Arrays[B][0]===Arrays[B][3] ){
      completeBottle+=1;
    }
  }
  if(completeBottle===6){
    document.getElementById("clear").textContent="おめでとう！すごいね！";
    alert("おめでとう！すごいね！")
    startGame();
  }
}

let transports=document.getElementsByClassName("transports");
for(let i=0;i<transports.length;i++){
  transports[i].addEventListener("click",{num: i, handleEvent: selectTarget});
  transports[i].addEventListener("click",transport);
};



function resetGame(){
  const bottlesElement=document.getElementsByClassName("bottle");  
  for(let a=0;a<bottlesElement.length;a++){
    bottlesElement[a].innerHTML="";
    Arrays[a].length=0;
  };//すべてのボトルと配列の中身を消す
  
  for(let B=1;B<7;B++){//Bは何本目のボトルかを示す
    let theBottle=document.getElementById("bottle"+B)
    theBottle.style.backgroundColor=""
    for(let b=1;b<5;b++){//ｂは何個目のボールかを示す
      let newBall=document.createElement("p");
      newBall.setAttribute("class","ball");//ボールを作る
      newBall.setAttribute("id","ball"+b+"B"+B);
      theBottle.insertBefore(newBall,theBottle.firstChild);
      // let ballText=document.createTextNode("ball"+b+"B"+B);
      // newBall.appendChild(ballText);//ボールを識別するための印をつける
      
      newBall.style.backgroundColor=colors[(B-1)*4+b-1];
      Arrays[B-1].push(colors[(B-1)*4+b-1]);
    }
    console.log(Arrays[B-1]);
  } 
  document.getElementById("bottle7").style.backgroundColor="";
  document.getElementById("bottle8").style.backgroundColor="";
  document.getElementById("clear").textContent="";
};

document.getElementById("reset").addEventListener("click",resetGame);

function back(){
  
}

document.getElementById("back").addEventListener("click",back);