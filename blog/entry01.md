# Entry 1
##### 11/12/23

  For the freedom project this year, I have decided to use three.js to create a 3D character game. The main objective of the game is to be able to talk to other characters around the map and your reputation fluctuates depending on your decisions. The reason I wanted to create this game is because I wanted to try animation in 3D for characters and I love creating stories. This project idea will give me a way to incorporate both in my freedom project. I chose to use three.js because it looked the most flexible in terms of creating 3D models of my own characters. 
  During my time tinkering with three.js, I tried using the manual and following the steps to set up a scene. This is important because, without the scene, your javascript would not appear in the code. The 3D model needs an area to sit on before it can appear in the HTML. Despite this, I had trouble setting up the scene because I was unsure whether the code was working or not since there was no visual indication. I later discovered I just needed to create an object and animate it. Here is the code for the scene that I would need to use every time. 
  ``` javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

[Next](entry02.md)

[Home](../README.md)
