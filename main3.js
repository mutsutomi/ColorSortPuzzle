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
  for(let a=0;a<bottlesElement.length;a++){
    bottlesElement[a].innerHTML="";
    bottlesElement[a].style.backgroundColor="";
    Arrays[a].length=0;
  }//すべてのボトルと配列の中身を消す

  colors=[
    "red","red","red","red",
    "blue","blue","blue","blue",
    "yellow","yellow","yellow","yellow",
    "green","green","green","green",
    "black","black","black","black",
    "orange","orange","orange","orange"
  ]//色の配列を初期化
  
  for(let c=colors.length;c>1;c--){
    let num=Math.floor(Math.random()*colors.length);
    [colors[num],colors[c-1]]=[colors[c-1],colors[num]];
  }//色の配列をシャッフル

  for(let bottleNumber=0;bottleNumber<6;bottleNumber++){//6本のボトルに適用
    let theBottle=bottlesElement[bottleNumber];
    for(let ballNumber=0;ballNumber<4;ballNumber++){
      let newBall=document.createElement("p");
      newBall.setAttribute("class","ball");
      newBall.setAttribute("id","ball"+ballNumber+"B"+bottleNumber);
      theBottle.insertBefore(newBall,theBottle.firstElementChild);//ボールを作る
      newBall.style.backgroundColor=colors[bottleNumber*4+ballNumber];//色を付ける
      Arrays[bottleNumber].push(colors[bottleNumber*4+ballNumber]);//裏配列に色を反映させる
    }
  }
  select=0;
  document.getElementById("instruct").innerHTML="どのボールを動かす?";
  backNumber=0;
}

document.getElementById("start").addEventListener("click",startGame);

let target=[];
let origin=[];
let select=0;

function selectTarget(){
  if(select===0&&Arrays[this.bottleNumber].length!==0){
    origin=[Arrays[this.bottleNumber],bottlesElement[this.bottleNumber]];
    origin[1].firstElementChild.style.position="absolute";
    origin[1].firstElementChild.style.bottom="250px";
    select=1;
    document.getElementById("instruct").innerHTML="移動先を選択";
  }else if(select===1){
    target=[Arrays[this.bottleNumber],bottlesElement[this.bottleNumber]];
    select=2;
    document.getElementById("instruct").innerHTML="どのボールを動かす?";
  }
}
let originArray=0;
let originBottle=0;
let theBall=0;
let targetArray=0;
let targetBottle=0;

function transport(){
  if(select===2){
  originArray=origin[0];
  originBottle=origin[1];
  theBall=originBottle.firstElementChild;
    
  targetArray=target[0];
  targetBottle=target[1];
    
    if(targetArray.length===0){//移動先のボトルが空の場合
      targetBottle.insertBefore(theBall,targetBottle.firstElementChild);
      let after=originArray.pop();
      targetArray.push(after);
      backNumber=1;
      checkColor();
    }else if(targetArray[targetArray.length-1]===originArray[originArray.length-1]&&targetArray.length<4){//色が同じ場合
      targetBottle.insertBefore(theBall,targetBottle.firstElementChild);
      let after=originArray.pop();
      targetArray.push(after);
      backNumber=1;
      checkColor();
    }else if(targetArray.length===3&&targetArray!==originArray){
      alert("一つのボトルには4つのボールしか入れられません！");
    }else if(targetArray===originArray){
      //何も起こらない
    }else{//色が違う場合
      alert("違う色のボールには重ねられません！");
    }
    
    // if(targetArray[0]===targetArray[1]&&targetArray[0]===targetArray[2]&&targetArray[0]===targetArray[3]){//移動先のボールの色が揃ったら
    //   console.log(targetArray);
    //   originBottle.style.backgroundColor="";
    //   targetBottle.style.backgroundColor="gold";
    //   window.setTimeout(gameClear, 50);
    // }else if(originArray[0]===originArray[1]&&originArray[0]===originArray[2]&&originArray[0]===originArray[3]&&originArray.length!==0){//元のボールの色が揃っていたら
    //   originBottle.style.backgroundColor="gold";
    // }else{
    //   originBottle.style.backgroundColor="";
    // }
    theBall.style.margin="2px 0";
    theBall.style.position="static";
    select=0;
    document.getElementById("instruct").innerHTML="どのボールを動かす?";
  }
};

let completeBottle=0;

function checkColor(){
  if(targetArray[0]===targetArray[1]&&targetArray[0]===targetArray[2]&&targetArray[0]===targetArray[3]){//移動先のボールの色が揃ったら
    targetBottle.style.backgroundColor="gold";
    window.setTimeout(gameClear, 50);
  }else{
    targetBottle.style.backgroundColor="";
  };
  if(originArray[0]===originArray[1]&&originArray[0]===originArray[2]&&originArray[0]===originArray[3]&&originArray.length!==0){//元のボールの色が揃っていたら
    originBottle.style.backgroundColor="gold";
  }else{
    originBottle.style.backgroundColor=""; 
  };
};

function gameClear(){
  completeBottle=0
  for(let bottleNumber=0;bottleNumber<6;bottleNumber++){
    if(Arrays[bottleNumber][0]===Arrays[bottleNumber][1]&&Arrays[bottleNumber][0]===Arrays[bottleNumber][2]&&Arrays[bottleNumber][0]===Arrays[bottleNumber][3]){
      completeBottle+=1;
    }
  }
  if(completeBottle===6){
    alert("おめでとう");
    backNumber=0;
  }
}

let transports=document.getElementsByClassName("transports");
for(let i=0;i<transports.length;i++){
  transports[i].addEventListener("click",{bottleNumber: i, handleEvent: selectTarget});
  transports[i].addEventListener("click",transport);
};

function resetGame(){
  for(let a=0;a<bottlesElement.length;a++){
    bottlesElement[a].innerHTML="";
    bottlesElement[a].style.backgroundColor="";
    Arrays[a].length=0;
  }//すべてのボトルと配列の中身を消す

  for(let bottleNumber=0;bottleNumber<6;bottleNumber++){//6本のボトルに適用
    let theBottle=bottlesElement[bottleNumber];
    for(let ballNumber=0;ballNumber<4;ballNumber++){
      let newBall=document.createElement("p");
      newBall.setAttribute("class","ball");
      newBall.setAttribute("id","ball"+ballNumber+"B"+bottleNumber);
      theBottle.insertBefore(newBall,theBottle.firstElementChild);//ボールを作る
      newBall.style.backgroundColor=colors[bottleNumber*4+ballNumber];//色を付ける
      Arrays[bottleNumber].push(colors[bottleNumber*4+ballNumber]);//裏配列に色を反映させる
    }
  } 
  select=0;
  backNumber=0;
  originArray=0;
  originBottle=0;
  theBall=0;
  targetArray=0;
  targetBottle=0;
};

document.getElementById("reset").addEventListener("click",resetGame);

let backNumber=0;

function back(){
  if(backNumber===1&&select===0){
  console.log(originArray);
  console.log(targetArray);


  theBall=targetBottle.firstElementChild;
  originBottle.insertBefore(theBall,originBottle.firstElementChild);
  let after=targetArray.pop();
  originArray.push(after);  

  console.log(originArray);
  console.log(targetArray);

  targetBottle.style.backgroundColor="";
  backNumber=0;
  }  
}

document.getElementById("back").addEventListener("click",back);