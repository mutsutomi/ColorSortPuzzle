// window.onload = draw_cg;  // イベントハンドラの設定
// function draw_cg(){ // イベントハンドラ（関数）
//   // １．シーンの作成
//   var scene = new THREE.Scene();  // シーンの作成

//   // ２．カメラの追加
//   var fov = 80;  // 画角
//   // 画面のアスペクト比（縦横比）
//   var aspect = window.innerWidth / window.innerHeight;
//   var near = 1;  // カメラが捉える範囲（近い方）
//   var far = 1000;  // カメラが捉える範囲（遠い方）
//   // カメラの設定
//   var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
//   camera.position.set( 0, 0, 30 );  // カメラを配置する位置（x,y,z）

  // ３．3Dオブジェクト（物体）の配置
  function test(){
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
  // 幅，高さ，奥行きが7の立方体の形状を作成
  // var cubeGeometry = new THREE.BoxGeometry(7, 7, 7);
  // オブジェクトの材質（マテリアル：見え方）を設定（赤色）
  // var cubeMaterial = new THREE.MeshPhongMaterial({color: 0xFF0000});
  // 形状と材質を組み合わせてキューブのメッシュ（ポリゴンの集合）を作成
  // var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(7*i,7*j,0); // 立方体の座標（x,y,z）を設定
  // cube.rotation.set(Math.PI/6, Math.PI/6, 0); // 立方体を回転させる
  // scene.add(cube); // シーンに立方体を追加
  console.log(7*i);
  console.log(7*j);
    }
  }
  }

//   var axes = new THREE.AxisHelper(20); // 長さ20の軸を作成
//   scene.add(axes); // 作った軸をシーンに追加

//   // ４．光源（ライト）の設定と配置
//   var light = new THREE.SpotLight( 0xFFFFFF ); // 光源の種類,色の設定
//   light.position.set( -10, 15, 30 ); // 光源の位置（x,y,z）
//   scene.add( light ); // シーンに光源を追加

//   // ５．レンダラーの設定
//   var renderer = new THREE.WebGLRenderer();  // レンダラーの作成
//   renderer.setClearColor(new THREE.Color(0xEEEEEE));  // 背景色の設定
//   renderer.setSize(window.innerWidth, window.innerHeight); // サイズ設定
//   // レンダラーのDOM要素をbodyタグ内の子要素として追加する
//   document.body.appendChild(renderer.domElement);
//   renderer.render(scene, camera); // シーンのレンダリング

// }